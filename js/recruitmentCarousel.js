$(".benefit__carousel").slick({
  dots: false,
  infinite: true,
  prevArrow: false,
  nextArrow: false,
  speed: 500,
  cssEase: "ease",
  draggable: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  verticalSwiping: true,
  vertical: true,
  zIndex: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
