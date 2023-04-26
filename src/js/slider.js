const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentSlide, totalSlide) {
      return (
        '<span class="' +
        currentSlide +
        '"></span><span class=""></span><span class="' +
        totalSlide +
        '"></span>'
      );
    },
  },
  navigation: {
    nextEl: '.next-slide',
    prevEl: '.prev-slide',
  },
});

// const swiper = new Swiper('.mySwiper', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   loop: true,
//   keyboard: {
//     enabled: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     renderBullet: function (index, className) {
//       if (index === 0 || index === swiper.slides.length - 1) {
//         return '<span class="' + className + '">' + (index + 1) + '</span>';
//       }
//       return '';
//     },
//   },
//   navigation: {
//     nextEl: '.next-slide',
//     prevEl: '.prev-slide',
//   },
// });
