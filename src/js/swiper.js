import Swiper, { Pagination } from 'swiper';;
import "swiper/swiper-bundle.min.css";


const swiper = new Swiper('.swiper', {
  modules: [Pagination],

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    },
  }
});