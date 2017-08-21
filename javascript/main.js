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
    $pic.prepend($picLi.last().clone());
    $pic.append($picLi.first().clone());
    console.log($picLi.length);
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
           }else {
               x--;
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
            change(x);
        },3000);
        return auto;
    }
    /*变化函数*/
    function change(i) {
        var moveIndex = i;
        i%= $picLi.length;
        if(i<0)i = $picLi.length - 1;
        index = i;
        console.log(index);
        $pic.stop().animate({
            "marginLeft" : -$picLiWidth*(moveIndex+1)
        },800,function () {
            if (index === $picLi.length - 1||index === 0){
                $(this).css("marginLeft",-$picLiWidth * (index + 1 ));
            }
        });
        $tabLi.eq(index).addClass("on").siblings().removeClass("on");
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
                backgroundColor:"rgba(0,0,0,.5)"
            });
            $navbarUla.css({
                color : "#d5d5d5"
            })
        }else {
            $navbar.css({
                backgroundColor:"rgba(255,255,255,.8)"
            });
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