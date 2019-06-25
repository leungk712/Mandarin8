const aboutBtn = document.querySelector('#about-btn');
const menuBtn = document.querySelector('#menu-btn');
const reservationBtn = document.querySelector('#reservation-btn');
const contactBtn = document.querySelector('#contact-btn');
const header = document.querySelector('header');
const navLink = document.querySelectorAll('.nav-link');
const aboutContent = document.querySelector('.about-row');
const menuContent = document.querySelector('.menu-row');
const welcome = document.querySelector('.welcome');

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
    setTimeout(function(){
      aboutContent.classList.toggle('about-active');
    },500);
  });
} about();

function menu(){
  menuBtn.addEventListener('click',() => {
    menuContent.classList.toggle('menu-active');
  });
} menu();

