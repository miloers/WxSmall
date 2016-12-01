//index.js
//获取应用实例
var app = getApp()




Page({
    data: {
        userInfo: {},
        name: 'wechat',
        tabs: ["我的", "选项二", "选项三"],
        activeIndex: "0",
        sliderOffset: 0,
        sliderLeft: 0,
        array: [{
            message: 'foo',
            id: '12'
        }, {
            message: 'bar',
            id: '22'
        }],
        array11: [{
            content: '我的收集',
            img: '../../images/collent.png'
        }, {
            content: '我的关注',
            img: '../../images/view.png'
        }, {
            content: '我的地址',
            img: '../../images/address.png'
        }, {
            content: '我的消息',
            img: '../../images/message.png'
        }]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })


    },
    tabClick: function(e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }

})