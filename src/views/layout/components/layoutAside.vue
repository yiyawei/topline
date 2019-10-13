<template>
  <div class="asider">
    <el-menu default-active="/home"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             :unique-opened="true"
             :router="true">
      <el-menu-item index="/home">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <!-- <i class="el-icon-film"></i> -->
          <span>内容管理</span>
        </template>
        <el-menu-item index="/publish">发布文章</el-menu-item>
        <el-menu-item index="/artical/list">内容列表</el-menu-item>
        <el-menu-item index="2-3">评论列表</el-menu-item>
        <el-menu-item index="2-4">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <!-- <i class="el-icon-film"></i> -->
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="3-1">图文数据</el-menu-item>
        <el-menu-item index="3-2">粉丝概况</el-menu-item>
        <el-menu-item index="3-3">粉丝画像</el-menu-item>
        <el-menu-item index="3-4">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
