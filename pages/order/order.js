const util = require('../../utils/util.js')

Page({
  data: {
    orders: [
      { name: "宝马", price: 100, made: "China"},
      { name: "长城", price: 90, made: "China" },
      { name: "长城", price: 90, made: "China" }
    ],
    background: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ], indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500
  }
})