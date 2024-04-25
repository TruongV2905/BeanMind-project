$(".lessons__wrap").slick({
  dots: false,
  prevArrow: '<button type="button" class="slick-pre"><i class="fa fa-arrow-left"></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></button>',
  infinite: true,
  speed: 500,
  cssEase: "ease",
  autoplay: false,
  centerPadding: "0px",
  centerMode: false,
  slidesToScroll: 1,
  slidesToShow: 4,
  zIndex: 1,
  // adaptiveHeight: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "0px",
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
        infinite: true,
        dots: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
