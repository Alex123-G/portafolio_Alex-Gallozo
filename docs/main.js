const nav__toggle = document.querySelector(".nav__toggle");
const nav__header = document.querySelector(".nav__header");
const nav__header_visible = document.querySelector(".nav__header_visible");
const a__nav = document.querySelectorAll(".a__nav");
const logo__nav = document.querySelector(`.logo__nav`);

document.addEventListener("DOMContentLoaded", () => {
	// Cuando hagamos click al toggle desaparesca
	nav__toggle.addEventListener("click", () => {
		nav__header.classList.toggle("nav__header_visible");
	});

	// Cuando seleccionemos el logo de inicio se cierre el toggle
	logo__nav.addEventListener(`click`, () => {
		nav__header.classList.remove("nav__header_visible");
	});

	// Recorriendo los a_nav para cuando agamos click a alguno se oculte.
	a__nav.forEach(item => {
		item.addEventListener("click", () => {
			nav__header.classList.toggle("nav__header_visible");
		});
	});

	document.addEventListener("click", e => {
		if (e.target.matches(".portafolio-container-card *")) {
			e.target
				.closest(`.portafolio-container-card`)
				.querySelector(`.modal_visible`)
				.classList.toggle("modal_invisible");
		}
	});
});

// Efecto Scrooll
ScrollReveal({ distance: "100px" });
ScrollReveal().reveal(".inicio__div", { duration: 1500 }, { origin: "top" });
ScrollReveal().reveal(".scroll_sobremo", { duration: 1500 }, { origin: "bottom" });
ScrollReveal().reveal(".scrollportafolio", { duration: 1500 }, { origin: "top" });
ScrollReveal().reveal("#contactame", { duration: 1500 }, { origin: "bottom" });
