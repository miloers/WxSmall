var util = require("../../utils/util.js");

var app = getApp()

Page({
    data: {
        datas: []
    },
    onLoad: function() {
        var that = this;
        var url = 'https://api.douban.com/v2/user';
        var requeryData = { q: 'douban', count: '15' };
        util.request(url, requeryData, function(res) {
            var newData = res.data;
            that.setData({
                datas: newData.users
            })
        })
    },
    doSelect: function(doUser) {
        var userItem = this.data.datas[parseInt(doUser.currentTarget.id)];

        util.showModal("提示", "你是否要查看该用户详细信息", "true", function() {
            wx.navigateTo({
                url: '../douban/user?user=' + userItem.name
            })
        })




    }
})