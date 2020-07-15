jQuery.support.cors = true;

var list =
    getApi().baseUrl + getApi().url.list.nameUrl;

// 总页面
var IstotalPage = 0;
// 2
function EmploysZone(pageNo) {
    var data = {
        categoryId: 2,
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
                    $(".section .list a:eq(" + index + ")").attr("href", "./src/pages/details.html?type=1&categoryId=" + element.id + "");
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

function zPager() {
    $("#pager").zPager({
        current: 1, //当前页码数
        totalData: 16,
        pageData: 4, //每页数据条数
        btnShow: true,
        ajaxSetData: false
    });
}

function currentPage(currentPage) {
    var pageNo = LinkParameterExtraction(window.location.search).pageNo
    console.log(pageNo)
    /*
        触发页码数位置： Page/js/jquery.z-pager.js 64行
    */
    // console.log("当前页码数：" + currentPage);
    // EmploysZone(currentPage)
    // if(currentPage!=pageNo){
    //     console.log(currentPage,pageNo)
    //     window.location.href = "EmploysZone.html?pageNo=" + currentPage;
    // }
    

}

$(
    // EmploysZone(pageNo),
    zPager()
)