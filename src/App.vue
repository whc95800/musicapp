<template>
  <router-view/>
  <play-controller/>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
.icon{
  width: 0.30rem;
  height: 0.30rem;
}
a{
  color: #333;
  text-decoration: none;
}
</style>
<script>
import PlayController from "@/components/playController";
export default {
  components: {PlayController}
}
</script>
