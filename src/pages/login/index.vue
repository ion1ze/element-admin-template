<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="login-header">
        <h1 class="title">系统登录</h1>
        <span class="subtitle">一款简单好用的后台前端模板</span>
      </div>
      <div class="login-body">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" show-password>
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="captcha" class="el-form-item-captcha">
            <el-input v-model="form.captcha" placeholder="请输入验证码">
              <i slot="prefix" class="el-input__icon el-icon-picture-outline"></i>
            </el-input>
            <div class="captcha" @click="onChangeCaptcha">
              <img src="@/assets/images/captcha.png" alt="captcha"/>
            </div>
          </el-form-item>
        </el-form>
        <div class="login-body-operations">
          <el-button type="primary" @click="onSubmit" style="width: 100%;">登录</el-button>
          <el-button @click="onReset" style="width: 100%;">重置</el-button>
        </div>
      </div>
      <div class="login-footer">
        <span>&copy; 2022 Element Admin. All Rights Reserved</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'LoginView',
  data(){
    return {
      form:{
        username:'admin',
        password:'123456',
        captcha:'12345'
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 32, message: '用户名长度在 5 到 32 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 32, message: '密码长度在 6 到 32 个字符', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 5, message: '验证码为5位', trigger: 'blur' }
        ],
      }
    };
  },
  methods:{
    onSubmit(){
      this.$refs['form'].validate((isValidated)=>{
        if(isValidated){
          this.$router.push('/dashboard/overview');
        }
      });
    },
    onReset(){
      this.$refs['form'].resetFields();
      this.$message.success('重置表单成功');
    },
    onChangeCaptcha(){
      // 改变图片验证码逻辑
      console.log('改变验证码');
    }
  }
};
</script>
<style lang="less">
.login-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #66b1ff;

  .login {
    padding: 15px;
    background-color: #ffffff;
    border-radius: 3px;

    .login-header {
      padding: 30px 0;
      text-align: center;
      
      .title {
        color: var(--ea-text-color-primary);
      }

      .subtitle {
        color: var(--ea-text-color-secondary);
      }
    }

    .login-body {
      min-width: 350px;

      .el-form-item-captcha {
        .el-form-item__content {
          display: flex;

          .captcha {
            height: 40px;
            cursor: pointer;
            padding: 0 3px;

            & > img {
              height: 40px;
            }
          }
        }
      }

      .login-body-operations {
        button {
          margin: 3px 0;
        }
      }
    }

    .login-footer {
      padding: 20px 0;
      font-size: 13px;
      color: var(--ea-text-color-secondary);
      text-align: center;
    }
  }
}
</style>