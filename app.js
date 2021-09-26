function sliderPlugin(activeSlide = 0) {
	const slides =document.querySelectorAll('.slide');

	slides[activeSlide].classList.add('active');

	slides.forEach((element) => {
		element.addEventListener('click', () => {
			clearActiveClasses();
			element.classList.add('active');
		})
	});

	function clearActiveClasses() {
		slides.forEach((slide) => {
			slide.classList.remove('active');
		});
	}
}
sliderPlugin(3);