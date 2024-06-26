// ! SLIDER
if (document.documentElement.clientWidth < 800) {
	$('.pets__content').slick({
		centerMode: true,
		variableWidth: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
	});
	
	// Добавляем атрибут aria-label
	var arrowPrev = $('.slick-prev');
	arrowPrev.attr('aria-label', 'Предыдущий слайд');
	var arrowNext = $('.slick-next');
	arrowNext.attr('aria-label', 'Следующий слайд');
}