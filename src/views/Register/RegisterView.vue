<template>
  <div id="container">
    <header-nav/>
    <register-main/>
  </div>
  <div id="footer">
  </div>
</template>

<script>
import HeaderNav from "@/components/content/HeaderNav";
import RegisterMain from "@/views/Register/childComps/RegisterMain";

export default {
  name: "Register",
  components:{
    HeaderNav,
    RegisterMain
  }
}
</script>

<style scoped>


</style>