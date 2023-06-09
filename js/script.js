var menu = document.querySelector('.menu');
var menu_icon = document.querySelector('.menu-icon');
var menu_state = false;

//___preloader animation

var tl = gsap.timeline();

tl.to('.loader', { opacity: 1, duration: 2 })

window.addEventListener('load', function() {
   var loadingScreen = document.querySelector('.loading-screen');

   setTimeout(function() {
      document.body.removeChild(loadingScreen);
   }, 1000);
})


menu_icon.onclick = function() {
   if (menu_state == false) {
      menu.style.top = '6vh';
      menu_state = true;
   }

   else {
      menu.style.top = '-100%';
      menu_state = false;
   }
}



var header = document.querySelector('.header'),
   navigation = document.querySelector('.nav-wrapper');

window.addEventListener('scroll', () => {
   if (pageYOffset > 0) {
      navigation.style.position = 'fixed';
      header.style.paddingTop = '10vh';
   }
   else if (pageYOffset < 0) {
      navigation.style.position = 'static';
      header.style.paddingTop = '0';
   }
})