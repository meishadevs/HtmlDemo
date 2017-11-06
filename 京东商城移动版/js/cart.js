/**
 * 购物车页的js文件
 */

window.onload = function () {

    //checkbox切换
    changeCheckBox();
    
    //删除商品
    deleteProduct();
};


//checkbox切换
function changeCheckBox() {

    //获得所有自定义的checkbox标签
    var checkBoxs = document.querySelectorAll('.jd-check-box .check-box');

    //遍历所有自定义checkbox标签
    for (var i = 0; i < checkBoxs.length; i++) {

        //监听checkbox标签的点击事件
        checkBoxs[i].onclick = function () {

            //获得当前点击的checkbox标签的selected属性
            var attr = this.getAttribute('selected');

            //如果当前点击的checkbox标签有selected属性
            if (attr != null) {

                //移除当前点击的checkbox标签的selected属性
                this.removeAttribute('selected');

            //如果当前点击的checkbox标签没有selected属性
            } else {

                //给当前点击的checkbox标签设置一个selected属性
                this.setAttribute('selected', ' ');
            }
        }
    }
}


//删除商品
function deleteProduct() {

    //获得所有删除商品按钮
    var deleteButtons = document.querySelectorAll('.delete-box');

    //获得对话框
    var dialog = document.querySelector('.dialog');
    var dialogBox = dialog.querySelector('.dialog-box');

    //获得对话框上的确认按钮
    var buttonOk = dialog.querySelector('.button-ok');

    //获得对话框上的取消按钮
    var buttonCancel = dialog.querySelector('.button-cancel');

    //删除商品按钮的上半部分
    var delTopBtn;

    //遍历所有删除商品按钮
    for (var i = 0; i < deleteButtons.length; i++) {

        //给删除商品按钮一个点击事件
        deleteButtons[i].onclick = function () {

            //显示对话框
            dialog.style.display = 'block';

            //给对话框添加一个动画
            dialogBox.className = 'dialog-box bounceInDown';

            //获得删除商品按钮的上半部分
            delTopBtn = this.querySelector('.delete-top');
            delTopBtn.style.transform = 'rotate(-45deg) translateY(-5px)';
            delTopBtn.style.webkitTransform = 'rotate(-45deg) translateY(-5px)';
            delTopBtn.style.transition = '0.3s all ease';
            delTopBtn.style.webkitTransition = '0.3s all ease';
        }
    }

    //给确认按钮一个点击事件
    buttonOk.onclick = function () {

        //隐藏对话框
        dialog.style.display = 'none';

        if (delTopBtn) {
            delTopBtn.style.transform = 'rotate(0deg) translateY(0px)';
            delTopBtn.style.webkitTransform = 'rotate(0deg) translateY(0px)';
            delTopBtn.style.transition = 'none';
            delTopBtn.style.webkitTransition = 'none';
        }
    }

    //给取消按钮一个点击事件
    buttonCancel.onclick = function () {

        //隐藏对话框
        dialog.style.display = 'none';

        if (delTopBtn) {
            delTopBtn.style.transform = 'rotate(0deg) translateY(0px)';
            delTopBtn.style.webkitTransform = 'rotate(0deg) translateY(0px)';
            delTopBtn.style.transition = 'none';
            delTopBtn.style.webkitTransition = 'none';
        }
    }
}

















