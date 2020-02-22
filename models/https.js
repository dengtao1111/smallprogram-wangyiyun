let baseUrl = "https://music.aityp.com/"
function Http({url,data}){
    return new Promise((resolve,reject)=>{
         wx.request({
            url: baseUrl+url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            },
               
        })
    })
}
module.exports = {
    getCatData:(offset)=>{
        return Http({
            url:"program/recommend?limit=30",
            data:{
                offset
            }
        })
    },
    getIdData:(id)=>{
            return Http({
                url:"dj/program/detail",
                data:{
                    id
                }
            })
    }
}