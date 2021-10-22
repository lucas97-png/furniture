let closer = document.querySelector('#closer');

closer.onclick = () => {
    closer.style.display = "none";
    navbar.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('.menu-btn').onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('.cart-btn').onclick = () => {
    closer.style.display = "block";
    cart.classList.toggle('active');
}

let login = document.querySelector('.login-form');

document.querySelector('.login-btn').onclick = () => {
    closer.style.display = "block";
    login.classList.toggle('active');
}

let search = document.querySelector('.search-form');

document.querySelector('.search-btn').onclick = () => {
    search.classList.toggle('active');
}

window.onscroll = () => {
    search.classList.remove('active');
}

let slides = document.querySelectorAll('.slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}