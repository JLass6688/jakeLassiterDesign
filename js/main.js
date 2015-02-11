/*  ===============NAVIGATION MENU PULL====================== */

$(function() {  
    var pull        = $('#pull');  
        menu        = $('nav ul');  
        menuHeight  = menu.height();  
  
    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
}); 

$(window).resize(function(){  
    var w = $(window).width();  
    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style');  
    }  
});   


/*  ===================SCROLLING FEATURE=========================== */

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1200, 'swing');
    });
});


/*======================LOADING ANIMATIONS==============================*/

$(window).scroll(function() {
        $('.einstein-pic').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+350) {
                $(this).addClass("slideUp");
            } else {
                $(this).removeClass("slideUp");
            }
        });
    });





/*==========================HOME MENU TITLE VISIBILITY===================*/

$(window).scroll(function() {
    $('.menu-home').each(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop >= 800) {
            $(this).addClass("fadeInDown");
        } 
    });
});
