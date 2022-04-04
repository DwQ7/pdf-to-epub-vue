<template>
  <div id="main">
    <div id="main_content">
      <div class="main_left">
        <img src="@assets/images/login.png" alt="">
      </div>
      <div class="main_right">
        <div class="form1">
          <h1>登录你的账号</h1>
          <p>PDF to epub 文件转换工具</p>
          <form  form action="">
            <input type="text" class='input1' id="email" placeholder="email" v-model="email">
            <input type="password" class='input1' id="password" placeholder="password" v-model="password">
            <div class="tips">
              <a href="/register">还未注册？</a>
              <a href="">忘记密码？</a>
            </div>
            <input  class="sub_button" value="登录" id="btnLogin" @click="loginClick">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from "@/network/login";
import {getSession, setSession} from "@/common/session";

export default {
  name: "LoginMain",
  data(){
    return {
      email:'',
      password:''
    }
  },
  methods:{
    loginClick(){
      let loginIfo = {
        email:this.email,
        password:this.password
      }
      login(loginIfo).then(res =>{
        if(res !== 'err'){
          this.$store.commit('updateLoginState',res)
          this.$store.state.passWord = this.password
          this.$router.replace('/home')
        }
      })
    }
  }
}
</script>

<style scoped>
#main_content{
  height: 100vh;
  margin-left: 10px;
  overflow: hidden;
}

.main_right{
  width: 42%;
  margin-top: 60px;
}
.main_left{
  width: 53%;
}
.main_left img{
  margin-top: 100px;
  width: 100%;
  margin-left:0px;
}
.form1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-left: 50px;
}
.form1 h1{
  margin-bottom: 10px;
}
form{
  /* border: #ccc solid 1px; */
  border-radius: 10px;
  height: 45vh;
  width: 82%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow:  5px 5px 5px 5px  #ccc;
}
form >:first-child{
  margin-top: 40px;
}
.tips{
  color: #ccc;
}
.tips a{
  text-decoration:none;
  color: #000;
  display: block;
  float: left;
}
.tips >:first-child{
  margin-right: 35px;
}
.input1{
  outline: none;
  width: 80%;
  padding: 7px;
  border-radius: 20px;
  border: 5px solid #d8d8d9;
}
.input1:active, .input1:hover{
  border: 5px solid #b8e4ff;
}
input:focus{
  border: 5px solid #b8e4ff;
}
.sub_button{
  outline:none;
  background-color: #2b32b2;
  padding: 10px 70px 10px 70px;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 45px;
}
</style>