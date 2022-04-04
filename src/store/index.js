import { createStore } from 'vuex'
import Vue from "@vue/cli-plugin-eslint/eslintOptions";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import modulesA from "@/store/modules/modulesA";
import createPersistedState from "vuex-persistedstate"
import {getSession} from "@/common/session";


const state =  {
    isLogin:false,
    // userName:getSession('userName'),
    userName:'',
    // passWord:getSession('passWord'),
    passWord:'',
    recentFile:{
        fileName: '未选择', filePath: '', successDate: ''
    },
    historyFile: [
        {fileName: '未选择111111111111111111111111111111111111', filePath: '123', successDate: '22-1004'},
        {fileName: '未选择222222222222222222222222222222222222', filePath: '123', successDate: '22-1005'},
        {fileName: '未选择333333333333333333333333333333333333', filePath: '123', successDate: '22-1006'}
    ],
    loadingOptions:{
        lock: true,
        text: 'Loading...',//加载动画的文字
        spinner: 'el-icon-loading',//加载动画的图标
        // background: 'rgba(0, 0, 0, 0)',//加载动画的背景
    }
}
const store = createStore({
    plugins: [createPersistedState()],
    state,
    mutations,
    actions,
    getters,
    modules:{
        A:modulesA
    }
})

export default store