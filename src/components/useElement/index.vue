<template>
  <el-container style="height: 400px">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <i class="el-icon-delete"></i>
      </el-header>
      <el-main style="height: 1000px;" class="page-component__scroll">
        <div class="block">
          <h3>各种子菜单</h3>
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
          <h3>开关</h3>
          <el-switch v-model="switchVal" active-color="#13ce66" inactive-color="#ccc"></el-switch>
        </div>
          <el-backtop
            target=".page-component__scroll "
          >
          </el-backtop>
          <el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
      </el-main>
      <el-footer>
        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      switchVal: true,
      value: [],
      options: [
        {
          value: 'yiji',
          label: '一级菜单',
          children: [
            {
              value: 'erji',
              label: '二级菜单'
            },
            {
              value: 'yiji01',
              label: '一级菜单01',
              children: [
                {
                  value: 'Erji01',
                  label: '二级菜单02'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
