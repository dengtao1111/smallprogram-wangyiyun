// pages/musics/musics.js
const http = require('../../models/HTTP');
Page({

  
  data: {
    album:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    http.getIdData(id).then(res=>{
      var album = res.data.album;
      this.setData({
        album
      })
    })
  },
  
})