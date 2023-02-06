$(".slick-content").slick({
  infinite: true,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 4e3,
  speed: 1100,
  arrows: false,
  dots: true,
  prevArrow:
    '<button type="button" class="service-prev"><i class="fa fa-long-arrow-alt-left"></i></button>',
  nextArrow:
    '<button type="button" class="service-next"><i class="fa fa-long-arrow-alt-right"></i></button>',
}),
  $('[data-fancybox="gallery"]').fancybox({ loop: true }),
  $(".counter").countUp();
