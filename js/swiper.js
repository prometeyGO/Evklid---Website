const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Слайд {{index}}',
  },
});
