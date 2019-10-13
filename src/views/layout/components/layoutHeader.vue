<template>
  <div class="header">
    <el-row>
      <el-col :span="14">
        <span class="title">江苏传智播客等等等等</span>
      </el-col>
      <el-col :span="4"
              :offset="6">
        <span class="msg">消息</span>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userInfo">
            <img class="userIcon"
                 :src="userInfo.photo"
                 alt />
            <span class="userName">{{userInfo.name}}</span>
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
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  .title {
    font-size: 18px;
  }
  .msg {
    display: inline-block;
    margin-right: 10px;
  }
  .userInfo {
    cursor: pointer;
    .userIcon {
      border-radius: 50%;
      margin-right: 10px;
      width: 35px;
      height: 35px;
    }
  }
}
</style>
