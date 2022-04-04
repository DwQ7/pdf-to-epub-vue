<template>
  <div id="main">
    <div id="main_content">
      <div class="main_left">
        <div class="xiazai">
          <div class="download">
            <p id="download_name">文件名：{{this.$store.state.recentFile.fileName}}</p>
            <a id="download_path" @click="downloadClick">文件下载链接：点击下载</a>
            <p>扫描二维码进行下载：</p>
          </div>
          <div class="down_but">
            <button  @click="downloadClick">下载文件</button>
            <button  @click="">二维码下载</button>
            <button >压缩文件</button>
            <button id="delete">删除文件</button>
          </div>
        </div>
      </div>
      <div class="main_right">
        <img src="@assets/images/download.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {downloadFile} from "@/network/download";

export default {
  name: "DownloadMain",
  methods:{
    downloadClick(){
      window.location.href = '/api1/download/downloadFile?filePath='+encodeURIComponent(this.$store.state.recentFile.filePath)
    }
  }
}
</script>

<style scoped>
.xiazai{
  margin-top: 55px;
  width: 95%;
  border: 5px solid rgba(208, 219, 245);
  height: 100px;
  height: 400px;
  border-radius: 10px;

}
.download{
  height: 70%;
  margin-top: 40px;
  margin-left: 50px;
}
.download p{
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 1rem;
}
.download a{
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 1rem;
}
.down_but{
  display: flex;
  justify-content: space-around;
}
.down_but button{
  padding: 6px 24px 6px 24px;
  color: white;
  font-size: 16px;
  font-weight: bolder;
  background-color: #0056d7;
  border-radius: 5px;
  border: 0px;
}
.main_right img{
  margin-top: 65px;
  margin-left: 140px;
  width: 47%;
}
</style>