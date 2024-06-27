// ! SLIDER



// ! SLIDER
$(window).resize(function () {
	if (document.documentElement.clientWidth <= 800) {
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
		let arrowPrev = $('.slick-prev');
		arrowPrev.attr('aria-label', 'Предыдущий слайд');
		let arrowNext = $('.slick-next');
		arrowNext.attr('aria-label', 'Следующий слайд');
	} else if ($('.pets__content').hasClass('slick-initialized')) {
		$('.pets__content').slick('unslick');
	}

});