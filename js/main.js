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
