const slides =document.querySelectorAll('.slide');

// for (const slide of slides) {
// 	slide.addEventListener('click', () => {
// 		clearActiveClasses();
// 		slide.classList.add('active');
// 	})
// }
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