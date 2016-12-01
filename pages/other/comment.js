var util = require("../../utils/util.js");
var app = getApp();

var id = 0;
var page = 1;
var lastcid = 0;

Page({
    data: {
        dataList: []
    },
    onLoad: function(options) {
        id = options.id;
        this.loadData();
    },
    loadData: function() {
        util.alertLoading("加载中", 1000);
        var that = this;
        var url = 'http://api.budejie.com/api/api_open.php';
        var requireData = { a: 'dataList', c: 'comment', data_id: id };

        console.log(requireData);
        util.request(url, requireData, function(res) {
            page = 1;
            that.setData({
                dataList: res.data.data
            })
            if (res.data.data.length > 0) {
                lastcid = res.data.data[res.data.data.length - 1].id;
                console.log(lastcid);
            }
        })
    },
    onReachBottom: function() {
        util.alertLoading("请稍候，加载中", 1000);
        var that = this;
        var url = 'http://api.budejie.com/api/api_open.php';
        var requireData = { a: 'dataList', c: 'comment', data_id: id, lastcid: lastcid }
        console.log(requireData);
        util.request(url, requireData, function(res) {
            if (res.data.data) {
                that.setData({
                    dataList: that.data.dataList.concat(res.data.data)
                });
                lastcid = res.data.data[res.data.data.length - 1].id;
            } else {
                util.alertSuccess("没有更多了！", 1000);
            }
        });
    }


})