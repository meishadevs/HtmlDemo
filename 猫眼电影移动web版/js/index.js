/**
 * Created by Administrator on 2017/11/9.
 * 首页的js文件
 */

window.onload = function () {

    //监听浏览器窗口大小是否发生变化
    window.onresize = function () {

        //重新加载当前页面
        location.reload(true);
        document.body.scrollTop = '0px';
    }

    //回到顶部
    gotoTop();
}


//回到顶部
function gotoTop() {

    //获得回到顶部按钮
    var goTop = document.querySelector('.gotoTop');

    //获得浏览器的高度
    var winHeight = document.documentElement.clientHeight || document.body.clientHeight;

    var leader = 0;
    var target = 0;
    var timer = null;

    //监听浏览器的滚动事件
    window.onscroll = function()
    {
        //如果滚动的距离超过了浏览器高度的一半，显示回到顶部按钮
        Util.scroll().top > winHeight / 2 ? goTop.style.display = "block" : goTop.style.display = "none";

        //把卷进去的头部给起始位置
        leader = Util.scroll().top;
    }

    //监听回到顶部按钮的点击事件
    goTop.onclick = function() {

        target = 0;

        timer = setInterval(function() {

            leader = leader + (target - leader ) / 10;

            //去往页面的某个位置
            window.scrollTo(0, leader);

            if(leader == target) {

                clearInterval(timer);
            }
        }, 10);
    }
}
