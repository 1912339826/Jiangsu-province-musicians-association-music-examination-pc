// 请求连接
// IE8还不支持CORS协议,需要添加一下内容
jQuery.support.cors = true;

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

// 轮播图
function slideshow() {
    var ele = $(".ele").children()
    var cun = 0;
    var element = [];
    for (var index = 0; index < ele.length; index++) {
        element.push(ele[index]);
        // element.attr("id","active")
    }
    console.log(element[0].id)
    window.timer = setInterval(function() {
        cun++
        if(cun>2){
            cun = 0;
        }
        $(".ele div").attr("id","")
        element[cun].id = "active";
    }, 1000)
    // clearInterval(interval);
}

$(
    // informationCategory(),
    // 获取头部大图片的高
    home_header_img(),
    slideshow()
    // console.clear()//清空上面的console显示
);