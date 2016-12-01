var util = require("../../utils/util.js");
var app = getApp()

Page({
    data: {
        datas: []
    },
    onLoad: function(options) {
        this.setData({
            user: options.user
        })
    }
})