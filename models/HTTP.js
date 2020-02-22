let baseUrl = "https://music.aityp.com/"
function Http({ url, data }) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + url,
            data,
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            },
        })
    })
}
module.exports = {
    getCatData: (offset) => {
        return Http({
            url: "top/album?limit=30",
            data: {
                offset
            }
        })
    },
    getIdData: (id) => {
        return Http({
            url: "album",
            data: {
                id
            }
        })
    }
}