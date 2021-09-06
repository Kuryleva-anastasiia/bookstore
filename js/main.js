var menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".header-wrap__nav-wrap")
    .classList.toggle("header-wrap__nav-wrap_mobile"),
    document.querySelector("body").classList.toggle("menu-opened"),
    document
      .querySelector(".menu-btn__line_top")
      .classList.toggle("menu-btn__line_top_rotate"),
    document
      .querySelector(".menu-btn__line_middle")
      .classList.toggle("menu-btn__line_middle_hidden"),
    document
      .querySelector(".menu-btn__line_bottom")
      .classList.toggle("menu-btn__line_bottom_rotate");
});

const collectionsSwiper = new Swiper(".collections__slider", {
  loop: true,

  navigation: {
    nextEl: ".collections__button_next",
    prevEl: ".collections__button_prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
  },
});
const unreleasedSwiper = new Swiper(".unreleased__slider", {
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: ".unreleased__button_next",
    prevEl: ".unreleased__button_prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 26,
    },
  },
});

$(".form").each(function () {
  $(this).validate({
    rules: {
      email: {
        pattern: /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
      },
    },
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
        pattern: "Format of email should be: name@domain.com",
      },
    },
  });
});
