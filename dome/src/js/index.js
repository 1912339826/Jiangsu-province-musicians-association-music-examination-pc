// 请求连接
// IE8还不支持CORS协议,需要添加一下内容
jQuery.support.cors = true;

var getIndexList =
    getApi().baseUrl + getApi().url.getIndexList.nameUrl;
// 首页资讯
// 类别id-->1为新闻中心2为考试信息3通知公告4二级学会
// 1新闻中心
function home_news() {
    var data = {
        categoryId: 1
    }
    $.ajax({
        type: "get",
        dataType: "json",
        url: getIndexList,
        data: data,
        timeout: 5000,
        success: function (response) {
            for (var index = 0; index < 6; index++) {
                var element = response.result[index];
                if (!!element) {
                    $(".home_news_list a:eq(" + index + ")").attr("title", element.title);
                    $(".home_news_list a:eq(" + index + ")").attr("href", "./src/pages/details.html?type=1&categoryId=" + element.id + "");
                    $(".home_news_list a img:eq(" + index + ")").attr("src", element.pic);
                    $(".home_news_list .title:eq(" + index + ")").text(element.title);
                    $(".home_news_list .content:eq(" + index + ")").text(element.subtitle);
                } else {
                    $(".home_news_list a:eq(" + index + ")").css("display", "none")
                }
                // subtitle
            }
        },
        error: function (err) {
            console.log("请求错误");
            res = err;
        },
    });
}

// 3通知公告
function home_notification() {
    var data = {
        categoryId: 3
    }
    $.ajax({
        type: "get",
        dataType: "json",
        url: getIndexList,
        data: data,
        timeout: 5000,
        success: function (response) {
            // 通知公告的轮播图
            slideshow(response.result)
            for (var index = 0; index < 3; index++) {
                var element = response.result[index];
                if (!!element) {
                    // 通知公告的列表
                    $(".home_notification_list .list:eq(" + index + ")").attr("title", element.title);
                    $(".home_notification_list a:eq(" + index + ")").attr("href", "./src/pages/details.html?type=3&categoryId=" + element.id + "");
                    $(".home_notification_list a img:eq(" + index + ")").attr("src", element.pic);
                    $(".home_notification_list .title:eq(" + index + ")").text(element.title);
                    $(".home_notification_list .left:eq(" + index + ") div:eq(0)").text(Today(element.createTime).getDate);
                    $(".home_notification_list .left:eq(" + index + ") div:eq(1)").text(Today(element.createTime).year + "-" + Today(element.createTime).month);
                    $(".home_notification_list .described:eq(" + index + ")").text(element.subtitle);
                } else {
                    $(".home_notification_list .list:eq(" + index + ")").css("display", "none")
                }

            }
        },
        error: function (err) {
            console.log("请求错误");
            res = err;
        },
    });
}

// 4二级学会
function secondary_institute() {
    var data = {
        categoryId: 4
    }
    $.ajax({
        type: "get",
        dataType: "json",
        url: getIndexList,
        data: data,
        timeout: 5000,
        success: function (response) {
            for (var index = 0; index < 10; index++) {
                var element = response.result[index];
                if (!!element) {
                    // 通知公告的列表
                    $(".secondary_institute li:eq("+index+")").attr("title",element.title);
                    $(".secondary_institute li:eq("+index+") img").attr("src",element.pic);
                    $(".secondary_institute li:eq("+index+") div").text(element.title);
                    $(".secondary_institute li:eq("+index+") a").attr("href","./src/pages/details.html?type=4&categoryId=" + element.id + "");
                } else {
                    $(".secondary_institute li:eq(" + index + ")").css("display", "none")
                }
            }
        },
        error: function (err) {
            console.log("请求错误");
            res = err;
        },
    });
}

// 轮播图
function slideshow(arr) {
    $(".ele div").attr("id", "")
    $(".ele div:eq(0)").attr("id", "active")
    $(".slideshow .imgs img").attr("src", arr[0].pic)
    $(".slideshow .day div:eq(0)").text(Today(arr[0].createTime).getDate)
    $(".slideshow .day div:eq(1)").text(Today(arr[0].createTime).year + "-" + Today(arr[0].createTime).month);
    $(".slideshow .test").text(arr[0].title)
    $(".slideshow a").attr("href", "./src/pages/details.html?type=3&categoryId=" + (arr[0].id) + "")
    var cun = 0;
    window.timer = setInterval(function () {
        cun++
        if (cun > 2) {
            cun = 0;
        }
        $(".ele div").attr("id", "")
        $(".ele div:eq(" + cun + ")").attr("id", "active")
        $(".slideshow .imgs img").attr("src", arr[cun].pic)
        $(".slideshow .day div:eq(0)").text(Today(arr[cun].createTime).getDate)
        $(".slideshow .day div:eq(1)").text(Today(arr[cun].createTime).year + "-" + Today(arr[cun].createTime).month);
        $(".slideshow .test").text(arr[cun].title)
        $(".slideshow a").attr("href", "./src/pages/details.html?type=3&categoryId=" + (arr[cun].id) + "")
    }, 1000)
}
// 获取网页链接的参数
// console.log(LinkParameterExtraction(window.location.search))

$(
    home_notification(),
    home_news(),
    secondary_institute()
    // console.clear()//清空上面的console显示
);