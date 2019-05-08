<template>
  <div class="login">
      <div class="login-box">
        <h1>后台管理系统</h1>
        <div class="box">
          <el-form>
            <el-form-item label="用户名">
              <el-input v-model="formData.username" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formData.password" type="password" />
            </el-form-item>
            <div class="btn-wrap">
              <el-button type="primary" size="large" @click="handleLogin">
                立即登录
              </el-button>
            </div>
          </el-form>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "login",
    data () {
      return {
        formData: {
          username: 'admin',
          password: 'admin'
        }
      }
    },
    methods: {
      handleLogin () {
        axios.post('/api/admin/adminUser/login', this.formData).then(res => {
          if(res.data.code == 200){
            this.$router.push('/layout/index')
          } else {
            alert('用户名密码错误');
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" src="./index.scss">

</style>
