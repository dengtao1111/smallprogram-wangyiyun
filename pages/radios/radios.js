const http = require('../../models/https');
Page({
  data: {
    offset:0,
    programs:[]
  },
  onLoad(){
    http.getCatData(this.data.offset).then(res=>{
      var programs = res.data.programs
      this.setData({
        programs
      })
    })
  },
  onReachBottom(){
    var offset = this.data.offset;
    offset+=30;
    http.getCatData(offset).then(res=>{
      var programs = res.data.programs
      this.setData({
        offset,
        programs:this.data.programs.concat(programs)
      })
    })
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/show/show?id='+id
    })
  }
})