$(document).ready(function () {
  $(".new-scroll").slick({
    infinite: false,
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,

    dots: false,

    prevArrow:
      '<button type="button" class="slick-prev"><img src="./img/arrow-slider.svg" alt="Назад"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./img/arrow-slider-sec.svg" alt="Вперед"></button>',
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
    ],
  });
});
