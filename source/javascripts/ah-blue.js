$(document).ready(function() {
 
	$('#nav-toggle').sidr({
		name: 'sidr',
		source: '#main-nav'
	});


	$('#search-toggle').click( function(){
		
		$(this).toggleClass('active-button');
		
		$('.search-container').toggleClass('active');
		$('.search-container').toggle();


		// if($('.search-container').is(':visible')) {
		// 	$('.search-container').hide();
		// 	$('.search-container').removeClass('active');
		// } else {
		// 	$('.search-container').show();
		// 	$('.search-container').addClass('active');
		// }
	});
});
