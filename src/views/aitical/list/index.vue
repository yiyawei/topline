<template>
  <div>
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <span>全部图文</span>
      </div>
      <el-form ref="form"
               :model="form"
               label-width="80px">
        <el-form-item label="文章状态">
          <el-radio-group v-model="form.status">
            <el-radio :label="undefined">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
          <el-select v-model="form.channel_id"
                     placeholder="请选择">
            <el-option v-for='(item,index) in category'
                       :label="item.name"
                       :key="index"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择">
          <el-date-picker v-model="form.value1"
                          type="daterange"
                          range-separator="至"
                          value-format="yyyy-MM-dd"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card table">
      <div slot="header"
           class="clearfix">
        <span>共找到{{articalCount}}条符合条件的内容</span>
      </div>
      <el-table :data="listData"
                style="width: 100%"
                v-loading="isLoading">
        <el-table-column label="图片"
                         align="center">
          <template slot-scope="scope">
            <img :src="scope.row.cover.images[0]"
                 alt="标题图片"
                 class="titleImg">
          </template>
        </el-table-column>
        <el-table-column prop="title"
                         label="标题"
                         width="180"
                         align="center">
        </el-table-column>
        <el-table-column label="状态"
                         align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 0">草稿</span>
            <span v-if="scope.row.status === 1">待审核</span>
            <span v-if="scope.row.status === 2">审核通过</span>
            <span v-if="scope.row.status === 3">审核失败</span>
            <span v-if="scope.row.status === 4">已删除</span>
          </template>
        </el-table-column>
        <el-table-column prop="pubdate"
                         label="发布日期"
                         align="center">
        </el-table-column>
        <el-table-column label="操作"
                         align="center">
          <template slot-scope="scope">
            <el-button round><i class="el-icon-edit"></i>编辑</el-button>
            <el-button round
                       @click="delArticle(scope.row)"><i class="el-icon-delete"></i>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background
                     layout="prev, pager, next"
                     :page-size="10"
                     :disabled="isLoading"
                     @prev-click="prePage"
                     @next-click="nextPage"
                     @current-change="currentPage"
                     :total="articalCount"
                     class="pageChange">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        status: undefined,
        channel_id: undefined,
        value1: []
      },
      listData: [],
      articalCount: 0,
      category: [],
      page: 1,
      per_page: 10,
      isLoading: false
    }
  },
  watch: {
    form: {
      deep: true,
      handler: function (newV, oldV) {
        console.log('我被触发了,我是深度监听')
        this.getArticleList()
      }
    }
  },
  methods: {
    // 筛选后的请求参数封装方法
    getForm () {
      let beginPubdate = this.form.value1 ? this.form.value1[0] : ''
      let endPubdate = this.form.value1 ? this.form.value1[1] : ''
      let formObj = {
        status: this.form.status,
        channel_id: this.form.channel_id,
        begin_pubdate: beginPubdate,
        end_pubdate: endPubdate,
        page: this.page,
        per_page: this.per_page
      }
      return formObj
    },
    // 页码切换方法(上一页)
    prePage (page) {
      this.page--
    },
    // 页码切换方法(下一页)
    nextPage (page) {
      this.page++
    },
    // 页码切换方法(点击页码)
    currentPage (page) {
      this.page = page
      this.getArticleList()
    },
    // 请求文章列表方法
    getArticleList () {
      this.isLoading = true
      this.$axios({
        url: '/mp/v1_0/articles',
        method: 'get',
        params: this.getForm()
      }).then(res => {
        this.listData = res.results
        this.articalCount = res.total_count
        this.isLoading = false
      }).catch(err => {
        console.log(err)
        this.isLoading = false
      })
    },
    // 获取频道列表方法
    getcategory () {
      this.$axios({
        url: '/mp/v1_0/channels',
        method: 'get'
      }).then(res => {
        this.category = res.channels
      }).catch(err => {
        console.log(err)
      })
    },
    // 删除文章方法
    delArticle (row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios({
          url: `/mp/v1_0/articles/${row.id}`,
          method: 'DELETE'
        }).then(res => {
          console.log(res)
          this.getArticleList()
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        })
      })
    }
  },
  created () {
    this.getcategory()
    this.getArticleList()
  }
}
</script>

<style lang="less" scoped>
.table {
  margin-top: 20px;
  .titleImg {
    width: 230px;
    height: 150px;
  }
  .pageChange {
    text-align: center;
    margin-top: 20px;
  }
}
.text {
  font-size: 18px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
