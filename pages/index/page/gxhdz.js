Page({

  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    renshuData: ['1', '2', '3', '4', '5', '6','7','8','9','10'],
    jibieData:['大一','大二','大三','大四'],
    //下拉列表的数据
    index: 0//选择的下拉列表下标
  },
  // 点击下拉显示框
  renshuTap() {
    this.setData({
      show: !this.data.show
    });
  },
  jibieTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  onLoad: function (options) {

  }

})