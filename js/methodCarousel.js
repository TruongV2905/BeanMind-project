$(".box__carousel").slick({
  dots: false,
  // prevArrow: '<button type="button" class="slick-pre"><</button>',
  // nextArrow: '<button type="button" class="slick-next">></button>',
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  cssEase: "ease",
  autoplay: false,
  centerPadding: "0px",
  centerMode: true,
  slidesToShow: 3,
  zIndex: 1,
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
