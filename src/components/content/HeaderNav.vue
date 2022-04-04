<template>
  <div id="header">
    <div class="logo">
      <img src="@assets/images/logo.png" alt="logo">
    </div>
    <div class="h_title">
      <img src="@assets/images/title.png" alt="">
    </div>
    <div class="user" @click="userClick">
      <img src="@assets/images/user.png" alt="" >
      <a  id="user" >{{this.$store.state.userName}}</a>
    </div>
  </div>

</template>

<script>
import {getSession} from "@/common/session";

export default {
  name: "NavBar",
  methods:{
    userClick(){
      if(this.$store.state.isLogin){
        this.$router.push('/user')
      }else{
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
#header{
  padding-top: 23px;
  /*margin-bottom: 30px;*/
  padding-bottom: 5px;
  overflow: hidden;
  margin-bottom: 1px;
  /* border-bottom: 1px solid #ccc; */
  border-radius: 5px;
  /*box-shadow: 0 0 5px 0 ;*/
}
.logo img{
  height: 55px;
  float: left;
  margin-left: 100px;
}
.h_title img{
  height: 40px;
  float: left;
  margin-top: 9px;
  margin-left: 20px;
}
.user{
  float: right;
  margin-right: 25px;
  /* margin-top: 5px; */
  text-align: center;
}
.user img{
  border: 0px;
  width: 35px;
  margin-top: 14px;
}

</style>