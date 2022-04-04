<template>
  <div style="height: 700px;">
    <div id="main">
      <el-collapse-transition>
        <div id="main_content">
          <img src="@assets/images/touxiang.png" alt="" id="touxiang">
          <p id="username">admin</p>
          <div id="pass">
            <div><p>密码：</p></div>
            <el-input
                v-model="this.$store.state.passWord"
                type="password"
                placeholder="Your password"
                show-password
            />
            <div id="bianji">
              <el-button type="text" @click="dialog = true"
              >点击修改密码</el-button
              >
              <el-drawer
                  ref="drawerRef"
                  v-model="dialog"
                  title="修改密码"
                  :before-close="handleClose"
                  direction="ltr"
                  custom-class="demo-drawer"
              >
                <div class="demo-drawer__content">
                  <el-form :model="form">
                    <el-form-item label="新密码" :label-width="60">
                      <el-input v-model="form.password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="重复密码" :label-width="70">
                      <el-input v-model="form.re_password" autocomplete="off" />
                    </el-form-item>
                  </el-form>
                  <div class="demo-drawer__footer">
                    <el-button @click="cancelForm">Cancel</el-button>
                    <el-button type="primary" :loading="loading" @click="onClick">
                      {{loading ? 'Submitting ...' : 'Submit' }}</el-button>
                  </div>
                </div>
              </el-drawer>
            </div>
          </div>
          <button id="history-btn" @click="userClick">历史记录</button>
        </div>
      </el-collapse-transition>
      <file-list/>
    </div>
  </div>

  <div id="footer">
  </div>
</template>

<script>
import {ElDrawer, ElMessage, ElMessageBox} from "element-plus";
import FileList from "@/components/content/FileList"
export default {
  name: "UserMain",
  components:{
    FileList
  },
  data(){
    return{
      password:this.$store.state.passWord,
      table:false,
      dialog:false,
      loading:false,
      form: ({
        password:'',
        re_password:''
      }),
    }
  },
  methods:{
    userClick(){
      this.$router.push('/history')
    },
    handleClose(){
      this.loading= false
      this.dialog = false
      clearTimeout(this.timer)
    },
    cancelForm(){
      this.loading= false
      this.dialog = false
      clearTimeout(this.timer)
    },
    onClick() {
      ElMessageBox.confirm(
          '确认修改密码？',
          'Tip',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
          }
      )
          .then(() => {
            this.loading = true
            setTimeout(() =>{
              sessionStorage.setItem('passWord',this.form.password)
              this.$store.state.passWord = this.form.password
              this.loading = false
              ElMessage({
                showClose: true,
                message: '修改成功',
                type: 'success',
              })
            },500)
          })
          .catch(() => {

          })
    }
    },

}
</script>

<style scoped>
#main{
  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
}
#main_content{
  height: 50%;
  width: 30%;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
}
#main_content img{
  width: 200px;
  margin-bottom: 20px;
}
#username{
  font-size: 40px;
  margin-bottom:10px;
}
#pass{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#pass input{
  font-size: 25px;
  padding-left: 5px;
  border: 0px;
  width: 150px;
}
#pass img{
  width: 25px;
  position: relative;
  top: 10px;
  padding-top: 10px;
}
#pass p{
  width: 50px;
  font-size: 15px;
}
#history-btn{
  margin-top: 30px;
  padding: 6px 24px 6px 24px;
  color: white;
  font-size: 16px;
  font-weight: bolder;
  background-color: #0056d7;
  border-radius: 5px;
  border: 0px;
}

#bianji-passw input{
  font-size: 25px;
  padding-left: 5px;
  border: 1px solid rgb(96, 96, 96);
  border-radius: 5px;
  width: 150px;
}
</style>