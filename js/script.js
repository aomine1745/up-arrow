//inicio de Flecha 
$(document).ready(function(){
	$('.flecha').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0 ) {
			$('.flecha').slideDown(300);
		}else{
			$('.flecha').slideUp(300);
		}
	});	
});
//Fin de Flecha