$(window).on('load', function () {
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 50){
			$('.scrolling-navbar').addClass('top-nav-collapse');
		}else{
			$('.scrolling-navbar').removeClass('top-nav-collapse');
		}
	});

	var wow = new WOW({
        //disabled for mobile
        mobile: false
    });

    wow.init();
});

$(function() {
    $(document).on('click', 'a.nav-link', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function opendata(id){
	var data = $('.img'+id).data('desk');	
	var img = 'assets/img/images'+id+'.jpg';
	var judul = $('.img'+id).data('judul');
	$('.modal-body p').html('<img src="'+img+'" class="img-modal">');
	$('.modal-capt p').html(data);
	$('.modal-capt h4').html(judul);
}
