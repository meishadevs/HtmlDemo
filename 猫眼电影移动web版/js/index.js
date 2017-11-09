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

    //获得浏览器窗口的高度
    var winHeight = document.documentElement.clientHeight || document.body.clientHeight;

    //获得回到顶部按钮
    var gotoTop = document.querySelector('.gotoTop');

    //监听浏览器滚动
    window.onscroll = function () {

        //获得滚动条在竖直方向上滚动的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        //如果网页在竖直方向上滚动的距离大于浏览器高度的一半
        if (scrollTop > winHeight / 2) {
            //显示回到顶部按钮
            gotoTop.style.display = 'block';
        } else {
            //隐藏回到顶部按钮
            gotoTop.style.display = 'none';
        }
    }

    gotoTop.onclick = function () {
        document.body.scrollTop = '0px';
    }
}
