// 请求连接
// IE8还不支持CORS协议,需要添加一下内容
jQuery.support.cors=true;

var informationCategoryUrl =
    getApi().baseUrl + getApi().url.informationCategory.nameUrl;
// 请求
function informationCategory() {
    $.ajax({
        type: "get",
        dataType: "json",
        url: informationCategoryUrl,
        // data: data,
        timeout: 5000,
        success: function (response) {
            console.log(response);
            for (var index = 0; index < response.result.length; index++) {
                var element = response.result[index];
                var a = $("<a href=''></a>");
                a.text(element.name);
                a.attr("href", "./src/pages/er.html?id=" + element.id);
                a.attr("title", element.name);
                $("section").append(a);
            }
        },
        error: function (err) {
            console.log("请求错误");
            res = err;
        },
    });
}

// 获取头部大图片的高
function home_header_img() {
    $(".home_header").height($("#home_header_img").height())
}

$(
    // informationCategory(),
    // 获取头部大图片的高
    home_header_img()
);