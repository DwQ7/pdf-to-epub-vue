<template>
  <div id="main">
    <div id="main_content">
      <div class="main_left">
        <img src="@assets/images/pdfToEpub.png" alt="">
        <div class="zhuanhuan">
          <p>请选择你需要转化的文件</p>
          <button class="choose_file" @click="beginClick">开始</button>
        </div>
      </div>
      <div class="main_right">
        <img src="@assets/images/files.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMain",
  methods:{
    beginClick(){
      this.$router.push('/transition')
    }
  }
}
</script>

<style scoped>
#main{
  overflow: hidden;
  width: 100%;
}
#main_content{
  float: left;
  width: 95%;
  height: 100vh;
  margin-left: 70px;
  overflow: hidden;
}

a{
  display:block;
  background-color:white;
  color:black;
  /*width:20px; */
  /*text-align:center;*/
  /*padding:4px;*/
  text-decoration:none;
}


.main_left{
  margin-left: 50px;
}
.main_left img{
  /* float: left; */
  margin-top: 80px;
  width: 73%;
  margin-left: 30px;
}
.zhuanhuan{
  margin-top: 90px;
  margin-left: 0px;
  width:100%;
  height: 100px;
  box-sizing:border-box;
  border:2px solid #d0dbf5;
  padding:5px;
  border-radius:10px;
  padding: 20px;
  text-align: center;
  overflow: hidden;
}
.zhuanhuan p{
  width: 250px;
  float: left;
  color: rgb(141, 140, 140);
  font-size: 20px;
  position: relative;
  top:15px
}
.choose_file{
  float: right;
  position: relative;
  top:50%;
  transform: translateY(-50%);
  height: 70px;
  width: 40%;
  border: 1px solid #0056d7;
  background-color: #0056d7;
  color: rgb(255, 255, 255);
  border-radius: 7px;
  font-size: 22px;

}
input{
  float: right;
  position: relative;
  top:50%;
  transform: translateY(-50%);
  width:40%;
  height:70px;
  /* opacity:0; */
}
.main_right{
  margin-top: -20px;
  height: 100%;

}
.main_right img{
  width: 77%;
  margin-left: 110px;
  position: relative;
  left: -10px;
  position: relative;
  top:30%;
  transform: translateY(-30%);
}
</style>