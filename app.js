const welcome = document.querySelector('.welcome');
const header = document.querySelector('header');

const aboutBtn = document.querySelector('nav #about-btn');
const menuBtn = document.querySelector('nav #menu-btn');
const reservationBtn = document.querySelector('nav #reservation-btn');
const contactBtn = document.querySelector('nav #contact-btn');

const aboutContent = document.querySelector('#about-row');
const menuContent = document.querySelector('#menu-row');
const reservationContent = document.querySelector('#reservation-row');
const contactContent = document.querySelector('#contact-row');

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
      aboutContent.classList.toggle('show');
      menuContent.classList.remove('show');
      reservationContent.classList.remove('show');
      contactContent.classList.remove('show');
    },500);
  });
} about();

function menu(){
  menuBtn.addEventListener('click',() => {
    menuContent.classList.toggle('show');
    aboutContent.classList.remove('show');
    reservationContent.classList.remove('show');
    contactContent.classList.remove('show');
  });
} menu();

function reservation(){
  reservationBtn.addEventListener('click',() => {
    reservationContent.classList.toggle('show');
    aboutContent.classList.remove('show');
    menuContent.classList.remove('show');
    contactContent.classList.remove('show');
  });
} reservation();

function contact(){
  contactBtn.addEventListener('click',() => {
    contactContent.classList.toggle('show');
    aboutContent.classList.remove('show');
    menuContent.classList.remove('show');
    reservationContent.classList.remove('show');
  });
} contact();
