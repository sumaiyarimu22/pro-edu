// hamburger

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

if (hamburger) {
    hamburger.addEventListener('click', function(){
        navList.classList.toggle('open')
    })
}





$(document).ready(function () {

    $('.slides').slick({
        slidesToShow: 2,
        speed: 800,
        dots: true,
        arrows: true,
        slidesToScroll: 2
    });
});