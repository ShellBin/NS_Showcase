<template>
  <div class="visitor-view">
      <div class="intro-card" :style="{background: sharedState.cardColor}">
        <div class="avatar" role="img" :style="{background:'url(' + sharedState.avatarURL + ') center center no-repeat'}"></div>
        <div class="text">
          <div class="intro">
            <span style="font-size: 1.5rem">{{sharedState.userName}}</span><br>
            <span style="margin-bottom: 1rem; display: inline-block; line-height: 2rem; font-size: 0.9rem">Friend Code: {{sharedState.friendCode}}</span><br>
            <span>总记录游戏数: {{Object.keys(this.sharedState.gameList).length}}</span><br>
            <span>目前持有: {{displayInTheLibrary}}</span><br>
            <span>加入时间：{{sharedState.registrationDate}}</span>
          </div>
          <div role="button" style="border-top: 1px solid rgba(160,160,160,0.2); padding: 1rem 0 0.4rem"><a :href="sharedState.userHomepage">访问主页</a></div>
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
  data () {
    return {
      sharedState: store.state,
      displayInTheLibrary: 0
    }
  },
  computed: {
  },
  mounted () {
    this.inTheLibraryCount()
  },
  methods: {
    inTheLibraryCount () {
      let gameCount = Object.keys(this.sharedState.gameList).length
      for (let i = 0; i < gameCount; i++) {
        if (this.sharedState.gameList[i].inTheLibrary) this.displayInTheLibrary++
      }
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar { width: 0}
.visitor-view {
  overflow: -moz-scrollbars-none;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
