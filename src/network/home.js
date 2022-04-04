import {requestNode ,requestJava} from "@/network/request";

export function getHomeMultiData(){
    return requestNode({
        url:'/'
    })
}

export function getHomeGoodList(type,page){
    return requestNode(({
        url:'/',
        params:{
            type,
            page
        }
    }))
}