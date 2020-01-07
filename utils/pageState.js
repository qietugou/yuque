const loading = (that) => {
    return () => {
        that.setData({
            pageState: {
                state: 'loading',
                message: '加载中'
            }
        })
    }
}

const error = (that, message) => {
    return (message = '请检查您的网络连接') => {
        console.log(message)
        that.setData({
            pageState: {
                state: 'error',
                stateMessage: message
            }
        })
    }
}

const network = (that, message) => {
    return (message = '请检查您的网络连接') => {
        that.setData({
            pageState: {
                state: 'network',
                stateMessage: message
            }
        })
    }
}

const empty = (that, message) => {
    return (message = '空空如也') => {
        that.setData({
            pageState: {
                state: 'empty',
                stateMessage: message
            }
        })
    }
}

const finish = (that) => {
    return () => {
        that.setData({
            pageState: {
                state: 'finish',
                stateMessage: ''
            }
        })
    }
}

const fail = (that) => {
    return (e) => {
        if (e.statusCode === 404) {
            error(that)(e.data.message)
        } else{
            network(that)()
        }
    }
}

export const reload = (that) => {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    that.onLoad(currentPage.options);
}

export const navigateBack = () => {
    wx.navigateBack({
        delta: 1
    })
}

const pageState = (that) => {
    return {
        loading: loading(that),
        error: error(that),
        empty: empty(that),
        finish: finish(that),
        fail: fail(that)
    }
}

export default pageState