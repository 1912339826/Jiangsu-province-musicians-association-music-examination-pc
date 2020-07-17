jQuery.support.cors = true;
// 活动图片
var getCarousel =
    getApi().baseUrl + getApi().url.getCarousel.nameUrl;
// 总页面
var IstotalPage = 1;

function getCarouselfun(params) {
    $.ajax({
        type: "get",
        dataType: "json",
        url: getCarousel,
        timeout: 5000,
        success: function (response) {
            console.log(response.result[0])
            $("#festival").attr("href", response.result[0].link);
            $("#festival img").attr("src", response.result[0].pic);
        },
        error: function (err) {
            console.log("请求错误");
            res = err;
        },
    });
}

// 分页
function pages(num, total) {
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
                    $("#pages .Next").before("<li class='active'><a href='memberCenter.html?type=6&pageNo=" + ele + "'>" + ele + "</a></li>")
                } else {
                    $("#pages .Next").before("<li><a href='memberCenter.html?pageNo=" + ele + "'>" + ele + "</a></li>")
                }
            }
        } else {
            if (total < 6) {
                // 只同时显示5个页面按钮
                for (var index = 0; index < total; index++) {
                    var ele = index + 1;
                    if (num == ele) {
                        $("#pages .Next").before("<li class='active'><a href='memberCenter.html?type=6&pageNo=" + ele + "'>" + ele + "</a></li>")
                    } else {
                        $("#pages .Next").before("<li><a href='memberCenter.html?pageNo=" + ele + "'>" + ele + "</a></li>")
                    }
                }
            } else {
                // 只同时显示5个页面按钮
                for (var index = 0; index < 5; index++) {
                    var ele = index + 1;
                    if (num == ele) {
                        $("#pages .Next").before("<li class='active'><a href='memberCenter.html?type=6pageNo=" + ele + "'>" + ele + "</a></li>")
                    } else {
                        $("#pages .Next").before("<li><a href='memberCenter.html?pageNo=" + ele + "'>" + ele + "</a></li>")
                    }
                }
            }
        }
    }
}
// 上一页
function previous() {
    $(".previous").click(function (e) {
        e.preventDefault();
        var locationsearch = Number(LinkParameterExtraction(window.location.search).pageNo) - 1
        if (locationsearch != 0) {
            window.location = "memberCenter.html?type=6&pageNo=" + locationsearch + ""
        }
    });
}
// 下一页
function Next() {
    $(".Next").click(function (e) {
        e.preventDefault();
        var locationsearch = Number(LinkParameterExtraction(window.location.search).pageNo) + 1
        if (!locationsearch > IstotalPage) {
            window.location = "memberCenter.html?type=6&pageNo=" + locationsearch + ""
        }
    });
}
// 最后一页
function last() {
    $(".last").click(function (e) {
        e.preventDefault();
        var locationsearch = Number(LinkParameterExtraction(window.location.search).pageNo)
        if (locationsearch != IstotalPage) {
            window.location = "memberCenter.html?type=6&pageNo=" + IstotalPage + ""
        }
    });
}

$(
    getCarouselfun(),
    pages(LinkParameterExtraction(window.location.search).pageNo, IstotalPage),
    previous(),
    Next(),
    last(),
)