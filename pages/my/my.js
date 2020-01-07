// pages/my/my.js
import User from '../../models/user'
import pageState, { navigateBack, reload } from '../../utils/pageState'
import Token from '../../utils/token'

const app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        user: {},
        switchUser: false,
        focus: false,
        token: '',
        inputValue: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function(options) {
        this.setData({
            user: app.globalData.user
        })
    },
    changeVer: function() {
        wx.navigateTo({
            url: `/pages/version/version`
        })
    },
    stateReload: function() {
        reload(this)
    },
    switchUser: function() {
        this.setData({
            switchUser: true,
            focus: true,
            inputValue: ''
        })
    },
    tokenInput: function(event) {
        this.data.token = event.detail.value
    },
    confirm: function() {
        if (!this.data.token) {
            wx.lin.showMessage({
                type: 'error',
                content: 'token 不能为空'
            })
        }
        Token.setToken(this.data.token)
        this.getUser()
        this.data.token = ''
    },
    cancel: function() {
        this.data.token = ''
    },
    changeClear: function() {
        Token.removeToken()
        this.getUser()
    },
    getUser: async function() {
        await User.getUser().then(
            (user) => {
                app.globalData.user = user.data
                this.setData({
                    user: user.data
                })
                wx.lin.showMessage({
                    type: 'success',
                    content: '切换用户成功 !'
                })
            },
            () => {
                wx.lin.showMessage({
                    type: 'error',
                    content: '用户信息获取失败，请校验您的 token !'
                })
                Token.removeToken()
            }
        )
    }
})
