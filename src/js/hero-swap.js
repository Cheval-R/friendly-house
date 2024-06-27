const heroImg = $('.hero__content');
const petList = $('.hero__pet-list');
const nameTitle = $('.big-orange-text');
const petButton = $('.hero__pet-button');
const root = document.querySelector(":root");

console.log(petList);

function checkImg(event) {
	if (heroImg.hasClass('hero__content--sarah')) {
		// $('.hero__pet-button--sarah').parent().css('display', 'block');
		// $(event.target).parent().css('display', 'none');
		if (document.documentElement.clientWidth < 600) {
			$('.hero__pet-button--sarah').parent().fadeToggle(300);
			$(event.target).parent().fadeToggle(300);
		} else {
			$('.hero__pet-button--sarah').parent().slideDown(300);
			$(event.target).parent().slideUp(300);
		}
	}
	else if (heroImg.hasClass('hero__content--boris')) {
		// $('.hero__pet-button--boris').parent().css('display', 'block');
		// $(event.target).parent().css('display', 'none');
		if (document.documentElement.clientWidth < 600) {
			$('.hero__pet-button--boris').parent().fadeToggle(300);
			$(event.target).parent().fadeToggle(300);
		} else {
			$('.hero__pet-button--boris').parent().slideDown(300);
			$(event.target).parent().slideUp(300);
		}
	}
	else if (heroImg.hasClass('hero__content--piter')) {
		// $('.hero__pet-button--piter').parent().css('display', 'block');
		// $(event.target).parent().css('display', 'none');
		if (document.documentElement.clientWidth < 600) {
			$('.hero__pet-button--piter').parent().fadeToggle(300);
			$(event.target).parent().fadeToggle(300);
		} else {
			$('.hero__pet-button--piter').parent().slideDown(300);
			$(event.target).parent().slideUp(300);
		}
	}
	else if (heroImg.hasClass('hero__content--lui')) {
		// $('.hero__pet-button--lui').parent().css('display', 'block');
		// $(event.target).parent().css('display', 'none');
		if (document.documentElement.clientWidth < 600) {
			$('.hero__pet-button--lui').parent().fadeToggle(300);
			$(event.target).parent().fadeToggle(300);
		} else {
			$('.hero__pet-button--lui').parent().slideDown(300);
			$(event.target).parent().slideUp(300);
		}
	}
	else if (heroImg.hasClass('hero__content--kenni')) {
		// $('.hero__pet-button--kenni').parent().css('display', 'block');
		// $(event.target).parent().css('display', 'none');
		if (document.documentElement.clientWidth < 600) {
			$('.hero__pet-button--kenni').parent().fadeToggle(300);
			$(event.target).parent().fadeToggle(300);
		} else {
			$('.hero__pet-button--kenni').parent().slideDown(300);
			$(event.target).parent().slideUp(300);
		}
	}
}

petList.on('click', petButton, function (event) {
	// console.log(event.target);
	if ($(event.target).hasClass('hero__pet-button--boris')) {
		checkImg(event);
		console.log(event.target);
		root.style.setProperty("--bg-hero-img", 'url("./../img/hero/boris-main.png")');

		setTimeout(() => {
			heroImg.attr('class', 'hero__content hero__content--boris');
			nameTitle.text('Борис ждёт');
			$('.hero__pet-button--lui').parent().css('order', '0');
			$('.hero__pet-button--piter').parent().css('order', '1');
			$('.hero__pet-button--kenni').parent().css('order', '2');
			$('.hero__pet-button--sarah').parent().css('order', '3');
			$('.hero__pet-button--boris').parent().css('order', '4');
		}, document.documentElement.clientWidth < 600 ? 0 : 300);
	}
	else if ($(event.target).hasClass('hero__pet-button--piter')) {
		checkImg(event);
		root.style.setProperty("--bg-hero-img", 'url("./../img/hero/piter-main.png")');
		setTimeout(() => {
			heroImg.attr('class', 'hero__content hero__content--piter');
			nameTitle.text('Питер ждёт');
			$('.hero__pet-button--kenni').parent().css('order', '0');
			$('.hero__pet-button--sarah').parent().css('order', '1');
			$('.hero__pet-button--boris').parent().css('order', '2');
			$('.hero__pet-button--lui').parent().css('order', '3');
			$('.hero__pet-button--piter').parent().css('order', '4');
		}, document.documentElement.clientWidth < 600 ? 0 : 300);
	}
	else if ($(event.target).hasClass('hero__pet-button--lui')) {
		checkImg(event);
		root.style.setProperty("--bg-hero-img", 'url("./../img/hero/lui-main.png")');
		setTimeout(() => {
			nameTitle.text('Луи ждёт');
			heroImg.attr('class', 'hero__content hero__content--lui');
			$('.hero__pet-button--piter').parent().css('order', '0');
			$('.hero__pet-button--kenni').parent().css('order', '1');
			$('.hero__pet-button--sarah').parent().css('order', '2');
			$('.hero__pet-button--boris').parent().css('order', '3');
			$('.hero__pet-button--lui').parent().css('order', '4');
		}, document.documentElement.clientWidth < 600 ? 0 : 300);
	}
	else if ($(event.target).hasClass('hero__pet-button--kenni')) {
		checkImg(event);
		root.style.setProperty("--bg-hero-img", 'url("./../img/hero/kenni-main.png")');
		setTimeout(() => {
			nameTitle.text('Кенни ждёт');
			heroImg.attr('class', 'hero__content hero__content--kenni');
			$('.hero__pet-button--sarah').parent().css('order', '0');
			$('.hero__pet-button--boris').parent().css('order', '1');
			$('.hero__pet-button--lui').parent().css('order', '2');
			$('.hero__pet-button--piter').parent().css('order', '3');
			$('.hero__pet-button--kenni').parent().css('order', '4');
		}, document.documentElement.clientWidth < 600 ? 0 : 300);
	}
	else if ($(event.target).hasClass('hero__pet-button--sarah')) {
		checkImg(event);
		root.style.setProperty("--bg-hero-img", 'url("./../img/hero/sarah-main.png")');
		setTimeout(() => {
			nameTitle.text('Сара ждёт');
			heroImg.attr('class', 'hero__content hero__content--sarah');
			$('.hero__pet-button--boris').parent().css('order', '0');
			$('.hero__pet-button--lui').parent().css('order', '1');
			$('.hero__pet-button--piter').parent().css('order', '2');
			$('.hero__pet-button--kenni').parent().css('order', '3');
			$('.hero__pet-button--sarah').parent().css('order', '4');
		}, document.documentElement.clientWidth < 600 ? 0 : 300);
	}
})	