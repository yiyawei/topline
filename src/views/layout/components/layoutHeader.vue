<template>
  <div class="header">
    <el-row>
      <el-col :span="14">江苏传智播客等等等等</el-col>
      <el-col :span="4"
              :offset="6">
        <span class="msg">消息</span>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userInfo">
            <img class="userIcon"
                 src="@/assets/avatar.jpg"
                 alt />
            <span class="userName">黑海</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  .msg {
    display: inline-block;
    margin-right: 10px;
  }
  .userInfo {
    cursor: pointer;
    .userIcon {
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
