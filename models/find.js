import Http from '../utils/http'

export default class Find {

    static async getFind() {
        return await Http.request({
            url: `https://www.yuque.com/api/explore/recommends?limit=20&type=Doc`
        })
    }

}
