jQuery.support.cors = true;

var list =
    getApi().baseUrl + getApi().url.getInfo.nameUrl;

function getInfo(id) {
    if (LinkParameterExtraction(window.location.search).type == 1) {
        // 新闻中心
        $("#two").text("新闻中心列表》")
        $("#two").attr("href", "../../index.html")
        $("#three").text("新闻中心")
        $(".index a").css("color", "#b2806c")
    } else if (LinkParameterExtraction(window.location.search).type == 3) {
        // 通知公告
        $("#two").text("通知公告列表》")
        $("#two").attr("href", "../../index.html")
        $("#three").text("通知公告")
        $(".index a").css("color", "#b2806c")
    } else if (LinkParameterExtraction(window.location.search).type == 5) {
        // 协会简介
        $("#two").text("协会简介列表》")
        $("#two").attr("href", "brief.html?pageNo=1&type=5")
        $("#three").text("协会简介")
        $(".brief a").css("color", "#b2806c")
    } else if (LinkParameterExtraction(window.location.search).type == 6) {
        // 会员中心
        $("#two").text("会员中心列表》")
        $("#two").attr("href", "memberCenter.html?pageNo=1&type=6")
        $("#three").text("会员中心")
        $(".memberCenter a").css("color", "#b2806c")
    } else if (LinkParameterExtraction(window.location.search).type == 2) {
        // 考级专区
        $("#two").text("考级专区列表》")
        $("#two").attr("href", "EmploysZone.html?pageNo=1&type=2")
        $("#three").text("考级专区")
        $(".EmploysZone a").css("color", "#b2806c")
    }else if (LinkParameterExtraction(window.location.search).type == 7) {
        // 下载专区
        $("#two").text("下载专区列表》")
        $("#two").attr("href", "../../index.html")
        $("#three").text("下载专区")
        $(".EmploysZone a").css("color", "#b2806c")
    }
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
            $("#festival").attr("href", response.result[0].link);
            $("#festival img").attr("src", response.result[0].pic);
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
    getCarouselfun(),
    getInfo(LinkParameterExtraction(window.location.search).categoryId)
)