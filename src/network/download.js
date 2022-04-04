import {requestNode} from "@/network/request"

export function downloadFile(filePath){
    return requestNode({
        url:'/download',
        method:'GET',
        params:{
            filePath
        }
    })
}