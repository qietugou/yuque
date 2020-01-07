// pages/detail/detail.js
import Doc from '../../models/doc'
import pageState, { reload } from '../../utils/pageState'

const state = pageState(this)

Page({
    /**
     * 页面的初始数据
     */
    data: {
        doc: {},
        hidden: false,
        message: String
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function(options) {
        let wxParse = require('../..//wxParse/wxParse.js')
        const doc = await Doc.getUserDoc(options.id, options.bookid).then(null, state.fail)

        wxParse.wxParse('article', 'md', doc.data.body, this, 5)

        this.setData({
            doc: doc.data
        })
    },
    goBack() {
        wx.navigateBack({
            delta: 1
        })
    },
    wxParseTagATap(event) {
        this.setData({
            hidden: true,
            message: '不允许外链' + event.currentTarget.dataset.src
        })
        setTimeout(() => {
            this.setData({
                hidden: false,
                message: ''
            })
        }, 2000)
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
        return {
            title: this.data.doc.title,
            path: `/pages/detail/detail?id=${this.data.doc.id}&bookid=${this.data.doc.book_id}`
        }
    },
    stateReload: function() {
        reload(this)
    }
})
