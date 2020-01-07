import Http from '../utils/http'

export default class Group {

    static async getUserGroup(id) {
        return await Http.request({
            url: `/users/${id}/groups`
        })
    }
}
