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
        index = 0,     //tabLi的下表
        clickTime = 0,
        timer1 = null;

    //初始化
    $tabLi.eq(0).addClass("on");

    // 点击tab li 的时候
    $tabLi.click(function () {
        var x = $(this).index();
        change(x);
    });
    //点击左右按钮的时候
    $btn.hover(function () {
        clearInterval(timer1)
    },auto());
    $btn.click(function () {
       if(new Date - clickTime > 800){
           var x = index;
           if($(this).index()){
               x++;
               x%=$tabLi.length;
           }else {
               x--;
               if(x<0) x = $tabLi.length - 1;
           }
           change(x);
           clickTime = new Date;
       }
    });
    //自动轮播
    function auto() {
        timer1 = setInterval(function () {
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
        var docScrollTop = $(document).scrollTop(),
            navHeight = $("#nav").height(),
            $navbar = $(".navbar"),
            $navbarUla= $(".navbar .daohang li a");
        if(docScrollTop < navHeight ){
            $navbar.css({
                backgroundColor:"rgba(0,0,0,.5)",
            })
            $navbarUla.css({
                color : "#d5d5d5"
            })
        }else {
            $navbar.css({
                backgroundColor:"rgba(255,255,255,.8)",
            })
            $navbarUla.css({
                color : "#333"
            })
        }

    })
})();

/********************背景移动**********************************/
(function () {
    $(window).scroll(function () {
        var $fix = $(".fix"),
            fixHeight = $fix.height(),
            docHeight = $(document).height(),
            docHeightScrollTop = $(document).scrollTop(),
            positionY = fixHeight / docHeight * docHeightScrollTop ;
        console.log(positionY);
        $fix.css("backgroundPosition","center -" + positionY + "px");

    })
})();