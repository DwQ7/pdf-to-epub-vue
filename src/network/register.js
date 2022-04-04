import {requestNode} from "@/network/request"

export function register(registerInfo){
    return requestNode({
        url:'/register',
        method:'POST',
        data:{
            username:registerInfo.email,
            password:registerInfo.password
        }
    })
}