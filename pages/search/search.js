// pages/search/search.js
import Search from '../../models/search'
import pageState, { navigateBack, reload } from '../../utils/pageState'

const state = pageState(this)
Page({
    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        number: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

    changeSearch: async function(event) {
        const detail = await Search.getSearchDetail(event.detail.value).then(null, state.fail)
        this.setData({
            list: detail.data.hits,
            number: detail.data.hits.length
        })
    },
    changeItem: function(event) {
        wx.navigateTo({
            url: `/pages/detail/detail?id=${event.currentTarget.dataset.id}&bookid=${event.currentTarget.dataset.bookid}`
        })
    },
    stateReload: function() {
        reload(this)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {}
})
