// pages/toc.js
import Doc from '../../models/doc'
import pageState, { navigateBack, reload } from '../../utils/pageState'
const state = pageState(this)
Page({
    /**
     * 页面的初始数据
     */
    data: {
        count: 0,
        tocList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function(options) {
        const list = await Doc.getUserDocList(options.id).then(null, state.fail)
        console.log(list.data)
        this.setData({
            tocList: list.data,
            count: list.data.length
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},
    goBack() {
        navigateBack()
    },
    stateReload() {
        reload()
    },
    tapDetail(event) {
        wx.navigateTo({
            url: `/pages/detail/detail?id=${event.currentTarget.dataset.id}&bookid=${event.currentTarget.dataset.bookid}`
        })
    }
})
