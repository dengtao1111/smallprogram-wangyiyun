const http = require('../../models/HTTP');
Page({
  data: {
    offset:0,
    albums:[]
  },
  onLoad(){
    http.getCatData(this.data.offset).then(res=>{
      var albums = res.data.albums
      this.setData({
        albums
      })
    })
  },
  onReachBottom(){
    var offset = this.data.offset;
    offset+=30;
    http.getCatData(offset).then(res=>{
      var {albums} = res.data;
      this.setData({
        offset,
        albums:this.data.albums.concat(albums)
      })
    })
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/musics/musics?id='+id
    })
  }
})

