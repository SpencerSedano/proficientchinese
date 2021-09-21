const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".menu-links");
	const navLinks = document.querySelectorAll(".menu-links li");
	// toggle nav
	burger.addEventListener("click", () => {
		// toggle nav
		nav.classList.toggle("nav-active");

		// animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.8
				}s`;
			}
		});
		//burger animation
		burger.classList.toggle("toggle");
	});
};

navSlide();

// let flipoff = document.querySelectorAll('.stories');

// flipoff.onmouseover=function(){
//     flipoff.style.display='none';
// };

// let flipoff = document.querySelectorAll('.stories');
// let i;
// for (i = 0; i < flipoff.length; i++) {
//     flipoff[i].addEventListener('mouseover', changeColor);
//     flipoff[i].addEventListener('mouseout', noColor);
// };

// function changeColor() {
//     this.style.backgroundColor = "#eb3e3f";
// };
// function noColor() {
//     this.style.backgroundColor = "currentcolor";
// };

const flipoff = document.querySelectorAll(".stories");

flipoff.forEach((story) => {
	story.addEventListener("mouseover", function () {
		this.classList.add("awesome");
	});
});

flipoff.forEach((story) => {
	story.addEventListener("mouseout", function () {
		this.classList.remove("awesome");
	});
});
