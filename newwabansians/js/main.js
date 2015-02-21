
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

/* ================Story Feed Load===============================*/

$("#hide-me").hide();

$(".button").click (function( event ){
    event.preventDefault();
    $("#hide-me").show(2000, "swing");
});