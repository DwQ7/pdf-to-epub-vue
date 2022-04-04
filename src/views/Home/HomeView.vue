<template>
  <div id="container">
    <header-nav/>
    <home-main/>
    <div id="footer">
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/content/HeaderNav";
import HomeMain from "@/views/Home/childComps/HomeMain";

export default {
  name: "HomeView",
  components:{
    HeaderNav,
    HomeMain
  }
}
</script>

<style scoped>


</style>