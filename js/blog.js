$(document).ready(function () {
	$('.post-panel').click(function (e) {
		window.location = $(e.currentTarget).attr('data-target');
	});

});
