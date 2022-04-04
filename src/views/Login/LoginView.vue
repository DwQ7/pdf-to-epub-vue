<template>
  <div id="container">
    <header-nav/>
    <login-main/>
  </div>
  <div id="footer">
  </div>
</template>

<script>
import HeaderNav from "@/components/content/HeaderNav";
import LoginMain from "@/views/Login/childComps/LoginMain";

export default {
  name: "LoginView",
  components:{
    HeaderNav,
    LoginMain
  }
}
</script>

<style scoped>


</style>