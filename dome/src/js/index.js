// 每个页面js必备,api的引入
var api = getAsk()
// import './main'
// 页面加载之后执行的事件
$(function () {
    console.log(api)
})

// 请求
function dataFun(url) {
    // $.ajax({
    //     url:"",
    //     type:"POST",
    //     data:{"code":"bjpks"},
    //     beforeSend:function(){
    //         alert("请求前")
    //     },
    //     success:function (data) {
    //        var data=JSON.parse(data);
    //        console.log(data);
    //        alert("ajax请求");
    //     },
    //     error:function () {
    //      console.log("请求错误");
    //     }
    // });
}