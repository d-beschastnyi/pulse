$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      // adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }
      ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active ')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  });