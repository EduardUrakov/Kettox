"use strict";
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const img1 = document.querySelector('.fast-card-mobail1');
const img2 = document.querySelector('.fast-card-mobail2');
const img3 = document.querySelector('.fast-card-mobail3');

leftArrow.addEventListener('click', () => {
    if (img1.classList.contains('active')) {
        img1.classList.remove('active');
        img3.classList.add('active');
    } else if (img2.classList.contains('active')) {
        img2.classList.remove('active');
        img1.classList.add('active');
    } else if (img3.classList.contains('active')) {
        img3.classList.remove('active');
        img2.classList.add('active');
    }
});

rightArrow.addEventListener('click', () => {
    if (img1.classList.contains('active')) {
        img1.classList.remove('active');
        img2.classList.add('active');
    } else if (img2.classList.contains('active')) {
        img2.classList.remove('active');
        img3.classList.add('active');
    } else if (img3.classList.contains('active')) {
        img3.classList.remove('active');
        img1.classList.add('active');
    }
});

