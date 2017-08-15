/**
 * Created by Administrator on 2017/8/15 0015.
 */


/***************页面中的轮播图部分*************************************/
(function () {
    var $pic = $('.banner .pic'),
        $picLi = $pic.find("li"),
        $picLiWidth = $picLi.width(),
        $tab = $('.banner .tab'),
        $tabLi = $tab.find("li"),
        $btnLeft = $(".banner .left"),
        $btnRight = $(".banner .right");

    // 点击tab li 的时候
    $tabLi.click(function () {
        $pic.stop().animate({
            "marginLeft" : -$picLiWidth*($(this).index()+1)+"px"
        },800);
        $(this).addClass("on").siblings().removeClass("on");
    })


})();