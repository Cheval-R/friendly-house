// !CALLBACK MAIN

const callbackTitle = $('#callback__title');
const callbackForm = $('#contacts-form');

const phoneInput = document.querySelector('#phone-input');
const phoneMask = new Inputmask('+7 (999) 999-99-99', { "placeholder": "+7 (***) ***-**-**" });
phoneMask.mask(phoneInput);

const validator = new JustValidate('#contacts-form');

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
				callbackTitle.text('Спасибо! Ваша заявка успешно отправлена!');
				callbackForm.slideUp(500);
				callbackTitle.css('margin', '0');
			},
			error() {
				callbackTitle.text('Извините. Что-то пошло не так, попробуйте позже');
				callbackForm.slideUp(500);
				callbackTitle.css('margin', '0');
			}
		});
	});



	
// ! MODAL MENU

const modalWindow = $('#callback-modal');
const modalForm = $('#contacts-form--modal');
const modalSubmit = $('.help-button--modal');
const modalTitle = $('#callback__title--modal');

modalSubmit.click(function () {
	modalWindow.fadeToggle(500);
})

const close = modalWindow.find('.modal__close');
close.click(function () {
	modalWindow.fadeToggle(500);
});

modalWindow.on('click', function (event) {
	if (event.target === this) {
		modalWindow.fadeToggle(500);
	}
})


const phoneInputModal = document.querySelector('#phone-input--modal');
const phoneMaskModal = new Inputmask('+7 (999) 999-99-99', { "placeholder": "+7 (***) ***-**-**" });
phoneMaskModal.mask(phoneInputModal);

const validatorModal = new JustValidate('#contacts-form--modal');

validatorModal
	.addField('#phone-input--modal', [
		{
			rule: 'required',
			errorMessage: 'Введите номер телефона',
		},
		{
			validator(value) {
				const phone = phoneInputModal.inputmask.unmaskedvalue();
				console.log(phone);
				return !!(Number(phone) && phone.length === 10);
			},
			errorMessage: 'Некорректный номер',
		},
	])
	.addField('#mail-input--modal', [
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
			phone: target.querySelector('#phone-input--modal').value,
			mail: target.querySelector('#mail-input--modal').value,
		};

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			type: 'POST',
			data: formData,
			success(data) {
				modalTitle.text('Спасибо! Ваша заявка успешно отправлена!');
				modalForm.slideUp(500);
				modalTitle.css('margin', '0');
			},
			error() {
				modalTitle.text('Извините. Что-то пошло не так, попробуйте позже');
				modalForm.slideUp(500);
				modalTitle.css('margin', '0');
			}
		});
	});