
window.onload = function () {

    //改变头部搜索区块的透明度
    changeTransparent();

    //秒杀
    secondKill();
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


//秒杀
function secondKill() {

    //获得所有用于显示剩余时间的span标签
    var timeList = document.querySelectorAll('.sk-time > .num');

    //倒计时的秒数
    var times = 7 * 60 * 60;

    var timer;

    //创建定时器
    timer = setInterval(function () {

        times--;

        //将剩余时间的秒数转换成小时
        var h = Math.floor(times / 60 / 60);

        //将剩余时间的秒数转换成分钟(将剩余时间的秒数转换成小时的余数表示分钟)
        var m = Math.floor(times / 60 % 60);

        //秒(将剩余时间的秒数转换为分钟的余数表示秒数)
        var s = times % 60;

        //获取小时数的十位上的数字
        timeList[0].innerHTML = h > 10 ? Math.floor(h / 10) : 0;

        //获取小时数的个位上的数字
        timeList[1].innerHTML = h % 10;

        //计算分钟数的十位上的数字
        timeList[2].innerHTML = m > 10 ? Math.floor(m / 10) : 0;

        //计算分钟数的个位上的数字
        timeList[3].innerHTML = m % 10;

        //计算秒钟数的十位上的数字
        timeList[4].innerHTML = s > 10 ? Math.floor(s / 10) : 0;

        //计算秒钟数的个位上的数字
        timeList[5].innerHTML = s % 10;

        if (times <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}