<template>
  <div id="container">
    <header-nav/>
    <transition-main/>
    <div id="footer"></div>
  </div>
</template>

<script>
import HeaderNav from "@/components/content/HeaderNav";
import TransitionMain from "@/views/Transition/childComps/TransitionMain";

export default {
  name: "TransitionView",
  components:{
    HeaderNav,
    TransitionMain
  }
}
</script>

<style scoped>


</style>