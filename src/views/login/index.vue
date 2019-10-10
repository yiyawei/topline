<template>
  <div class="loginwrap">
    <div class="login">
      <el-form ref="anyword"
               :model="myLogin"
               :rules="rules">
        <div class="head">
          <img src="./img/login_logo.png"
               alt />
        </div>
        <el-form-item prop="mobile">
          <el-input v-model="myLogin.mobile"
                    placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row :gutter="20">
            <el-col :span="15">
              <el-input v-model="myLogin.code"
                        placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button @click="getcode"
                         :disabled="!!timer">
                {{ timer ? `${codeTime}秒后获取` : '获取验证码'}}
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="read">
          <el-checkbox class="checkBtn"
                       v-model="myLogin.read">
            我已阅读并同意
            <a>用户协议</a>与
            <a>隐私条款</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="loginbtn"
                     @click="login"
                     :loading="loginloading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myLogin: {
        mobile: '',
        code: '',
        read: false
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度不小于11', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度为6', trigger: 'blur' }
        ],
        read: [
          { pattern: /true/, message: '请阅读用户协议', trigger: 'change' }
        ]
      },
      codeTime: 10,
      timer: null,
      loginloading: false
    }
  },
  methods: {
    login () {
      // 验证整个表单
      this.$refs['anyword'].validate(valid => {
        if (valid) {
          // 如果验证通过,就调用异步请求方法
          this.sendAxios()
        }
      })
    },
    // 封装登录异步请求方法
    sendAxios () {
      console.log(this)
      this.loginloading = true
      this.$axios({
        method: 'post',
        url: '/mp/v1_0/authorizations',
        data: this.myLogin
      })
        .then(res => {
          // res 中有一个属性叫做 data, 在 data 中有两个属性后面我们会用上： token , refresh_token
          let userInfo = res.data.data
          window.localStorage.setItem('userInfo', userInfo)
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
          this.loginloading = false
          // 跳转到首页
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          // 提示登陆失败
          this.$message.error('用户名或验证码错误')
          this.loginloading = false
        })
    },
    // 验证码点击时的事件
    getcode () {
      // 点击时,先验证手机号,
      // 发送请求,获取验证码,这里没有接口,先不做
      // 按钮变换文字 开启倒计时
      this.$refs['anyword'].validateField('mobile', errMsg => {
        if (errMsg.trim.length > 0) {
          // 如果信息有东西,说明不通过验证,直接退出函数

        } else {
          // 相反,说明通过验证,开启倒计时
          this.timer = setInterval(() => {
            this.codeTime--
            if (this.codeTime <= 0) {
              // 秒数到了之后重新设置时间并清除计时器
              this.codeTime = 10
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
body,
html {
  height: 100%;
}
.loginwrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("./img/login_bg.jpg");
  .login {
    background-color: #fff;
    padding: 30px;
    min-width: 300px;
    .head {
      text-align: center;
      margin-bottom: 20px;
      img {
        width: 150px;
      }
    }
    .checkBtn {
      a {
        color: #3296fa;
        text-decoration: underline;
      }
    }
    .loginbtn {
      width: 100%;
    }
    .el-row {
      margin: 0;
    }
  }
}
</style>
