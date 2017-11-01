
window.onload = function () {

    //改变头部搜索区块的透明度
    changeTransparent();
}


//改变头部搜索区块的透明度
function changeTransparent() {

    //获得头部搜索区块
    var search = document.querySelector('.jd-header-box');

    //获得banner
    var banner = document.querySelector('.jd-banner');

    //获得banner的高度
    var bannerHeight = banner.offsetHeight;

    //监听浏览器的滚动事件
    window.onscroll = function() {

        //获得竖直方向上的滚动条到浏览器顶部的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        //如果网页滚动的距离超过了banner的高度
        if (scrollTop > bannerHeight) {
            search.style.backgroundColor = "rgba(209, 55, 67, 0.85)";
        } else {
            var op = scrollTop / bannerHeight * 0.85;
            search.style.backgroundColor = "rgba(209, 55, 67, " + op + ")";
        }
    }
}