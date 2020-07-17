jQuery.support.cors = true;
// 活动图片
var getCarousel =
    getApi().baseUrl + getApi().url.getCarousel.nameUrl;


function getCarouselfun(params) {
    $.ajax({
        type: "get",
        dataType: "json",
        url: getCarousel,
        timeout: 5000,
        success: function (response) {
            console.log(response.result[0])
            $("#festival").attr("href",response.result[0].link);
            $("#festival img").attr("src",response.result[0].pic);
        },
        error: function (err) {
            console.log("请求错误");
            res = err;
        },
    });
}

$(
    getCarouselfun()
)