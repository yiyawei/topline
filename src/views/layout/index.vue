<template>
  <el-container>
    <el-aside width="200px">
      <div class="logo">
        <img src="@/assets/logo_admin.png"
             alt="">
      </div>
      <layoutAside></layoutAside>
    </el-aside>
    <el-container>
      <el-header>
        <layoutHeader></layoutHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from './components/layoutAside'
import layoutHeader from './components/layoutHeader'
export default {
  components: {
    layoutAside,
    layoutHeader
  }
}
</script>

<style lang="less" scoped>
body,
html,
.el-container {
  height: 100%;
}
.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 120px;
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
}

.el-aside {
  background-color: #323745;
}

.el-main {
  background-color: #e9eef3;
}
</style>
