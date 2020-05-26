function getApi() {
    return {
        "baseUrl": "http://47.98.169.218:8090",
        "url": {
            "name": {
                "nameUrl": "",
                "type": "get/post"
            },
            "informationCategory": {
                "nameUrl": "/information/category/list",
                "type": "get"
            }
        }
    }
}

// function Ask(nameUrl, type, data) {
//     if (type == "get") {
//         $.ajax({
//             type: type,
//             dataType: "json",
//             url: `${getApi().baseUrl}${nameUrl}`,
//             data: data,
//             timeout: 5000,
//             success: function (response) {
//             },
//             error: function (err) {
//                 console.log("请求错误");
//             }
//         });
//     }

//     if (type == "post") {
//         $.ajax({
//             type: "POST",
//             contentType: "application/json; charset=utf-8",
//             dataType: "json",
//             url: `${getApi.baseUrl}${nameUrl}`,
//             data: data,
//             success: function (response) {
//             },
//             error: function (err) {
//                 console.log("请求错误");
//             }
//         });
//     }
// }