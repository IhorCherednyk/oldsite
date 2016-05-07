$(document).ready(function(){

	$(".slider-post").owlCarousel({
		loop:true,
		items:1,
		nav:true,
		navText:false,
		navSpeed:1000,
		dotsSpeed:1000
	});
	$(".slider-post .owl-dot").each(function(index){
		$(this).text(index+1)
	});
});