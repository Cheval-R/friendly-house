// ! BURGER MENU

const burgerBtn = $('.burger-btn');
const burgerMenu = $('.burger');

burgerBtn.click(function () {
	if (burgerBtn.hasClass('burger-btn--open')) {
		burgerBtn.html(`
			<svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<rect width="29.1681" height="1.94454" rx="0.972271" transform="matrix(0.707106 -0.707107 0.707106 0.707107 0 20.625)"/>
				<rect width="29.1681" height="1.94454" rx="0.972271" transform="matrix(0.707106 0.707107 -0.707106 0.707107 1.375 0)"/>
			</svg>
		`);
		burgerBtn.toggleClass('burger-btn--open');
		burgerMenu.slideDown(500);
	}
	else {
		burgerBtn.html(`
			<svg width="40.000000" height="21.000000" viewBox="0 0 40 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<rect id="Rectangle 134" rx="1.000000" width="40.000000" height="3.000000" />
				<rect id="Rectangle 135" y="9.000000" rx="1.000000" width="40.000000" height="3.000000" />
				<rect id="Rectangle 136" y="18.000000" rx="1.000000" width="29.000000" height="3.000000" />
			</svg>
		`);
		burgerBtn.toggleClass('burger-btn--open');
		burgerMenu.slideUp(500);
	}
});

burgerMenu.on('click', function (event) {
	console.log(event);
	if ((event.target.className === "burger__link") && !burgerBtn.hasClass('burger-btn--open')) {
		burgerBtn.html(`
			<svg width="40.000000" height="21.000000" viewBox="0 0 40 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<rect id="Rectangle 134" rx="1.000000" width="40.000000" height="3.000000" />
				<rect id="Rectangle 135" y="9.000000" rx="1.000000" width="40.000000" height="3.000000" />
				<rect id="Rectangle 136" y="18.000000" rx="1.000000" width="29.000000" height="3.000000" />
			</svg>
		`);
		burgerBtn.toggleClass('burger-btn--open');
		burgerMenu.slideUp(500);
	}
});





// ! MODAL MENU

const modal = $('#callback-modal');
const recallBtn = $('.help-button--modal');
const form = $('.contacts-form');
const title = $('.callback__title--modal');

recallBtn.click(function () {
	modal.fadeToggle(500);
})

const close = modal.find('.modal__close');
close.click(function () {
	modal.fadeToggle(500);
});

modal.on('click', function (event) {
	if (event.target === this) {
		modal.fadeToggle(500);
	}
})


const phoneInput = document.querySelector('#phone-input');
const phoneMask = new Inputmask('+7 (999) 999-99-99', { "placeholder": "+7 (***) ***-**-**" });
phoneMask.mask(phoneInput);

const validator = new JustValidate('.contacts-form');

validator
	.addField('#phone-input', [
		{
			rule: 'required',
			errorMessage: 'Введите номер телефона',
		},
		{
			validator(value) {
				const phone = phoneInput.inputmask.unmaskedvalue();
				console.log(phone);
				return !!(Number(phone) && phone.length === 10);
			},
			errorMessage: 'Некорректный номер',
		},
	])
	.addField('#mail-input', [
		{
			rule: 'required',
			errorMessage: 'Введите email',
		},
		{
			rule: 'email',
			errorMessage: 'Некорректный email',
		}
	]
	)

	.onSuccess(event => {
		event.preventDefault(); // Prevent the default form submission

		const target = event.target;
		const formData = {
			phone: target.querySelector('#phone-input').value,
			mail: target.querySelector('#mail-input').value,
		};

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			type: 'POST',
			data: formData,
			success(data) {
				title.text('Спасибо! Ваша заявка успешно отправлена!');
				form.slideUp(500);
				title.css('margin', '0');
			},
			error() {
				title.text('Извините. Что-то пошло не так, попробуйте позже');
				form.slideUp(500);
				title.css('margin', '0');
			}
		});
	});


// ! SLIDER
// if (document.documentElement.clientWidth < 600) {
// 	// $('.slider').slick({
// 	// 	// добавьте необходимые опции слайдера
// 	// 	slidesToShow: 1,
// 	// 	slidesToScroll: 1,
// 	// 	autoplay: true,
// 	// 	autoplaySpeed: 2000,
// 	// });
// 	$('.slider').slick({
// 		dots: false,
// 		infinite: true,
// 		speed: 300,
// 		slidesToShow: 1,
// 		// adaptiveHeight: true,	
// 		variableWidth: true
// 	});
// }
