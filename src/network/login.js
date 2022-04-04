import {requestNode} from "@/network/request"

export function login(loginInfo){
    return requestNode({
        url:'/login',
        method:'POST',
        data:{
            username:loginInfo.email,
            password:loginInfo.password
        }
    })
}