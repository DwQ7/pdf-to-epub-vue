export function getFileName(routerName){
    let index = routerName.lastIndexOf('\\')
    return routerName.substr(index + 1);
}