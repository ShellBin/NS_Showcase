export let store = {
  state: {
    // 颜色设置
    darkThemeColor: 'rgba(0,77,64,1)',
    lightThemeColor: 'rgba(0,77,64,0.65)',
    cardColor: 'rgb(0,137,123)',
    // 用户信息设置
    userName: 'Someone cute',
    backgroundURL: '../static/bg.jpg',
    avatarURL: '../static/avatar.jpg',
    friendCode: 'SW-1234-5678-90AB',
    registrationDate: '几分钟前',
    // 游戏信息 (json 对象)
    gameList: []
  },
  setUserName (newValue) {
    this.state.userName = newValue
  },
  setBackgroundURL (newValue) {
    this.state.backgroundURL = newValue
  },
  setAvatarURL (newValue) {
    this.state.avatarURL = newValue
  },
  setFriendCode (newValue) {
    this.state.friendCode = newValue
  },
  setRegistrationDate (newValue) {
    this.state.registrationDate = newValue
  },
  setGameList (newValue) {
    this.state.gameList = newValue
  }
}
