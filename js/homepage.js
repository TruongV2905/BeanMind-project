$(".sliderShow-carousel").slick({
  dots: true,
  infinite: true,
  speed: 100,
  fade: true,
  cssEase: "ease",
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  draggable: true,
  customPaging: function (slider, i) {
    return '<div class="dot"></div>';
  },
});
$(".thinkAbout__category").slick({
  dots: false,
  prevArrow: '<button type="button" class="slick-pre"><ion-icon name="arrow-back-outline"></ion-icon></button>',
  nextArrow: '<button type="button" class="slick-next"><ion-icon name="arrow-forward-outline"></ion-icon></button>',
  infinite: true,
  speed: 500,
  cssEase: "ease",
  autoplay: true,
  draggable: true,
  centerPadding: "200px",
  centerMode: true,
  slidesToShow: 1,
  zIndex: 1,
  // adaptiveHeight: true,
  pauseOnHover: false,
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
