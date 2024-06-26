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











