export default class Token {
    static Name  = 'token'
    static setToken(token) {
        console.log(token)
        wx.setStorageSync(Token.Name, token)
    }

    static getToken() {
       return  wx.getStorageSync(Token.Name)
    }


    static removeToken() {
        wx.removeStorageSync(Token.Name)
    }
}
