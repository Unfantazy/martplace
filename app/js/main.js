$(function () {

  $(".rate-star").rateYo({
    starWidth: "15px",
    readOnly: true,
    normalFill: "#ffc000",
    spacing: "4px"
  });

  $('.weekly-products__slider').slick({
    appendArrows: $('.weekly-products__title'),
    prevArrow: '<button type="button" class="slick-btn slick-prev lnr-chevron-left" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next lnr-chevron-right" alt=""></button>',
  });

  $('.followers__slider-items').slick({
    appendArrows: $('.followers__title'),
    prevArrow: '<button type="button" class="slick-btn slick-prev lnr-chevron-left" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next lnr-chevron-right" alt=""></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  $('.feedback__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  });

  // if ($('.newest-products__filter-inner').length) {
  //   var mixer = mixitup('.newest-products__filter-inner');
  // }

  var mixer = mixitup('.newest-products__filter-inner');

});