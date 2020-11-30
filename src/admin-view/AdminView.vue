<template>
  <div class="admin-view">
    <div class="admin-login"><AdminLogin></AdminLogin></div>
    <div class="main-container">
      <h2>个人信息编辑：</h2>
      <div class="homepage-editor">首页：<input v-model="sharedState.userHomepage" placeholder="edit me" style="line-height: 1.2rem; font-size: 0.9rem; width: 100%; margin-top: 6px"></div>
      <div class="intro-card-setting" :style="{background: sharedState.cardColor}">
        <div class="edit-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"></path></svg></div>
        <div class="avatar" role="button" :style="{background:'url(' + sharedState.avatarURL + ') center center no-repeat'}"></div>
        <div class="text">
          <div class="intro">
            <div style="margin-bottom: 1rem; display: flex"><input v-model="sharedState.userName" placeholder="Your nickname" style="font-size: 1.5rem" width="10rem"></div>
            <div>Friend Code: <input v-model="sharedState.friendCode" placeholder="edit me" style="margin-bottom: 1rem; line-height: 1.2rem; font-size: 0.9rem"></div>
            <div>加入时间：<input v-model="sharedState.registrationDate" placeholder="edit me" style="line-height: 1.2rem; font-size: 0.9rem"></div>
            <div style="display: flex">
              <div class="card-save-button" role="button" @click="updateData"><span>保存</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="game-list-management">
        <h2>游戏管理：</h2>
        <div class="game-list-editor">
          <div class="game-list-cell" v-for="(game,index) in sharedState.gameList" :key="index">
            <div class="game-list-title" :class="game.name"><span>{{game.name}}</span><span @click="game.collapsed = !game.collapsed">{{game.collapsed ? '展开' : '收起'}}</span></div>
            <div class="game-list-info" :style="{height: game.collapsed ? '0' : ''}">
              <input v-model="game.name" placeholder="游戏名称">
              <input v-model="game.year" placeholder="游戏发售年份">
              <input v-model="game.rating" placeholder="游戏分级">
              <input v-model="game.duration" placeholder="游戏时长">
              <input v-model="game.desc" placeholder="使用一段文字来介绍一下这个游戏吧">
              <span style="text-align:center">游戏还在手吗？</span>
              <input type="checkbox" v-model="game.inTheLibrary">
              <input v-model="game.coverURL" placeholder="封面url">
              <input v-model="game.infoImgURL" placeholder="内页url">
              <div class="delete-item" role="button" @click="sharedState.gameList.splice(index,1)">删除</div>
            </div>
          </div>
          <div @click="addNewGame">添加</div>
        </div>
      </div>
    </div>
    <h2>展示中的游戏</h2>
    <stage></stage>
  </div>
</template>

<script>
import AdminLogin from '../components/AdminLogin.vue'
import Stage from '../components/Stage.vue'
import {store} from '../store/store'

export default {
  name: 'AdminView',
  components: {AdminLogin, Stage},
  data () {
    return {
      sharedState: store.state
    }
  },
  methods: {
    updateData () {
      console.log('提交 store 中数据')
    },
    addNewGame () {
      this.sharedState.gameList.push({
        collapsed: false,
        'name': '新游戏',
        'year': '游戏发售年份',
        'rating': '游戏分级',
        'duration': '游戏时长',
        'desc': '',
        'coverURL': '',
        'infoImgURL': '',
        'inTheLibrary': false,
        'isDigital': false
      })
    }
  }
}
</script>

<style scoped>
input{
  display:block;
  background:none;
  outline:none;
  color: white;
  width: 80%;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 0.6rem;
  transition-duration: 0.5s
}
input:hover {
  border: 2px solid rgba(255,255,255,0.8);
}
h2 {
  color: white;
  margin: 5rem 0 0 0;
}
input::placeholder {
  color: #BBBBBB;
}
::-webkit-scrollbar { width: 0}
.admin-view {
  overflow: -moz-scrollbars-none;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-container {
  display: flex;
  flex-direction: column;
}
.intro-card-setting {
  display: flex;
  width: 36rem;
  height: 16rem;
  margin-top: 2rem;
  color: white;
  box-shadow: 0 0.2rem 0.2rem 0 rgba(0,0,0,0.14), 0 0.1rem 0.5rem 0 rgba(0,0,0,0.12), 0 0.3rem 0.1rem -0.2rem rgba(0,0,0,0.2);
  position: relative;
}
.homepage-editor {
  width: 36rem;
  margin-top: 2rem;
  color: white;
  font-size: 1.3rem;
}
.game-list-editor {
  margin: 1rem;
}
.game-list-cell {
  color: white;
  background-color: rgba(255,255,255,0.3);
  padding: 0.5rem;
  margin-bottom: 0.2rem;
  border-radius: 0.5rem;
}
.game-list-title {
  display: flex;
  justify-content: space-between;
  transition-duration: 0.2s
}
div.game-list-info {
  height: 20.5rem;
  overflow: hidden;
  transition: height ease 0.2s;
}
div.game-list-info input {
  margin: 12px 1rem;
  width: 91%;
}
.avatar {
  min-width: 16rem;
  min-height: 16rem;
  background-size: cover;
  transition-duration: 0.2s
}
.avatar:hover {
  box-shadow: 0 0 0.5rem 0.5rem rgba(255,255,255,0.8);
  border-radius: 10px;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.5rem 1rem 1rem;
  font-size: 0.95rem;

}
.edit-icon {
  fill: #fff;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 10rem;
  background: #0085ba;
  border: 2px solid rgba(255,255,255,0.5);
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}
.card-save-button {
  background-color: rgba(255,255,255,0.3);
  text-align: center;
  width: 5rem;
  height: 2rem;
  font-size: 1.1rem;
  line-height: 2rem;
  border: 0.2rem solid rgba(255,255,255,0.5);
  transition-duration: 0.5s;
  border-radius: 0.5rem;
  margin: 1.5rem auto;
}
.card-save-button:hover {
  border: 0.2rem solid rgba(255,255,255,0.9);
}
@media (max-width: 36rem) {
  .intro-card-setting {
    width: 16rem;
    height: 32rem;
    display: flex;
    flex-direction: column;
  }
  .homepage-editor {
    width: 16rem;
  }
  div.game-list-info input {
    width: 82%;
  }
}
</style>
