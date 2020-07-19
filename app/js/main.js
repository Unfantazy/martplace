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


  // if ($('.newest-products__filter-inner').length) {
  //   var mixer = mixitup('.newest-products__filter-inner');
  // }

  var mixer = mixitup('.newest-products__filter-inner');

});