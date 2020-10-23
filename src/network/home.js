import {request} from './request'
export function getSYMultidata(){
    return request({
        url:'/api/homeData.json'
    })
}



export function getSYgoods(){
    return request({
        url:'/api/groupData.json',
    })
}