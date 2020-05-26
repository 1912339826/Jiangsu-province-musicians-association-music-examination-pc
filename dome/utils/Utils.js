// 工具箱

// 链接参数提取
// 截取url参数,传的参数为当前页面的window.location.search
function LinkParameterExtraction(search) {
    var obj = {};
    var list = search.split('?')[1].split('&')
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        obj[element.split('=')[0]] = element.split('=')[1]
    }
    return obj
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
})(document, window);
