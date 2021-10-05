<template>
  <div class="listView">
    <listview-top :playlist="state.playlist"></listview-top>
    <play-list :playlist="state.playlist"></play-list>
  </div>
</template>

<script>
import listviewTop from "@/components/listviewTop";
import {useRoute} from 'vue-router'
import {reactive,onMounted} from "vue";
import {getPlayListDetail} from "@/api";
import PlayList from "@/components/playList";
import store from "@/store";

export default {
  name: "ListView",
  setup(){
    const  route = useRoute()
    let state = reactive({
      list:[],
      playlist:{
        creator:[],
        tracks:[]
      }
    })
    onMounted(async ()=>{
      let id = route.query.id
      let result = await getPlayListDetail(id)
      state.playlist = result.data.playlist
      store.commit('setPlayList',state.playlist.tracks)
      // console.log(state.playlist.tracks)
    })

    return{state}
  },
  components:{
    PlayList,
    listviewTop
  }


}
</script>

<style scoped>

</style>
