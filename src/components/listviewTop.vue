<template>
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl">
    <div class="listViewTopNav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-31sousuo"></use>
        </svg><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl">
          <div class="count">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang2"></use>
            </svg>
            <span>{{changeValue(playlist.playCount)}}</span>
          </div>
      </div>
      <div class="contentRight">
        <h3>{{playlist.name}}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl" class="header">
          <span>{{playlist.creator.nickname}}</span>
        </div>
      <div class="description">{{playlist.description}}
      </div>
      </div>
    </div>
      <div class="iconList">
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun2"></use>
          </svg>
          <span>{{playlist.commentCount}}</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
          <span>{{playlist.shareCount}}</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
          </svg>
          <span>下载</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-show_duoxuan"></use>
          </svg>
          <span>多选</span>
        </div>
      </div>
  </div>
</template>

<script>

import {onMounted, reactive} from "vue";
import {getPlayListDetail} from "@/api";

export default {
  name: "listviewTop",
  props:['playlist'],
  setup(){

    // let state = reactive({
    //   playlist:{}
    // })

    function changeValue(num){
      let res = 0
      if(num>=100000000){
        res = num/100000000
        res = res.toFixed(2) + '亿'
      }else if(num>10000){
        res = num/10000
        res = res.toFixed(2) + '万'
      }
      return res
    }

  // onMounted(async ()=>{
  //   let result = await getPlayListDetail(id)
  //   state.playlist = result.data.playlist
  // })

    return{
      changeValue
    }
  }
}
</script>

<style lang="less" scoped>
.listViewTop{
  width: 7.5rem;
  height: 6rem;
  padding: 0 0.4rem;
  .bg{
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(50px);
  }
  .listViewTopNav{
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.35rem;
    .icon{
      width: 0.5rem;
      height: 0.5rem;
      fill:white;
    }
    .title{
      margin-left:0.4rem;
    }
    .search{
      margin-right: 0.4rem;
    }
  }
  .back,.right{
    display: flex;
    color: white;
  }
  .content{
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0;
    h3{
      color: white;
    }
    .contentLeft{
      position: relative;
      img{
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 0.1rem;
      }
      .count{
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        color: #ccc;
        display: flex;
        align-items: center;
        font-weight: 900;
        .icon{
          fill: #ccc;
        }
      }
    }
    .contentRight{
      h3{
        font-size: 0.34rem;
      }
      width: 3.8rem;
      height: 2.5rem;
      .author{
        display: flex;
        align-items: center;
        margin: 0.1rem 0;
        img.header{
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 0.3rem;
          margin-right: 0.15rem;
        }
        span{
          color: #cccccc;
          font-size: 0.26rem;
        }
      }
      .description{
        font-size: 0.22rem;
        color: #aaaa;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .iconList{
    display: flex;
    justify-content: space-around;
    .iconItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 0.5rem;
        height: 0.5rem;
        fill: #cccccc;
      }
      span{
        font-size: 0.24rem;
        color: #cccccc;
        padding-top: 0.1rem;
      }
    }
  }
}

</style>
