let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
};
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});
formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

// *  ! slider section ! *

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");
const contents = document.querySelectorAll(".content");
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});  


// <!-- *! book section end -->


/* *? review slider ! * */

 var swiper = new Swiper(".review-slider", {
spaceBetween: 15,
loop: true,
autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},

breakpoints: {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
},

});