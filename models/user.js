import Http from '../utils/http'

export default class User {
    static async getUser() {
        return await Http.request({
            url: `/user`
        })
    }
}
