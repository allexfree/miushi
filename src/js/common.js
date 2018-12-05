'use strict';

$(document).ready(function () {
  $('.menu-burger').click(function () {
    $('.sidebar-menu').toggleClass('sidebar-menu--open');
    $('body').toggleClass('modal-open');
  })

  $('.page-header__intro-slider').slick({
    dots: true,
    dotsClass: 'page-header__intro-pagination',
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  })

  $('.sets-slider').slick({
    mobileFirst: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 749,
        settings: {
          dots: true,
          arrows: true,
          appendArrows: $('.sets-arrows'),
          prevArrow: '<button type="button" class="sets-arrows__preview" aria-label="Предыдущий слайд"></button>',
          nextArrow: '<button type="button" class="sets-arrows__next" aria-label="Следующий слайд"></button>',
          dotsClass: 'sets-slider__pagination'
        }
      },
      {
        breakpoint: 320,
        dots: false,
        arrows: false
      }
    ]
  })

  $('.rolls-slider').slick({
    mobileFirst: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 749,
        settings: {
          dots: true,
          arrows: true,
          appendArrows: $('.rolls-arrows'),
          prevArrow: '<button type="button" class="rolls-arrows__preview" aria-label="Предыдущий слайд"></button>',
          nextArrow: '<button type="button" class="rolls-arrows__next" aria-label="Следующий слайд"></button>',
          dotsClass: 'rolls-slider__pagination'
        }
      },
      {
        breakpoint: 320,
        dots: false,
        arrows: false
      }
    ]
  })

  $('.pizza-slider').slick({
    mobileFirst: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 749,
        settings: {
          dots: true,
          arrows: true,
          appendArrows: $('.pizza-arrows'),
          prevArrow: '<button type="button" class="pizza-arrows__preview" aria-label="Предыдущий слайд"></button>',
          nextArrow: '<button type="button" class="pizza-arrows__next" aria-label="Следующий слайд"></button>',
          dotsClass: 'pizza-slider__pagination'
        }
      },
      {
        breakpoint: 320,
        dots: false,
        arrows: false
      }
    ]
  })

  $('.wok-slider').slick({
    mobileFirst: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 749,
        settings: {
          dots: true,
          arrows: true,
          appendArrows: $('.wok-arrows'),
          prevArrow: '<button type="button" class="wok-arrows__preview" aria-label="Предыдущий слайд"></button>',
          nextArrow: '<button type="button" class="wok-arrows__next" aria-label="Следующий слайд"></button>',
          dotsClass: 'wok-slider__pagination'
        }
      },
      {
        breakpoint: 320,
        dots: false,
        arrows: false
      }
    ]
  })

  $('.novelty-slider').slick({
    mobileFirst: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 749,
        settings: {
          dots: true,
          arrows: true,
          appendArrows: $('.novelty-arrows'),
          prevArrow: '<button type="button" class="novelty-arrows__preview" aria-label="Предыдущий слайд"></button>',
          nextArrow: '<button type="button" class="novelty-arrows__next" aria-label="Следующий слайд"></button>',
          dotsClass: 'novelty-slider__pagination'
        }
      },
      {
        breakpoint: 320,
        dots: false,
        arrows: false
      }
    ]
  })

  $('.adv-btn').click(function() {
    $('.adv-list').toggleClass('adv-list--open');
    $('.adv').attr('id', 'adv-id');
    if (!$(this).data('status')) {
      $(this).text('Свернуть');
      $(this).data('status', true);
    }
    else {
      $('html, body').animate({
        scrollTop: $('#adv-id').offset().top + 'px'
      }, 500);
      $(this).text('Показать все');
      $(this).data('status', false);
    }
  })

  $('.about-btn').click(function() {
    $('.about-text').toggleClass('about-text--open');
    $('.about').attr('id', 'about-id');
    if (!$(this).data('status')) {
      $(this).text('Свернуть');
      $(this).data('status', true);
    }
    else {
      $('html, body').animate({
        scrollTop: $('#about-id').offset().top + 'px'
      }, 500);
      $(this).text('Показать ещё');
      $(this).data('status', false);
    }
  })
});
