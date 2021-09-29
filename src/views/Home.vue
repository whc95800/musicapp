<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from "@/components/topNav"
import SwiperCom from "@/components/swiperCom";
import IconList from "@/components/iconList";
import MusicList from "@/components/musicList";


export default {
  name: 'Home',
  components: {
    MusicList,
    IconList,
    SwiperCom,
    topNav
  },


}
</script>

<style lang="less" scoped>
#d1{
  width: 3.75rem;
  height: 3.75rem;
  background-color: skyblue;
}

</style>
