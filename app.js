const welcome = document.querySelector('.welcome');
const header = document.querySelector('header');

const aboutBtn = document.querySelector('nav #about-btn');
const menuBtn = document.querySelector('nav #menu-btn');
const reservationBtn = document.querySelector('nav #reservation-btn');
const contactBtn = document.querySelector('nav #contact-btn');

let content = document.querySelectorAll('.content');
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

function about() {
  aboutBtn.addEventListener('click',() => {
    setTimeout(() => {
      removeShow();
      aboutContent.classList.toggle('show');
    },500);
  });
} about();

function menu(){
  menuBtn.addEventListener('click',() => {
    removeShow();
    menuContent.classList.toggle('show');
  });
} menu();

function reservation(){
  reservationBtn.addEventListener('click',() => {
    removeShow();
    reservationContent.classList.toggle('show');
  });
} reservation();

function contact(){
  contactBtn.addEventListener('click',() => {
    removeShow();
    contactContent.classList.toggle('show');
  });
} contact();

function removeShow(){
  for(let i = 0; i < content.length; i++) {
    content[i].classList.remove('show');
  }
}
