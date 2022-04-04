<template>
  <div id="container">
    <header-nav/>
    <user-main/>
    <div id="footer"></div>
  </div>
</template>

<script>
import HeaderNav from "@/components/content/HeaderNav";
import UserMain from "@/views/User/childComps/UserMain";
import FileList from "@/components/content/FileList"

export default {
  name: "UserView",
  components:{
    HeaderNav,
    UserMain,
    FileList
  }
}
</script>

<style scoped>

</style>