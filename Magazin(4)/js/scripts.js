"use strict"

let aside = document.querySelector(".aside");
let burger = document.querySelector('.catalog__icon');

burger.addEventListener("click", function () {
	aside.classList.toggle("active");
})