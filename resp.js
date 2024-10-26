burger = document.querySelector('.burger');
nav = document.querySelector('.nav');
navright = document.querySelector('.nav-right');
navleft = document.querySelector('.nav-left'); 

burger.addEventListener('click', () => {
    navright.classList.toggle('v-class');
    nav.classList.toggle('h-nav');
    navleft.classList.toggle('nav-left-active'); 
});
