const nav__toggle = document.querySelector(".nav__toggle");
const nav__header = document.querySelector(".nav__header");
const nav__header_visible = document.querySelector(".nav__header_visible");
const a__nav = document.querySelectorAll(".a__nav");
const a__nav_length = document.querySelectorAll(".a__nav").length;
const logo__nav = document.querySelector(`.logo__nav`);

nav__toggle.addEventListener("click", () => {
	nav__header.classList.toggle("nav__header_visible");
});

logo__nav.addEventListener(`click`, () => {
	nav__header.classList.remove("nav__header_visible");
});

a__nav.forEach(item => {
	item.addEventListener("click", () => {
		nav__header.classList.toggle("nav__header_visible");
	});
});

ScrollReveal({ distance: "100px" });
ScrollReveal().reveal(".inicio__div", { duration: 1600 }, { origin: "top" });
ScrollReveal().reveal(".scroll_sobremo", { duration: 1600 }, { origin: "bottom" });
ScrollReveal().reveal(".scrollportafolio", { duration: 1600 }, { origin: "top" });
ScrollReveal().reveal("#contactame", { duration: 1600 }, { origin: "bottom" });
