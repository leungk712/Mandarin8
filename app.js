const welcome = document.querySelector('.welcome');
const header = document.querySelector('header');

const aboutBtn = document.querySelector('#about-btn');
const menuBtn = document.querySelector('#menu-btn');
const reservationBtn = document.querySelector('#reservation-btn');
const contactBtn = document.querySelector('#contact-btn');

const aboutContent = document.querySelector('.about-row');
const menuContent = document.querySelector('.menu-row');
const reservationContent = document.querySelector('.reservation-row');

function welcomeLoad(){
  setTimeout(() => {
    welcome.classList.add('hide');
  }, 3000);
} welcomeLoad();

function headerLoad(){
  setTimeout(() => {
    header.classList.add('header-active');
  }, 3500);
} headerLoad();

function about(){
  aboutBtn.addEventListener('click',() => {
    setTimeout(() => {
      aboutContent.classList.toggle('toggle-content-active');
    },500);
  });
} about();

function menu(){
  menuBtn.addEventListener('click',() => {
    menuContent.classList.toggle('toggle-content-active');
  });
} menu();

function reservation(){
  reservationBtn.addEventListener('click',() => {
    reservationContent.classList.toggle('toggle-content-active');
  });
} reservation();
