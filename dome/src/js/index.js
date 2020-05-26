// 每个页面js必备,api的引入
// let informationCategory = Ask(getApi().url.informationCategory.nameUrl,"get")
// if(informationCategory){
//     console.log(informationCategory)
// }

var informationCategoryUrl = `${getApi().baseUrl}${getApi().url.informationCategory.nameUrl}`
// 请求
function informationCategory() {
    $.ajax({
        type: 'get',
        dataType: "json",
        url: informationCategoryUrl,
        // data: data,
        timeout: 5000,
        success: function (response) {
            console.log(response)
            for (let index = 0; index < response.result.length; index++) {
                const element = response.result[index];
                var a = $("<a href=''></a>")
                a.text(element.name)
                a.attr('href', `./src/pages/er.html?id=${element.id}`)
                $("section").append(a);
            }
        },
        error: function (err) {
            console.log("请求错误");
            res = err
        }
    });
}
informationCategory()