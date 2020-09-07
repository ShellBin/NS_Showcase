<template>
  <div id="app" :style="{backgroundImage:'url(' + backgroundURL + ')'}">
    <div class="header" :style="{background: darkThemeColor}">
      <div class="user"><span>{{user}}'s page</span></div>
      <div class="title"><span>Nintendo Switch</span></div>
      <div class="zoom" :class="{ zoomOut: isZoom }" role="button" v-if="viewerRole === 'visitor'" @click="zoomPage"></div>
    </div>
    <div v-if="viewerRole === 'visitor'">
      <div class="visitor-view-background" :style="{background: lightThemeColor}"></div>
      <div class="visitor-view" v-if="viewerRole === 'visitor'"><VisitorView></VisitorView></div>
    </div>
  </div>
</template>

<script>
import VisitorView from './components/VisitorView.vue'

export default {
  name: 'App',
  components: {VisitorView},
  data () {
    return {
      viewerRole: 'visitor',
      user: 'ShellBin',
      isZoom: false,
      backgroundURL: '../static/bg.jpg',
      darkThemeColor: 'rgba(0,77,64,1)',
      lightThemeColor: 'rgba(0,77,64,0.65)'
    }
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
  font-family: "Gill Sans", "Lucida Grande", Helvetica, sans-serif;
}
.user {
  margin-left: 2rem;
}
.title {
  font-size: 1.5rem;
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
}
</style>
