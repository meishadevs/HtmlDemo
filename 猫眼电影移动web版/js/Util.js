
//封装的一些常用的函数
var Util = {

    /**
     * 查找网页中类名为className的标签
     * @param className 类名
     * @returns {*} 类名为className的标签
     */
    getByClass:function(className)
    {
        //如果浏览器支持document.getElementsByClassName
        if(document.getElementsByClassName)
        {
            //直接使用document.getElementsByClassName
            return document.getElementsByClassName(className);
        }

        var array = [];

        //获得网页中节点的个数
        var dom = document.getElementsByTagName("*");

        //遍历网页中的节点
        for(var i = 0; i < dom.length; i++)
        {
            //将节点的类名保存在txtArr数组中
            var txtArr = dom[i].className.split(" ");

            //遍历txtArr数组
            for(var j = 0; j < txtArr.length; j++)
            {
                //如果txtArr数组中存在className
                if(txtArr[j] == className)
                {
                    array.push(dom[i]);
                }
            }
        }
        return array;
    },

    //获得与窗口滑动相关的信息
    scroll:function()
    {
        if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
        // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
        {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return { //  剩下的肯定是怪异模式的
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}