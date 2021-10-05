<template>
  <div class="playMusic">
    <div class="bg" :style="{backgroundImage:`url(${playDetail.al.picUrl})`}"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-left" ></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <marquee behavor="scroll" direction="left">{{playDetail.name}}</marquee>
        </div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang" ></use>
        </svg>
      </div>
      <div class="playContent">
        <img class="needle" src="@/assets/img/2.png" alt="">
        <img class="disc" src="@/assets/img/1.png" alt="">
        <img class="playImg" :src="playDetail.al.picUrl" alt="">
      </div>
    </div>
    <div class="playContent"></div>
    <div class="playLyric"></div>
    <div class="progress"></div>
    <div class="playFooter"></div>
  </div>
</template>

<script>
export default {
  name: "playMusic",
  props:['playDetail']
}
</script>

<style lang="less" scoped>
.playMusic{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  .bg{
    background-position:center ;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size:auto 100%;
    filter: blur(60px);
  }
  .playTop{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.5rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    padding: 0 0.4rem;
    .icon{
      fill: white;
      width: 0.4rem;
      height: 0.4rem;
    }
    marquee{
      width: 5rem;
      flex: 1;
    }
  }
  .playContent{
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 1.5rem;
    .needle{
      width: 2rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: 0.3rem 0;
      transform: rotate(-15deg);
      transition: all 1s;
      z-index: 10;
    }
    .needle.active{
      width: 2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: 0.3rem 0;
      transform: rotate(12deg);
      transition: all 1s;
      z-index: 10;
    }
    .disc{
      width: 5.5rem;
      height: auto;
      position: absolute;
      left: calc(50% - 2.75rem);
      top: 2.2rem;
    }
    .playImg{
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 2rem;
      position: absolute;
      left: calc(50% - 1.75rem);
      top: 3.2rem;
    }
  }
}


</style>
