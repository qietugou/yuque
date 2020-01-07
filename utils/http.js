import {config} from '../config/config'
import {promisic} from './util'
import Token from "./token";

export default class Http {

    static async request({url, data, method = 'GET'}) {
            wx.showLoading({
                title:'加载中',
                mask:true
            })
            const res = await promisic(wx.request)({
                url: Http.getUrl(url),
                data,
                method,
                header: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': Http.getToken()
                },
                dataType: 'json',
                responseType: 'text',
            }).then(null, (e) => {
                wx.hideLoading();
                return Promise.reject(e) //继续抛出失败态
            })
            wx.hideLoading();
            return res.data
    }

    static getToken() {

        let token = Token.getToken()

        if (!token) {
            token = config.AccessToken
            Token.setToken(token)
        }
        return token
    }

    static getUrl(url) {
        if (url.includes('http')) {
            return url
        }
       return `${config.apiBaseUrl}${url}`
    }
}
