<template>
  <div class="admin-view">
    <div class="admin-login"><AdminLogin></AdminLogin></div>
    <div class="main-container">
      <div class="intro-card-setting" :style="{background: sharedState.cardColor}">
        <div class="avatar" role="img" :style="{background:'url(' + sharedState.avatarURL + ') center center no-repeat'}"></div>
        <div class="text">
          <div class="intro">
            <span style="font-size: 1.5rem"><input v-model="sharedState.userName" placeholder="Your nickname"></span><br>
            <span style="margin-bottom: 1rem; display: inline-block; line-height: 2rem; font-size: 0.9rem">Friend Code: <input v-model="sharedState.friendCode" placeholder="edit me"></span><br>
            <span>加入时间：<input v-model="sharedState.registrationDate" placeholder="edit me"></span>
            <div>
              <div class="save-button" role="button"><span>保存！</span></div>
              <div class="save-button" role="button"><span>取消修改</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminLogin from '../components/AdminLogin.vue'
import {store} from '../store/store'

export default {
  name: 'AdminView',
  components: {AdminLogin},
  data () {
    return {
      sharedState: store.state
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar { width: 0}
.admin-view {
  overflow: -moz-scrollbars-none;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-card-setting {
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
.save-button {
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
