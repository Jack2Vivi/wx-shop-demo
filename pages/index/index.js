//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
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
              },
              {
                desc: '天猫超市',
                img: 'http://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar'
                },
                {
                  desc: '充值中心',
                  img: 'http://img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png'
                  },
                  {
                    desc: '阿里旅行',
                    img: 'http://gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png'
                    },
                    {
                      desc: '领金币',
                      img: 'http://gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar'
                      },
                      {
                        desc: '到家',
                        img: 'http://img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png'
                        },
                        {
                          desc: '分类',
                          img: 'http://gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar'
                        }
    ],
    dropDownMenuTitle: ["地区","价格","人气","排序"],
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    cityleft: [
      { name: "湖南", check: true}, 
      { name: "广东", check: false},
      { name: "广西", check: false},
      { name: "北京", check: false}
    ],
    cityleft2: [
      { name: "湖南", check: true },
      { name: "广东", check: false },
      { name: "广西", check: false },
      { name: "北京", check: false },
      { name: "湖北", check: false },
      { name: "黑龙江", check: false },
      { name: "内蒙古", check: false }
    ],
    nav: -1,
    regionItem: "50%",
    regionItem2: 0
  }
  , list(e) {
    var vNar = "2";
    if (this.data.nav == "2") {
      vNar = "-1";
    }
    this.setData({
      nav: vNar,
    });
  }
  ,listqy(e) {
    console.log(this.data);
    var vNar = "1";
    if (this.data.nav == "1") {
      vNar = "-1";
    }
    this.setData({
      nav: vNar,
    });
    console.log(e);
  }
  , selectleft(e) {
    var city = e.target.dataset.city;
    for(var i in this.data.cityleft) {
      var item = this.data.cityleft[i];
      console.log(item);
      if (city === item.name) {
        item.check = true;
      }else {
        item.check = false;
      }
      console.log(item);
    }
    this.setData({ cityleft: this.data.cityleft});
    console.log(e);
  }
  , selectleft2(e) {
    var city = e.target.dataset.city;
    for (var i in this.data.cityleft2) {
      var item = this.data.cityleft2[i];
      console.log(item);
      if (city === item.name) {
        item.check = true;
      } else {
        item.check = false;
      }
      console.log(item);
    }
    this.setData({ regionItem2: 50, regionItem: "25%",cityleft2: this.data.cityleft2 });
    console.log(e);
  }
  //事件处理函数
  /**
   ,bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(this);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }**/
})
