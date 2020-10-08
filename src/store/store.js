export let store = {
  state: {
    // 个性化设置
    darkThemeColor: 'rgba(0,77,64,1)',
    lightThemeColor: 'rgba(0,77,64,0.65)',
    cardColor: 'rgb(0,137,123)',
    // 用户信息设置
    userName: 'Someone cute',
    avatarURL: '../static/avatar.jpg',
    friendCode: 'SW-1234-5678-90AB',
    registrationDate: '几分钟前',
    userHomepage: 'https://shellbin.me',
    // 游戏信息 (json 对象)
    // 手动添加即可完成游戏添加
    gameList: [{
      'name': '请添加游戏1',
      'year': '游戏发售年份',
      'rating': '游戏分级',
      'duration': '游戏时长',
      'desc': '游戏描述，这里可以使用一段格式化的长文本来介绍游戏',
      'coverURL': 'http://tonoko-moe-static.smartgslb.com/switch/img/poster01.jpg',
      'infoImgURL': 'http://tonoko-moe-static.smartgslb.com/switch/img/still01.jpg',
      'inTheLibrary': false,
      'isDigital': false
    },
    {
      'name': '请添加游戏1',
      'year': '游戏发售年份',
      'rating': '游戏分级',
      'duration': '游戏时长',
      'desc': '游戏描述，这里可以使用一段格式化的长文本来介绍游戏',
      'coverURL': 'http://tonoko-moe-static.smartgslb.com/switch/img/poster01.jpg',
      'infoImgURL': 'http://tonoko-moe-static.smartgslb.com/switch/img/still01.jpg',
      'inTheLibrary': false,
      'isDigital': false
    }],
    defaultGame: [{
      'name': '请添加游戏',
      'year': '游戏发售年份',
      'rating': '游戏分级',
      'duration': '游戏时长',
      'desc': '游戏描述，这里可以使用一段格式化的长文本来介绍游戏',
      'coverURL': 'http://tonoko-moe-static.smartgslb.com/switch/img/poster08.jpg',
      'infoImgURL': 'http://tonoko-moe-static.smartgslb.com/switch/img/still08.jpg',
      'inTheLibrary': false,
      'isDigital': false
    }]
  }
}
