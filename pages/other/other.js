var util = require("../../utils/util.js");
var app = getApp();

Page({
    data: {
        textDataList: [],
        tempid: 0,
        lastid: 0
    },
    onLoad: function() {
        util.alertLoading('数据加载中', 2000);
        this.loadData();
    },
    refreshData: function() {
        util.alertLoading('刷新中', 2000);
        this.loadData();

    },
    loadData: function() {
        var that = this;
        var url = 'http://api.budejie.com/api/api_open.php';
        var requireData = { a: 'list', c: 'data', type: '29' };
        util.request(url, requireData, function(res) {
            var newData = res.data;
            that.setData({
                textDataList: newData.list,
                tempid: newData.list[0].id
            })
            console.log(that.data.tempid);

        })
    },
    onReachBottom: function() {
        util.alertLoading("加载中!", 2000);
        console.log("加载这个没做 = =！");
    },
    onPullDownRefresh: function() {
        util.alertLoading("刷新中！", 1000);
        var that = this;
        var url = 'http://api.budejie.com/api/api_open.php';
        var requireData = { a: 'list', c: 'data', type: '29' };
        util.request(url, requireData, function(res) {
            var newData = res.data;
            that.setData({
                textDataList: newData.list,
                lastid: newData.list[0].id
            })
            console.log(that.data.lastid);
        });
        if (this.data.lastid === this.data.tempid) {
            util.alertSuccess("已经是最新了", 1000);
        }

    }



})