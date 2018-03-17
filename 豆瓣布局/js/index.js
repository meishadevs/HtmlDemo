
$(document).ready(function () {

    changeNav();
});

//导航菜单切换
function changeNav() {
    $('.nav-item').on('touchstart', function () {
        $(this).addClass('active').siblings().removeClass('active');

        var index = $(this).index();

        $('.content-item').eq(index).show().siblings().hide();

    });
}