<template>
  <div id="swipercom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in state.imgs" :key="i"><img :src="item.pic"></div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import {getBanner} from "@/api";
import {reactive,onMounted,onUpdated} from "vue";

export default {
  name: "swiperCom",
  setup(){
    let state = reactive({imgs:[]})
    onMounted(async()=>{
        let res = await getBanner(1)
        state.imgs = res.data.banners
    })
    onUpdated(()=>{
      var mySwiper = new Swiper('#swiperIndex', {
        loop: true, // 循环模式选项
        // 分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    })
    return{
      state
    }
  },
}
</script>

<style lang="less">
#swipercom {
  width: 7.5rem;
  #swiperIndex.swiper-container {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.2rem;

    .swiper-slide img {
      width: 100%;
    }

    .swiper-pagination-bullet-active {
      background-color: palevioletred;
    }
  }
}
</style>
