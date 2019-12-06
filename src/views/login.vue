<template>
  <section class="login">
    <div class="content common-card">
      <ul class="form">
        <li class="item">
          <div class="title">用户名/邮箱:</div>
          <div class="input">
            <input type="text" v-model="formData.user">
          </div>
        </li>
        <li class="item">
          <div class="title">密码:</div>
          <div class="input">
            <input type="password" v-model="formData.password">
          </div>
        </li>
        <li class="item last-item">
          <button class="btn" @click="goLogup">注册</button>
          <button class="btn" :class="{loading: loading}" @click="submit">登录</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import { ValidationProvider, required, extend } from 'vee-validate'
  export default {
    name: "login",
    data () {
      return {
        loading: true,
        formData: {
          user: '',      // 用户名或者邮箱
          password: ''    // 密码
        }
      }
    },
    components: {
      ValidationProvider
    },
    methods: {
      submit () {
        this.$http.login({
          id: this.formData.user,
          password: this.formData.password,
        }).then((val) => {
          console.log(val);
        });
      },
      goLogup () {
        this.$router.push('/logup')
      }
    }
  }
</script>

<style scoped>
  .login{
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
  }
  .content{
    width: 500px;
    padding: 50px;
    box-sizing: border-box;
  }
  .form{
    width: 100%;
  }
  .item{
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item+.item{
    margin-top: 10px;
  }
  .item.last-item{
    margin-top: 40px;
  }
  .title{
    flex-shrink: 0;
    min-width: 100px;
    text-align: right;
    font-size: 16px;
  }
  .input{
    flex-grow: 1;
    width: 100%;
    margin-left: 20px;
  }
  .input input{
    width: 100%;
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #CCC;
    font-size: 16px;
  }
  .item.last-item{
    justify-content: space-between;
  }
  .btn{
    color: #888;
    font-size: 16px;
    transition: color 0.4s;
    margin-left: 50px;
    margin-right: 50px;
  }
  .btn:hover{
    color: #555;
  }
</style>