<template>
  <div id="main">
    <div id="main_content">
      <div class="main_left">
        <div class="left_top">
          <p>请选择需要转换的文件</p>
<!--          <form id="uploadForm" enctype="multipart/form-data" >-->
<!--            <input id="pdfFile" type="file" name="pdfFile" class="choose_file" multiple="multiple" style="color: transparent;"/>-->
<!--          </form>-->
        </div>
        <div class="left_main">
          <el-upload
              ref="upload"
              class="upload-demo"
              name="pdfFile"
              accept=".pdf"
              drag
              :action="fileActionUrl"
              multiple
              :data="dataUser"
              :auto-upload="false"
              :on-success="uploadSuccess"
              :on-progress="uploadProgress"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">

              </div>
            </template>
          </el-upload>
        </div>
        <div class="left_buttom">
          <div class="check-box">
            <input type="checkbox" id="check_box"  name="hebing" value="hebing">是否合并
          </div>
          <button id="upload" @click="uploadClick">
            开始上传
          </button>
        </div>
      </div>
      <div class="main_right" id="up_effect">
        <img src="@assets/images/up.png" >
      </div>
      <div class="main_right" id="trans_effect">
        <img src="@assets/images/trans.png" >
      </div>
    </div>

  </div>
</template>

<script>

import {getFormatDate} from "@/common/date";
import {getFileName} from "@/common/utils";
import {ElMessage, ElMessageBox} from "element-plus";

export default {
  name: "TransitionMain",
  data(){
    return{
      isUpload:false,
      fileActionUrl:'/api2/first/PdfToEpub/upload/one',
      dataUser:{
        "username":this.$store.state.userName
      }
    }
  },
  methods:{
    uploadClick(){
      console.log(this.$refs.upload);
      this.$refs.upload.submit()
    },
    uploadProgress(){
      ElMessage('文件转换中...')
    },
    uploadSuccess(res){
      let fileRecord = {
        fileName: getFileName(res), filePath: res, successDate: getFormatDate()
      }
      this.$store.commit('updateFileRecord',fileRecord)
      ElMessage({
        type:"success",
        message: 'Success',
      })
      ElMessageBox.alert('转换成功!', '', {
        confirmButtonText: '点击下载',
        callback: () => {
          this.$router.push('/download')
        },
      })
    }
  }
}
</script>

<style scoped>
.upload-demo{
  height: 100%;
}
.logo img{
  height: 55px;
  float: left;
  margin-left: 100px;
}
.h_title img{
  height: 40px;
  float: left;
  margin-top: 9px;
  margin-left: 20px;
}
.user img{
  width: 35px;
  margin-top: 14px;
}
#main{
  overflow: hidden;
  width: 100%;
}
#main_content{
  float: left;
  width: 85%;
  height: 100vh;
  margin-left: 50px;
  overflow: hidden;
}
#nav ul{
  list-style-type:none;
  margin-top:25px;
  padding:0;
}
#nav ul li{
  margin-bottom: 25px;
  width: 20px;
}
a{
  display:block;
  background-color:white;
  color:black;
  width:20px;
  text-align:center;
  padding:4px;
  text-decoration:none;
}
.main_left{
  width: 50%;
  float: left;
  margin-top: 40px;
  padding:5px;
  border: 3px solid rgba(208, 219, 245);
  height: 500px;
  border-radius: 10px;
  position: relative;
  z-index:1;
}
.left_top{
  height: 15%;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 5px;
  border-bottom:3px solid rgba(208, 219, 245) ;
}
.left_top p{
  float: left;
  color: rgba(184, 214, 228);
  font-size:20px ;
  font-weight: bolder;
  position: relative;
  top:50%;
  transform: translateY(-50%);
}

.left_top input{
  float: right;
  width: 30%;
  padding: 15px 15px 15px 15px;
  margin-top: 5px;
  background-color: #0056d7;
  border: 0px;
  border-radius: 10px;
  text-align: center;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bolder;
}
.left_main{
  clear: both;
  height: 65%;
  white-space: pre-line;
}
.left_buttom{
  height: 12%;
  border-top:3px solid rgba(208, 219, 245) ;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}
.check-box{
  margin-left: 15px;
}
#check_box{
  width: 30px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
}
.left_buttom button{
  padding: 12px 25px 12px 25px;
  background-color: #0056d7;
  border: 0px;
  border-radius: 10px;
  /* margin-top: 15px; */
  color: white;
  font-size: 20px;
  font-weight: bolder;
}
.main_right{
  width: 40%;
  float: right;
  margin-top: -20px;
  height: 100%;
  position: relative;
  z-index:1;
}
.main_right img{
  width: 85%;
  left: -10px;
  position: relative;
  top:30%;
  transform: translateY(-30%);
}
.changing{
  height: 300px;
  width: 500px;
  border: 5px solid #abc1f5;
  border-radius: 10px;
  position: relative;
  z-index:2;
  /* background-color: #FFFFFF; */
}
/* .p_e_img{ */
/* display: flex; */
/* justify-content: space-around; */
/* position: relative;
z-index:4; */
/* } */
</style>