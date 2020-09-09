export let store = {
  state: {
    // 个性化设置
    darkThemeColor: 'rgba(0,77,64,1)',
    lightThemeColor: 'rgba(0,77,64,0.65)',
    cardColor: 'rgb(0,137,123)',
    zoomInBackgroundURL: '../static/bg-zoom-in.jpg',
    // 用户信息设置
    userName: 'Someone cute',
    avatarURL: '../static/avatar.jpg',
    friendCode: 'SW-1234-5678-90AB',
    registrationDate: '几分钟前',
    userHomepage: 'https:shellbin.me',
    // 游戏信息 (json 对象)
    gameList: [],
    defaultGame: [{
      'name': '请添加游戏',
      'year': '游戏发售年份',
      'rating': '游戏分级',
      'duration': '游戏时长',
      'desc': '游戏描述，这里可以使用一段格式化的长文本来介绍游戏',
      'coverURL': '',
      'infoImgURL': '',
      'inTheLibrary': false
    }]
  }
}
