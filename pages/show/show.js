const http = require('../../models/https')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    program:[]
  },
  onLoad:function(options){
    var id = options.id;
    http.getIdData(id).then(res=>{
        var program = res.data.program;
        this.setData({
          program
        })
    })
  },
  handleClick(){
    var isPlay = this.data.isPlay
    isPlay = !isPlay
    this.setData({
      isPlay
    })
  }
})