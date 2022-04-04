import axios from 'axios'
import store from '@/store'
export function requestNode(options) {
    return new Promise((resolve, reject) => {
        // 1.创建axios的实例对象
        const instance = axios.create({
            baseURL: '/api1',
            timeout: 50000
        })

        //2.拦截器
        instance.interceptors.request.use(res =>{
            store.commit('showLoading',true)
            return res
        })

        instance.interceptors.response.use(res => {
            store.commit('showLoading',false)
            return res.data
        })

        //3.通过实例发送网络请求
        instance(options)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })

    })
}
export function requestJava(options) {
    return new Promise((resolve, reject) => {
        // 1.创建axios的实例对象
        const instance = axios.create({
            baseURL: '/',
            timeout: 50001
        })

        //2.拦截器
        instance.interceptors.request.use(res =>{
            store.commit('showLoading',true)
            return res
        })

        instance.interceptors.response.use(res => {
            store.commit('showLoading',false)
            return res.data
        })

        //3.通过实例发送网络请求
        instance(options)
            .then(res => {
                resolve(res)
            }).catch(err => {
            reject(err)
        })

    })
}