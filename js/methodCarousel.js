$(".box__carousel").slick({
  dots: false,
  prevArrow: '<button type="button" class="slick-pre"><</button>',
  nextArrow: '<button type="button" class="slick-next">></button>',
  infinite: true,
  cssEase: "ease",
  autoplay: false,
  centerPadding: "20px",
  centerMode: true,
  slidesToShow: 3,
  zIndex: 1,
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      breakpoint: 1023,
      settings: {
        arrows: false,
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        centerPadding: "20px",
        slidesToShow: 1,
      },
    },
  ],
});
