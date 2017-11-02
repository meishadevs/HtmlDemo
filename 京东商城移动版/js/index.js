
window.onload = function () {

    //改变头部搜索区块的透明度
    changeTransparent();

    //秒杀
    secondKill();

    //轮播图
    scrollPic();
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
        //times / 60 表示将剩余时间的秒数转换成分钟
        // times / 60 % 60 表示将分钟转换成小时产生的余数
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


//轮播图
function scrollPic() {

    //获得banner
    var banner = document.querySelector('.jd-banner');

    //获得承载图片的盒子
    var imageBox = banner.querySelector('.banner-image');

    //获得所有图片
    var imageList = imageBox.querySelectorAll('li');

    //获得承载点的盒子
    var pointBox = banner.querySelector('.banner-point');

    //获得所有点
    var pointList = pointBox.querySelectorAll('li');

    //获得banner的宽度
    var bannerWidth = banner.offsetWidth;

    //标记当前正显示的图片的下标
    var index = 1;

    var timer = null;

    //创建一个每秒钟调用一次的定时器
    timer = setInterval(function () {
        changeClassName(pointList, index);

        index++;

        addTransition(imageBox);
        setTransform(imageBox, -index * bannerWidth);
    }, 2000);

    //过渡效果播放完成后，被触发
    imageBox.addEventListener('transitionend', function () {

        //如果播到了最后一张图片
        //一共有10张图片，图片的索引从0开始，所以第9张图片就是最后一张图片
        if (index >= 9) {
            index = 1;

        //第0张图片和第8张图片是一样的
        //第一张图片和第9张图片是一样的
        } else if (index <= 0) {
            index = 8;
        }

        //移除过渡效果
        removeTransition(imageBox);

        //设置移动的距离
        setTransform(imageBox, -index * bannerWidth);
    });

    //过渡效果播放完成后，被触发
    imageBox.addEventListener('webkitTransitionEnd', function () {
    });
}


//添加过渡效果
function addTransition(ele) {
    ele.style.transition = 'all 0.3s ease';
    ele.style.webkitTransition = 'all 0.3s ease';
}


//移除过渡效果
function removeTransition(ele) {
    ele.style.transition = 'none';
    ele.style.webkitTransition = 'none';
}


//设置移动的距离
function setTransform(ele, offset) {
    ele.style.transform = 'translateX(' + offset + 'px)';
    ele.style.webkitTransform = 'translateX(' + offset + 'px)';
}


//修改标签的类名
function changeClassName(eles, index) {
    for (var i = 0; i < eles.length; i++) {
        eles[i].className = '';
    }

    if (index >= 8) {
        index = 0;
    }

    eles[index].className = 'current';
}

