jQuery.support.cors = true;

var list =
    getApi().baseUrl + getApi().url.list.nameUrl;

// 总页面
var IstotalPage = 1;

//  1新闻中心 3通知公告 5协会简介  6会员中心
function brief(pageNo,type) {
    var data = {
        categoryId: type,
        pageNo: pageNo,
        pageSize: 4
    }
    $.ajax({
        type: "get",
        dataType: "json",
        url: list,
        data: data,
        timeout: 5000,
        success: function (response) {
            for (var index = 0; index < 6; index++) {
                var element = response.result.data[index];
                if (!!element) {
                    $(".section .list a:eq(" + index + ")").attr("title", element.title);
                    $(".section .list a:eq(" + index + ")").attr("href", "details.html?type="+type+"&categoryId=" + element.id + "");
                    $(".section .list a img:eq(" + index + ")").attr("src", element.pic);
                    $(".section .list .title:eq(" + index + ")").text(element.title);
                    $(".section .list .content:eq(" + index + ")").text(element.subtitle);
                    $(".section .list .record:eq(" + index + ") span:eq(0)").text(Today(element.createTime).getDate + "-" + Today(element.createTime).year + "-" + Today(element.createTime).month);
                    $(".section .list .record:eq(" + index + ") span:eq(1)").text("浏览：" + element.pageViews + "次");
                } else {
                    $(".section .son:eq(" + index + ")").css("display", "none")
                }
            }
            // 获取总页面
            IstotalPage = response.result.totalPage
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
            $("#festival").attr("href",response.result[0].link);
            $("#festival img").attr("src",response.result[0].pic);
        },
        error: function (err) {
            console.log("请求错误");
            res = err;
        },
    });
}


// 分页
function pages(num, total,type) {
    
    if(LinkParameterExtraction(window.location.search).type==1){
        // 新闻中心
        $("#logo").attr("src","../images/home_news_logo_03.png");
        $("#current_page").text("新闻中心")
    }else if(LinkParameterExtraction(window.location.search).type==3){
        // 通知公告
        $("#logo").attr("src","../images/home_notification_03.png")
        $("#current_page").text("通知公告")
    }else if(LinkParameterExtraction(window.location.search).type==5){
        // 协会简介
        $("#logo").attr("src","../images/brief_logo.png")
        $("#current_page").text("协会简介")
    }else if(LinkParameterExtraction(window.location.search).type==6){
        // 会员中心
        $("#logo").attr("src","../images/memberCenter_logo.png")
        $("#current_page").text("会员中心")
    }
    // num  当前页数
    // total  页数
    var pages = $("#pages");
    if (total == 1) {
        // 页数为1时,不展现分页效果
        pages.remove()
    } else {
        // 当前页数是1时,"上一页"按钮失效
        if (num == 1) {
            $("#pages .previous").attr("class", "previous disabled")
        }
        // 当前页数与页数相等时,"下一页"和"最后一页"按钮失效
        if (num == total) {
            $("#pages .Next").attr("class", "Next disabled");
            $("#pages .last").attr("class", "last disabled")
        }
        if (num > 5) {
            // 只同时显示5个页面按钮
            for (var index = num - 5; index < Number(num); index++) {
                var ele = index + 1;
                if (num == ele) {
                    $("#pages .Next").before("<li class='active'><a href='brief.html?type="+type+"&pageNo=" + ele + "'>" + ele + "</a></li>")
                } else {
                    $("#pages .Next").before("<li><a href='brief.html?type="+type+"&pageNo=" + ele + "'>" + ele + "</a></li>")
                }
            }
        } else {
            if (total < 6) {
                // 只同时显示5个页面按钮
                for (var index = 0; index < total; index++) {
                    var ele = index + 1;
                    if (num == ele) {
                        $("#pages .Next").before("<li class='active'><a href='brief.html?type="+type+"&pageNo=" + ele + "'>" + ele + "</a></li>")
                    } else {
                        $("#pages .Next").before("<li><a href='brief.html?type="+type+"&pageNo=" + ele + "'>" + ele + "</a></li>")
                    }
                }
            } else {
                // 只同时显示5个页面按钮
                for (var index = 0; index < 5; index++) {
                    var ele = index + 1;
                    if (num == ele) {
                        $("#pages .Next").before("<li class='active'><a href='brief.html?type="+type+"&pageNo=" + ele + "'>" + ele + "</a></li>")
                    } else {
                        $("#pages .Next").before("<li><a href='brief.html?type="+type+"&pageNo=" + ele + "'>" + ele + "</a></li>")
                    }
                }
            }
        }
    }
}
// 上一页
function previous(type) {
    $(".previous").click(function (e) {
        e.preventDefault();
        var locationsearch = Number(LinkParameterExtraction(window.location.search).pageNo) - 1
        if (locationsearch != 0) {
            window.location = "brief.html?type="+type+"&pageNo=" + locationsearch + ""
        }
    });
}
// 下一页
function Next(type) {
    $(".Next").click(function (e) {
        e.preventDefault();
        var locationsearch = Number(LinkParameterExtraction(window.location.search).pageNo) + 1
        if (!locationsearch > IstotalPage) {
            window.location = "brief.html?type="+type+"&pageNo=" + locationsearch + ""
        }
    });
}
// 最后一页
function last(type) {
    $(".last").click(function (e) {
        e.preventDefault();
        var locationsearch = Number(LinkParameterExtraction(window.location.search).pageNo)
        if (locationsearch != IstotalPage) {
            window.location = "brief.html?type="+type+"&pageNo=" + IstotalPage + ""
        }
    });
}

$(
    getCarouselfun(),
    pages(LinkParameterExtraction(window.location.search).pageNo, IstotalPage,LinkParameterExtraction(window.location.search).type),
    previous(LinkParameterExtraction(window.location.search).type),
    Next(LinkParameterExtraction(window.location.search).type),
    last(LinkParameterExtraction(window.location.search).type),
    brief(Number(LinkParameterExtraction(window.location.search).pageNo),LinkParameterExtraction(window.location.search).type),
)