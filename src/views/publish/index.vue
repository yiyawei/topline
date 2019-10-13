<template>
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <span>发表文章</span>
    </div>
    <el-form ref="form"
             :model="form"
             size='medium'
             label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.title"
                  placeholder="文章标题"
                  class="title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">发表</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  width: 400px;
}
</style>
