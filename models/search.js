import Http from '../utils/http'

export default class Search {

    static async getSearchDetail(value) {
        return await Http.request({
            url: `https://www.yuque.com/api/zsearch?q=${value}&type=doc`
        })
    }
}
