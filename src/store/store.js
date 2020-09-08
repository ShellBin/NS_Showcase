export let store = {
  debug: true,
  state: {
    userName: 'Someone cute',
    darkThemeColor: 'rgba(0,77,64,1)',
    lightThemeColor: 'rgba(0,77,64,0.65)',
    cardColor: 'rgb(0,137,123)',
    backgroundURL: '../static/bg.jpg',
    avatarURL: '../static/avatar.jpg',
    friendCode: 'SW-1234-5678-90AB',
    registrationDate: '几分钟前',
    gameList: []
  },
  setUserName (newValue) {
    if (this.debug) console.log('set with', newValue)
    this.state.userName = newValue
  }
}
