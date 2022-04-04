import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'
import HistoryView from "@/views/History/HistoryView";
const UserView = () => import("@/views/User/UserView")
const DownloadView = () => import("@/views/Download/DownloadView")
const TransitionView = () => import("@/views/Transition/TransitionView")
const RegisterView = () => import("@/views/Register/RegisterView")
const LoginView = () => import("@/views/Login/LoginView")
const HomeView = () =>import("@/views/Home/HomeView")

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    tittle:'首页',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    tittle:'登录',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    tittle:'注册',
    component: RegisterView
  },
  {
    path: '/transition',
    name: 'Transition',
    tittle:'转换',
    component: TransitionView
  },
  {
    path: '/download',
    name: 'Download',
    tittle:'下载',
    component: DownloadView
  },
  {
    path: '/user',
    name:'User',
    tittle:'用户',
    component:UserView
  },
  {
    path: '/history',
    name:'History',
    tittle:'历史记录',
    component:HistoryView
  }

  // {
  //   path: '/home',
  //   name: 'home',
  //   component: childComps,
  //   tittle:'首页',
  //   children:[
  //     {
  //       path: '/',
  //       component: childComps,
  //     },
  //     {
  //       path:'news',
  //       name:'HomeNews',
  //       component:HomeNews
  //     }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //history模式
  //history: createWebHashHistory(process.env.BASE_URL), //hash模式
  routes
})

router.beforeEach((to,from,next) =>{
  document.title = to.name
  to.meta.keepAlive = true
  store.commit("showLoading",true)
  next();
})

router.afterEach((to,from,next) =>{
  store.commit("showLoading",false)
})
export default router
