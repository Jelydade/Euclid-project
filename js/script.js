//burger*

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__item-link');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});

//tabs*

let tabsBtn = document.querySelectorAll('.working__list-btn');
let tabsSubtitle = document.querySelectorAll('.working__subtitle');
let tabsDescr = document.querySelectorAll('.working__descr');
let tabsBG = document.querySelectorAll('.working__bg');

tabsBtn.forEach(function(elem){
  elem.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('working__list-btn--active');});
    e.currentTarget.classList.add('working__list-btn--active');

    tabsSubtitle.forEach(function(elem) {
       elem.classList.remove('working__subtitle--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('working__subtitle--active');

    tabsDescr.forEach(function(elem) {
      elem.classList.remove('working__descr--active');
    });
    document.querySelector(`[data-descr="${path}"]`).classList.add('working__descr--active');

    tabsBG.forEach(function(elem) {
      elem.classList.remove('working__bg--active');
    });
    document.querySelector(`[data-img="${path}"]`).classList.add('working__bg--active');
  });
});

//slider

const swiper = new Swiper('.swiper', {
  loop: true,
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Слайд номер {{index}}',
  }
});

// search

let closedBtn = document.querySelector('.closed_search-btn');
let searchInput = document.querySelector('.search-box');
let searchBtn = document.querySelector('.header__search-icon');

closedBtn.onclick = () => {
  searchInput.classList.remove('search-box--active');
  searchBtn.classList.remove('header__search-icon--open');
};

searchBtn.onclick = () => {
  searchInput.classList.add('search-box--active');
};

// accordion

let accordionItem1 = document.querySelector('.questions__list-item--1');
let accordionItem2 = document.querySelector('.questions__list-item--2');
let accordionItem3 = document.querySelector('.questions__list-item--3');
let accordionItem4 = document.querySelector('.questions__list-item--4');
let accordionItem5 = document.querySelector('.questions__list-item--5');

let accordionAnswer1 = document.querySelector('.questions__answer-wrap--1');
let accordionAnswer2 = document.querySelector('.questions__answer-wrap--2');
let accordionAnswer3 = document.querySelector('.questions__answer-wrap--3');
let accordionAnswer4 = document.querySelector('.questions__answer-wrap--4');
let accordionAnswer5 = document.querySelector('.questions__answer-wrap--5');

let accordionBtn1 = document.querySelector('.questions__btn--1');
let accordionBtn2 = document.querySelector('.questions__btn--2');
let accordionBtn3 = document.querySelector('.questions__btn--3');
let accordionBtn4 = document.querySelector('.questions__btn--4');
let accordionBtn5 = document.querySelector('.questions__btn--5');

accordionItem1.onclick = () => {
  accordionAnswer1.classList.toggle('questions__answer--active');
  accordionBtn1.classList.toggle('questions__btn--open');
};

accordionItem2.onclick = () => {
  accordionAnswer2.classList.toggle('questions__answer--active');
  accordionBtn2.classList.toggle('questions__btn--open');
};

accordionItem3.onclick = () => {
  accordionAnswer3.classList.toggle('questions__answer--active');
  accordionBtn3.classList.toggle('questions__btn--open');
};

accordionItem4.onclick = () => {
  accordionAnswer4.classList.toggle('questions__answer--active');
  accordionBtn4.classList.toggle('questions__btn--open');
};

accordionItem5.onclick = () => {
  accordionAnswer5.classList.toggle('questions__answer--active');
  accordionBtn5.classList.toggle('questions__btn--open');
};
