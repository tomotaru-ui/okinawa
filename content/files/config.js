$(function(){
	$('#slide').bxSlider({
		prev_image: 'content/images/template/btn_arrow_left.png',
		next_image: 'content/images/template/btn_arrow_right.png',
		wrapper_class: 'slides1_wrap',
		margin: 70,
		auto: true,
		auto_controls: false
	});
});
$(window).load(function() {
	$('#panel03').orbit({
		'animationSpeed': 1000,
		'advanceSpeed': 5000,
		'bullets': true,
		'timer' : true,
		'animation' : 'horizontal-slide'

	});
});

$(window).load(function() {
	$('#panel01').orbit({
		'animationSpeed': 1000,
		'advanceSpeed': 10000,
		'bullets': true,
		'timer' : true,
		'animation' : 'vertical-slide'

	});
});
$(window).load(function() {
	$('#panel02').orbit({
		'animationSpeed': 1000,
		'advanceSpeed': 13000,
		'bullets': true,
		'timer' : true,
		'animation' : 'vertical-slide'

	});
});