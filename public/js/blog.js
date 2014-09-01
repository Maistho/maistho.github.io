$(document).ready(function () {
	$('.post-panel').click(function (e) {
		window.location = $(e.currentTarget).attr('data-target');
	});
	$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');

});
