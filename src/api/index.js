import axios from "axios";

let baseUrl = 'http://192.168.8.244:3000';

//获取轮播图的api
//0: pc    1: android    2: iphone   3: ipad
export function getBanner(type=2){
  return axios.get(`${baseUrl}/banner?type=${type}`)
}

//获取推荐歌单 limit: 取出数量 默认为 10
export function getMusicList(limit=10){
  return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

//获取歌单的详情
export function getPlayListDetail(id){
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}
