<template>
  <div id="app" :style="{backgroundImage:'url(' + sharedState.backgroundURL + ')'}">
    <div class="header" :style="{background: sharedState.darkThemeColor}">
      <div style="width: 33.3%; display: flex; justify-content: flex-start">
        <div class="user"><span>{{sharedState.userName}}'s page</span></div>
      </div>
      <div class="title" v-if="viewerRole === 'visitor'"><span>Nintendo Switch</span></div>
      <div style="width: 33.3%; display: flex; justify-content: flex-end">
        <div class="zoom" :class="{ zoomOut: isZoom }" role="button" v-if="viewerRole === 'visitor'" @click="zoomPage"></div>
      </div>
    </div>
    <div v-if="viewerRole === 'visitor'">
      <div class="visitor-view-background" :style="{background: sharedState.lightThemeColor}"></div>
      <div class="visitor-view" v-if="viewerRole === 'visitor'"><VisitorView></VisitorView></div>
    </div>
  </div>
</template>

<script>
import {store} from './store/store.js'
import VisitorView from './components/VisitorView.vue'

export default {
  name: 'App',
  components: {VisitorView},
  data () {
    return {
      sharedState: store.state,
      viewerRole: 'visitor',
      isZoom: false
    }
  },
  mounted () {
  },
  methods: {
    zoomPage () {
      this.isZoom = !this.isZoom
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -10;
  font-family: "Gill Sans", "Lucida Grande", Helvetica, sans-serif;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100%;
  height: 3rem;
  box-shadow: rgba(0,0,0,0.4) 0 0 1rem;
  position: absolute;
  z-index: 1010;
  text-align: center;
}
.user {
  margin-left: 2rem;
  width: 33.3%;
}
.title {
  font-size: 1.5rem;width: 33.3%;
}
.zoom {
  margin-right: 2rem;
  width: 2.3rem;
  height: 2.3rem;
  background-image: url("./assets/in.svg");
  background-size: cover;
}
.zoomOut {
  background-image: url("./assets/open.svg");
}
.visitor-view-background, .visitor-view {
  height: 100%;
  margin: auto;
  left: 0;
  right: 0;
  position: absolute;
}
.visitor-view-background {
  backdrop-filter: blur(5px);
  width: 65rem;
}
@media (max-width: 65rem) {
  .visitor-view-background {
    width: 100%;
  }
  .header {
    height: 3.5rem;
  }
}
</style>
