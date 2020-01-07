import Repo from '../../models/repo'
import Group from '../../models/group'
import pageState, { navigateBack, reload } from '../../utils/pageState'

const state = pageState(this)
const app = getApp()

Page({
    data: {
        repos: [],
        groups: [],
        userId: null //校验切换
    },
    onLoad: function() {
        app.watch(async (user) => {
            //设置首页必须
            console.log(user)
            this.data.userId = user.id
            this.getLisrDetail(user)
        })
    },
    cellChange: function(params) {
        const { data, type } = params.detail
        if (type === 'book') {
            wx.navigateTo({
                url: `/pages/toc/toc?id=${data.data.id}`
            })
        } else {
            wx.navigateTo({
                url: `/pages/group/group?id=${data.data.id}`
            })
        }
    },
    changeSearch: function() {
        wx.navigateTo({
            url: `/pages/search/search`
        })
    },
    getLisrDetail: async function(user) {
        const repos = await Repo.getUserRepos(user.id).then(null, state.fail)
        const groups = await Group.getUserGroup(user.id).then(null, state.fail)
        this.setData({
            repos: repos.data,
            groups: groups.data
        })
    },
    stateReload: function() {
        reload(this)
    },

    onShow: function() {
        if (app.globalData.user && app.globalData.user.id != this.data.userId) {
            this.getLisrDetail(app.globalData.user)
            this.data.userId = app.globalData.user.id
        }
    }
})
