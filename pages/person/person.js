const app = getApp();

Page({
  data: {
    userInfo: app.globalData.userInfo,
    menus: [
      {
        desc: '聚划算',
        img: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar'
      },
      {
        desc: '天猫',
        img: 'http://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar'
      },
      {
        desc: '天猫国际',
        img: 'http://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar'
      },
      {
        desc: '外卖',
        img: 'http://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar'
      }],
    caidan:["我的预约","我的门锁","水电充值","WIFI密码","我的室友","我的管家","服务电话"],
    sys: ["我的评价","投诉建议"]
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    });
  }
})
