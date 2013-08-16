$(document).ready(function() {
 
	$('#nav-toggle').sidr({
		name: 'sidr',
		source: '#main-nav'
	});


	$('#search-toggle-icon').click( function(){
		$(this).toggleClass('active-button');
		var searchField = $('#search');
		if(searchField.is(':visible')) {
			searchField.hide();
			searchField.removeClass('active');
		} else {
			searchField.show();
			searchField.addClass('active');
		}
	});
});
