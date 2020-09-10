<template>
  <div id="app">
    <div class="header" :style="{background: sharedState.darkThemeColor}">
      <div style="width: 33.3%; display: flex; justify-content: flex-start">
        <div class="user" role="button"><a :href="sharedState.userHomepage">{{sharedState.userName}}'s page</a></div>
      </div>
      <div class="title" v-if="!isAdmin"><span>Nintendo Switch</span></div>
      <div style="width: 33.3%; display: flex; justify-content: flex-end">
        <div class="zoom"><span style="display:none;">弃用特性，commit: 28d4902</span></div>
      </div>
    </div>
    <div>
      <div class="visitor-view-background" :style="{background: sharedState.lightThemeColor}"></div>
      <div class="visitor-view" v-if="!isAdmin"><VisitorView></VisitorView></div>
      <div class="admin-view" v-if="isAdmin"><AdminView></AdminView></div>
    </div>
  </div>
</template>

<script>
import {store} from './store/store.js'
import VisitorView from './visitor-view/VisitorView.vue'
import AdminView from './admin-view/AdminView.vue'

export default {
  name: 'App',
  components: {AdminView, VisitorView},
  data () {
    return {
      sharedState: store.state,
      isAdmin: false
    }
  },
  created () {
    this.isAdmin = this.$route.name === 'admin'
  },
  methods: {
  }
}
</script>

<style>
a {
  text-decoration:none;
  color:inherit;
}
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
  background: url("./assets/bg-zoom-in.jpg") center center no-repeat;
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
.visitor-view-background, .visitor-view, .admin-view{
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
