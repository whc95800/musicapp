<template>
  <div class="playController">
    <div class="left">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
      <div class="content">
        <div class="title">{{playlist[playCurrentIndex].al.name}}</div>
        <div class="tips">横滑可以切换上下首</div>
      </div>
    </div>
    <div class="right">
      <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang2" ></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use  xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gl-playlistMusic"></use>
      </svg>
    </div>
    <audio ref="audio" :src='`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`'></audio>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import {ref} from "vue";
export default {
  name: "playController",
  computed:{
    ...mapState(['playlist','playCurrentIndex'])
  },

  setup(){
    let paused = ref({})
    return{paused}
  },

  methods:{
    play () {
      if(this.$refs.audio.paused){
        this.$refs.audio.play()
        this.paused = false
      }else {
        this.$refs.audio.pause()
        this.paused = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.playController{
  background-color: white;
  width: 7.5rem;
  height: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .left{
    display: flex;
    padding: 0 0.2rem;
    img{
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
    }
    .content{
      padding: 0 0.2rem;
      .tips{
        font-size: 0.2rem;
        color: #999;
      }
    }
  }
  .right{
    .icon{
      margin: 0 0.2rem;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
}

</style>
