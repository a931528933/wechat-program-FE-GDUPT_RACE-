const app = getApp()//静态变
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    maskHidden: true,
    imagePath: '',
    textarea_text: "",
    textarea_text1: "",
    textarea_text2: "",
    textarea_text3: "",
    textarea_text4: "",
    textarea_text5: "",
    textarea_placeholder: '',
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  textarea_bindinput(res) {
    this.setData({
      textarea_text: res.detail.value
    })
  },
  textarea_bindinput1(res) {
    this.setData({
      textarea_text1: res.detail.value
    })
  },
  textarea_bindinput2(res) {
    this.setData({
      textarea_text2: res.detail.value
    })
  },
  textarea_bindinput3(res) {
    this.setData({
      textarea_text3: res.detail.value
    })
  },
  textarea_bindinput4(res) {
    this.setData({
      textarea_text4: res.detail.value
    })
  },
  textarea_bindinput5(res) {
    this.setData({
      textarea_text5: res.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})