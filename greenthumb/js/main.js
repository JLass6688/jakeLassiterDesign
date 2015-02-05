

$(window).scroll(function() {
		$('.phoneimg').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				$(this).addClass("slideLeft");
			}
		});
	});



