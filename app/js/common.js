// owl slider
$('.slider-wrapper').owlCarousel({
	autoplay:false,
	loop:true,
	nav:true,
	dots: true,
	items: 1,
	navContainerClass: 'slider-nav',
	navClass: ['slick-prev','slick-next'],
	navText: ['<i class="icon-left"></i>','<i class="icon-right"></i>']
});

// easy tabs
$('#tab-container').easytabs({
	defaultTab: 'li:first-child'
});

// form "write us"
$('.btn-writeus').magnificPopup();
// Pop up shoping cart
$('.btn-buy').magnificPopup();

// Скрытие меню при 768px
$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(768);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 768 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready