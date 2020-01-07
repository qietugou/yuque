import Http from '../utils/http'

export default class Repo {

    static async getUserRepos(id) {
        return await Http.request({
            url: `/users/${id}/repos`
        })
    }
    static async getGroupsRepos(id) {
        return await Http.request({
            url: `/groups/${id}/repos`
        })
    }

}
