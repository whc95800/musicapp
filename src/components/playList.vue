<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="title">播放全部</div>
        <div class="num">(共{{playlist.tracks.length }}首)</div>
      </div>
      <div class="btn">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiahao"></use>
        </svg>
        收藏({{changeValue(playlist.subscribedCount)}})
      </div>
    </div>
    <div class="list">
      <div class="playItem" v-for="(item,i) in playlist.tracks" :key="i">
        <div class="left">
          <div class="index">{{i+1}}</div>
          <div class="content">
            <div class="title">{{item.name}}</div>
            <div class="anthor">
              <span class="tag" v-for="(tags,index) in playlist.tags" :key="index">{{tags}}</span>
              <span>{{item.al.name}}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-lanlvtubiaozhizuomoban-23"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "playList",
  props:['playlist'],
  setup() {
    function changeValue(num) {
      let res = 0
      if (num >= 100000000) {
        res = num / 100000000
        res = res.toFixed(2) + '亿'
      } else if (num > 10000) {
        res = num / 10000
        res = res.toFixed(2) + '万'
      }
      return res
    }

    return{changeValue}
  }
}
</script>

<style lang="less" scoped>
.playlist{
  width: 7.5rem;
  padding: 0 0.4rem;
  background-color: white;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  .playlist-top{
    height: 0.8rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      align-items: center;
      .icon{
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.2rem;
      }
      .title{
        font-size: 0.32rem;
        font-weight: 900;
      }
      .num{
        font-size: 0.3px;
        color: #cccccc;
      }
    }
    .btn{
      height: 0.5rem;
      padding: 0.2rem;
      font-size: 0.2rem;
      background-color: orangered;
      display: flex;
      align-items: center;
      color: #cccccc;
      border-radius: 0.6rem;
      .icon{
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.1rem;
      }
    }
  }
  .list{
    .playItem{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1rem;
      .left{
        display: flex;
        align-items:  center;
        color: #666;
        .index{
          margin-left: 0.1rem;
        }
        .content{
          margin-left: 0.4rem;
          width: 5.0rem;
        }
        .title{
          font-size: 0.3rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 0.05rem;
        }
        .anthor{
          font-size: 0.2rem;
          color: #666666;
        }
        .tag{
          font-size: 0.2rem;
          color: orangered;
          border: 0.5px solid orangered;
          border-radius: 0.1rem;
          margin-right: 0.1rem;
        }
      }
      .right{
        .icon{
          margin-left: 0.1rem;
        }
      }
    }
  }
}


</style>
