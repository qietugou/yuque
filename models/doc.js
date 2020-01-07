import Http from '../utils/http'

export default class Doc {

    static async getUserDoc(id, bookid) {
        return await Http.request({
            url: `/repos/${bookid}/docs/${id}?raw=1 `
        })
    }

    static async getUserDocList(id) {
        return await Http.request({
            url: `/repos/${id}/docs`
        })
    }
}
