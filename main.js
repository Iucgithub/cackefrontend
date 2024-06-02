let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

let content = document.getElementsByClassName('content');
console.log(content);

const mode = document.querySelector("#btn");
let body = document.querySelector("body");
let curtmode ="light";

mode.addEventListener("click",() =>
{
if (curtmode === "light"){
    //document.mode.style.backgroundColor =white;
    curtmode="dark";
    body.classList.add("dark");
    body.classList.remove("light");

}
else{
    curtmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
}

});