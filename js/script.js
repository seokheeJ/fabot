$(function(){
    //카테고리 메뉴 슬라이드
    $('.nav>ul>li').hover(function(){
        $(this).find('.sub1').stop().slideDown(200);
        // $(this).find('.sub1').show();
    },function(){
        $(this).find('.sub1').stop().slideUp(200);
        // $(this).find('.sub1').hide();
    });
    //고객센터 메뉴 슬라이드
    $('.nav>ul>li').hover(function(){
        $(this).find('.sub2').stop().slideDown(200);
        // $(this).find('.sub2').show();
    },function(){
        $(this).find('.sub2').stop().slideUp(200);
        // $(this).find('.sub2').hide();
    });

})