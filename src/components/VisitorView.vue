<template>
  <div class="visitor-view">
    <div class="intro-card" :style="{background: sharedState.cardColor}">
      <div class="avatar" role="img" :style="{backgroundImage:'url(' + sharedState.avatarURL + ')'}"></div>
      <div class="text">
        <div class="intro">
          <span style="font-size: 1.5rem">{{sharedState.userName}}</span><br>
          <span style="margin-bottom: 1rem; display: inline-block; line-height: 2rem; font-size: 0.9rem">Friend Code: {{sharedState.friendCode}}</span><br>
          <span>总记录游戏数: {{sharedState.gameList.length}}</span><br>
          <span>目前持有: </span><br>
          <span>加入时间：{{sharedState.registrationDate}}</span>
        </div>
        <div role="button" style="border-top: 1px solid rgba(160,160,160,0.2); padding: 1rem 0 0.4rem"><span>访问主页</span></div>
      </div>
    </div>
    <stage></stage>
  </div>
</template>

<script>
import Stage from './Stage.vue'
import {store} from '../store/store'

export default {
  name: 'VisitorView',
  components: {Stage},
  computed: {
    // 目前持有游戏数量的计算
  },
  data () {
    return {
      sharedState: store.state
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar { width: 0}
.visitor-view {
  overflow: -moz-scrollbars-none;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
.intro-card {
  display: flex;
  width: 36rem;
  height: 16rem;
  margin-top: 5rem;
  color: white;
  box-shadow: 0 0.2rem 0.2rem 0 rgba(0,0,0,0.14), 0 0.1rem 0.5rem 0 rgba(0,0,0,0.12), 0 0.3rem 0.1rem -0.2rem rgba(0,0,0,0.2);
}
.avatar {
  min-width: 16rem;
  min-height: 16rem;
  background-size: cover;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.5rem 1rem 1rem;
  font-size: 0.95rem;
}
@media (max-width: 36rem) {
  .intro-card {
    width: 16rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
  }
}

</style>
