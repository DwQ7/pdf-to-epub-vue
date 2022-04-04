<template>
  <div id="container">
    <header-nav/>
    <history-main/>
    <div id="footer"></div>
  </div>
</template>

<script>
import HeaderNav from "@/components/content/HeaderNav";
import HistoryMain from "@/views/History/childComps/HistoryMain";

export default {
  name: "HistoryView",
  components:{
    HeaderNav,
    HistoryMain
  }
}
</script>

<style scoped>

</style>