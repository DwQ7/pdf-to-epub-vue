<template>
  <div id="container">
    <header-nav/>
    <download-main/>
    <div id="footer">
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/content/HeaderNav";
import DownloadMain from "@/views/Download/childComps/DownloadMain";

export default {
  name: "DownloadView",
  components:{
    HeaderNav,
    DownloadMain
  }
}
</script>

<style scoped>


</style>