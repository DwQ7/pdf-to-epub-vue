import { ElLoading } from 'element-plus';
import {setSession} from "@/common/session";
export default {
    updateLoginState(state,userName){
        state.isLogin = true
        state.userName = userName
    },
    updateFileRecord(state,recentFile){
      state.recentFile =  recentFile
      state.historyFile.push(recentFile)
    },
    showLoading(state,val){
        let loadingInstance = ElLoading.service(state.loadingOptions);
        if(!val){
            loadingInstance.close()
        }
    }
}