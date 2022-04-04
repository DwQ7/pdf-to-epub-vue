<template>
  <div class="file_list_item">
    <img src="@/assets/images/trans.png"><br>
    <span>{{fileItem.fileName}}</span><br>
    <span>{{fileItem.successDate}}</span><br>
    <button>下载</button>
  </div>
</template>

<script>
export default {
  name: "FileListItem",
  props:{
    fileItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
img{
  width: 280px;
  height: 300px;
}
.file_list_item{
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow:ellipsis;
  padding: 1.5rem;
  margin-top: 2rem;
}
</style>