function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

// Burger
const bodyElement = document.querySelector("body");
const menuBurger = document.querySelector(".nav-burger");
const headerMenu = document.querySelector(".nav-main");
menuBurger.addEventListener("click", function (event) {
   menuBurger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   bodyElement.classList.toggle("lock");
});

// SLider-swiper 
new Swiper('.services-slider', {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
   },
   autohigh: true,
   slidesPerView: 1,
   slideToClickedSlide: true,
   centeredSlides: true,
   loop: true,
   speed: 400,
})
