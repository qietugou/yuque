//app.js
import User from "./models/user";

App({
    onLaunch: async function () {
        // 登录
        this.getUser()
    },
    // 监听uid属性
    watch: function (method) {
        let obj = this.globalData;
        Object.defineProperty(obj, "uid", {
            configurable: true,
            enumerable: true,
            set: function (value) {
                this._uid = value;
                method(obj.user);
            },
            get: function () {
                return this._uid
            }
        })
    },
    getUser: async function() {
        let obj = this;
        const user = await User.getUser().then(null, (e) => {
            wx.showModal({
                title: '加载用户信息失败',
                showCancel: false,//是否显示取消按钮
                confirmText: '重试',
                success() {
                    obj.getUser()
                }
            })
        })
        this.globalData.user = user.data
        this.globalData.uid = user.data.id
    },
    globalData: {
        userInfo: null,
        user: {}
    },
})