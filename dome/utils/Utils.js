// 工具箱

// 链接参数提取
// 截取url参数,传的参数为当前页面的window.location.search
function LinkParameterExtraction(search) {
    var obj = {};
    // if (!!(search.split("?")[0] != "")) {
        var list = search.split('?')[1].split('&')
        for (var index = 0; index < list.length; index++) {
            var element = list[index];
            obj[element.split('=')[0]] = element.split('=')[1]
        }
        return obj
    // } else {
        // return false
    // }
}

// 设置html标签的字体大小即设置rem
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            // console.log(clientWidth)
            if (!clientWidth) return;
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
            // console.log(docEl.style.fontSize)
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    // console.log("       ♪♪\n       ♪♪\n       ♪♪♪♪♪♪♪♪\n       ♪♪    ♪♪\n       ♪♪    ♪♪\n       ♪♪    ♪♪\n       ♪♪    ♪♪\n       ♪♪\n       ♪♪\n      ♪♪♪\n ♪♪♪♪♪♪♪♪\n♪♪♪♪♪♪♪♪♪\n♪♪♪♪♪♪♪♪♪\n♪♪♪♪♪♪♪♪")
})(document, window);

// 日期

function Today(params) {
    var data = new Date(params);
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var getDate = data.getDate();
    return {
        year: year,
        month: month,
        getDate: getDate
    }
}

// console.clear()