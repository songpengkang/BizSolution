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
        $btn = $(".banner .btn div"),
        index = 0;     //tabLi的下表

    //初始化
    $tabLi.eq(0).addClass("on");

    // 点击tab li 的时候
    $tabLi.click(function () {
        var x = $(this).index();
        change(x);
    });
    //点击左右按钮的时候
    $btn.click(function () {
        var x = index;
        console.log($(this).index());
        if($(this).index()){
            x++;
            x%=$tabLi.length;
        }else {
            x--;
            if(x<0) x = $tabLi.length - 1;
        }
        change(x);
    });
    //自动轮播
    auto();
    function auto() {
        setInterval(function () {
            var x = index;
            x++;
            x%=$tabLi.length;
            change(x);
        },3000);
        return auto;
    }
    function change(i) {
        $pic.stop().animate({
            "marginLeft" : -$picLiWidth*(i+1)+"px"
        },800);
        $tabLi.eq(i).addClass("on").siblings().removeClass("on");
        index = i;
    }
})();


/*********导航栏吸顶************************/
(function () {
    $(window).scroll(function () {
        var $mainPage = $("#mainPage"),
            $navBar = $mainPage.find(".navbar"),
            $mainPageScrollHeight = $(document).offsetTop,
            $navHeight = $("#nav").height;
            if($mainPageScrollHeight > $navHeight){
                $navBar.css("backgroundColor","rgba(0,0,0,.3)")
            }
        console.log($mainPageScrollHeight);
    })
})();