const menu = document.querySelector(".menu");
const button = document.querySelector(".button");
const hamburger = document.querySelector(".hamburger");
 hamburger.addEventListener("click", function(){
    menu.classList.toggle("active");
    button.classList.toggle("active");
 })