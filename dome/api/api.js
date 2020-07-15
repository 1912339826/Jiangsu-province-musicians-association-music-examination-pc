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
            }
        }
    }
}