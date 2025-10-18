const swiper = new Swiper(".swiper", {
  speed: 500,
  spaceBetween: 47,
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  slidesOffsetAfter: 45,
  slidesOffsetBefore: 45,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    720: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});
