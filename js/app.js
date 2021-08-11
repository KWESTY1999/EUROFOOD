import data from './data.js'

const nav = document.getElementById('nav')

const navSlide = () => {
  const navBtn = document.querySelector(".nav-btn");
  const navLinks = document.querySelector(".nav-links");

  navBtn.addEventListener("click", () => {
    // Toggle Nav
    navLinks.classList.toggle("nav-active");
    //btn Animation
    navBtn.classList.toggle("toggle");
  });
}; 
navSlide();

function smoothScroll(target,duration){
  const targeted = document.querySelector(target);
  const targetedPosition = targeted.getBoundingClientRect().height;
  let startPosition = window.pageYOffset;
  let distance = targetedPosition - startPosition;
  let startTime = null;

  function animationScroll(currentTime){
    if(startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animationScroll);
  }
  function ease(t,b,c,d){
    t /= d / 2;
    if(t < 1) return c / 2 * t * t +b;
    t--;
    return -c /2 * (t * (t - 2) -1) +b;
  }

  requestAnimationFrame(animationScroll);
}


about.addEventListener('click',()=>{
  smoothScroll(".about", 1000);
})

contact.addEventListener('click',()=>{
  smoothScroll(".contact", 1000);
})

Kontakt.addEventListener("click", () => {
  smoothScroll(".contact", 1000);
});


const PL = document.getElementById('PL')
const ENG = document.getElementById("ENG");
const GER = document.getElementById("GER");
const RUS = document.getElementById("RUS");
const text = document.getElementById('Text')
const secondTitle = document.getElementById('secondTitle')
const thirdTitle = document.getElementById('thirdTitle')
const firstTitle = document.getElementById('firstTitle')

PL.addEventListener('click',()=>{
  text.innerHTML = data[0].text;
  secondTitle.innerHTML = 'Wędliny, Mięso, art. Spożywcze'
  thirdTitle.innerHTML = 'Skontaktuj Się Z Nami'
  firstTitle.innerHTML = "O Nas";
  Kontakt.innerHTML = 'Kontact';
})
RUS.addEventListener('click',()=>{
  text.innerHTML = data[1].text;
  secondTitle.innerHTML = "Колбасы, Мясо, Арт. Еда";
  thirdTitle.innerHTML = "свяжитесь с нами";
  firstTitle.innerHTML = "О нас";
  Kontakt.innerHTML = 'контакт';
})
ENG.addEventListener('click',()=>{
  text.innerHTML = data[2].text;
  secondTitle.innerHTML = "Sausages, Meat, Art. Food";
  thirdTitle.innerHTML = "Contact us";
  firstTitle.innerHTML = "About us";
  Kontakt.innerHTML = 'Contact';
})
GER.addEventListener('click',()=>{
  text.innerHTML = data[3].text;
  secondTitle.innerHTML = 'Wurst, Fleisch, Art.-Nr. Essen'
  thirdTitle.innerHTML = "kontaktiere uns";
  firstTitle.innerHTML = "Über uns";
  Kontakt.innerHTML = "Kontakt";
})

const prev = document.getElementById('prev')
const tabel = [
  document.querySelector('.img-first'),
  document.querySelector('.img-second'),
  document.querySelector('.img-third'),
  document.querySelector('.img-fourth'),
  document.querySelector('.img-fifth'),
]


let x = 1;
function test(){
    if(x<5){
    tabel[x].style.zIndex = "7";
    x = x + 1
    } else {
       x = 1
       tabel[0].style.zIndex = '5'
       tabel[1].style.zIndex = '4'
       tabel[2].style.zIndex = '3'
       tabel[3].style.zIndex = '2'
       tabel[4].style.zIndex = '1'
    }
}


prev.addEventListener('click',()=>{
  test()
})
