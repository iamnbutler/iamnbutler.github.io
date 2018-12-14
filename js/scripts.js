$(document).ready(function(){ 

	$('.link').click(function(){
		$(this).children('ul').addClass('active');
		return false;
	});

	$('.cmd-see-less').click(function(){
		$('ul').removeClass('active');
		return false;
	});

});