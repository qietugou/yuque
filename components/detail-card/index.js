// components/detail-navi-card/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: String,
        desc: String,
        icon: String,
        data: Object,
        dataType: String
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        tapClick(event) {
            this.triggerEvent('cellChange', {
                data: this.data,
                type: event.currentTarget.dataset.type
            })
        }
    }
})