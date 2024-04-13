$('.benefit__carousel').slick({
  dots: false,
  infinite: true,
  speed: 500,
  cssEase: "ease",
  draggable: true,
  centerPadding: "0",
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  verticalSwiping: true,
  zIndex: 1,
  // adaptiveHeight: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});