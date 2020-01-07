// pages/group/group.js
import Repo from '../../models/repo'

import pageState, { reload } from '../../utils/pageState'
const state = pageState(this)

Page({
    /**
     * 页面的初始数据
     */
    data: {
        repos: [],
        count: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function(options) {
        const repos = await Repo.getUserRepos(options.id).then(null, state.fail)
        this.setData({
            repos: repos.data,
            count: repos.data.length
        })
    },
    cellChange: function(params) {
        const { data } = params.detail
        wx.navigateTo({
            url: `/pages/toc/toc?id=${data.data.id}`
        })
    },
    stateReload: function() {
        reload(this)
    }
})
