<template>
  <div id="main">
    <div id="main_content">
      <div class="main_left">
        <img src="@assets/images/register.png" alt="">
      </div>
      <div class="main_right">
        <div class="form1">
          <h1>创建一个账号</h1>
          <p>PDF to epub 文件转换工具</p>
          <form  form >
            <input type="text" class='input1' v-model="email" placeholder="email">
            <input class='input1' v-model="password" placeholder="password" type="password">
            <input class='input1' v-model="re_password" placeholder="re_password" type="password">
            <input  class="sub_button" value="注册" id="btnRegister" @click="registerClick">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ElMessageBox} from "element-plus";
import {register} from "@/network/register";

export default {
  name: "RegisterMain",
  data(){
    return {
      email:'',
      password:'',
      re_password:''
    }
  },
  methods:{
    registerClick(){
      let registerIfo = {
        email:this.email,
        password:this.password
      }
      if(this.password !== this.re_password){
        ElMessageBox.alert('两次密码输入不同', '', {
          confirmButtonText: '重新输入'
        })
      }else{
        register(registerIfo).then(res => {
          if(res.result.code === 200){
            ElMessageBox.alert('注册成功!', '', {
              confirmButtonText: '点击登录',
              callback: () => {
                this.$router.replace('/login')
              },
            })
          }else if(res.result.code === 1){
            ElMessageBox.confirm(
                '改用户名已经注册，是否直接登录',
                'Tip',
                {
                  confirmButtonText: '登录',
                  cancelButtonText: '继续注册',
                  type: 'info',
                }
            )
                .then(() => {
                  this.$router.replace('/login')
                })
                .catch(() => {
                  this.email = ''
                })
          }
        })
      }

    }
  }
}
</script>

<style scoped>
.main_left{
  width: 53%;
  float: left;
  margin-left: 0px;
}
.main_left img{
  margin-top: 100px;
  width: 100%;
  margin-left:0px;
}
.main_right{
  width: 38%;
  float:left ;
  margin-top: 60px;
  margin-left: 30px;
}
/* .re_form{
    border: #ccc solid 1px;
    border-radius: 10px;
    height: 45vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
} */
.form1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-left: 50px;
}
.form1{
  margin-bottom: 10px;
  /*margin-left: 30px;*/
}
form{
  /* border: #ccc solid 1px; */
  border-radius: 10px;
  height: 45vh;
  width: 87%;
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
  text-align: center;
}
</style>