function getApi() {
    return {
        "baseUrl": "http://192.168.5.157:8090",
        "url": {
            "name": {
                "nameUrl": "",
                "type": "get/post"
            },
            // 首页资讯
            "getIndexList": {
                "nameUrl": "/news/getIndexList",
                "type": "get"
            },
            // 更多列表
            "list": {
                "nameUrl": "/news/list",
                "type": "get"
            },
            // 详情
            "getInfo": {
                "nameUrl": "/news/getInfo",
                "type": "get"
            },
            //协会简介等页面的活动图
            "getCarousel": {
                "nameUrl": "/news/getCarousel",
                "type": "get"
            }
        }
    }
}