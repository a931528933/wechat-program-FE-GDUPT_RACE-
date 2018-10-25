///index.js
//获取应用实例
var WxSearch = require('../../wxSearch/wxSearch.js')
var utils = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    
  },
  match:function() {
    wx.navigateTo({
      url: 'page/zxbs',
    })
  },
  div: function () {
    wx.navigateTo({
      url: 'page/gxhdz',
    })
  },
  can: function () {
    wx.navigateTo({
      url: 'page/kcjbs',
    })  
  },
  before: function () {
    wx.navigateTo({
      url: 'page/wqbs',
      
    })
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['启航杯', '比赛一', '比赛二', '比赛三', '比赛四']);
    WxSearch.initMindKeys(['竞赛', '比赛', '', '']);
  },
  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);

  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
})
  



