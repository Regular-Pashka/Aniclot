document.querySelector('.footer__bottom-btn').onclick = () => {
	// переместим в начало страницы
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}