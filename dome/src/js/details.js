console.log(LinkParameterExtraction(window.location.search))
jQuery.support.cors = true;

var list =
    getApi().baseUrl + getApi().url.getInfo.nameUrl;

function getInfo(id) {
    data = {
        newsId: id
    }
    $.ajax({
        type: "get",
        dataType: "json",
        url: list,
        data: data,
        timeout: 5000,
        success: function (response) {
            console.log(response.result)
            $(".details_main .section .box").html(response.result.content)
            $(".details_main .section .title").text(response.result.title)
            $(".details_main .section .day").text(Today(response.result.createTime) + "浏览：" + response.result.pageViews + "次")
        },
        error: function (err) {
            console.log("请求错误");
            res = err;
        },
    });
}
// 日期
function Today(params) {
    var data = new Date(params);
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var getDate = data.getDate();
    return year + "-" + month + "-" + getDate
}

$(
    getInfo(LinkParameterExtraction(window.location.search).categoryId)
)