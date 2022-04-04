<template>
  <div class="file_list">
    <file-list-item v-for="item in this.$store.state.historyFile" key="item" :file-item="item" ></file-list-item>
  </div>
</template>

<script>
import FileListItem from "@/components/content/FileListItem";

export default {
  name: "FileList",
  components:{
    FileListItem
  }
}
</script>

<style scoped>
.file_list{
  display: grid;
  height: 30%;
  width: 60%;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}
</style>