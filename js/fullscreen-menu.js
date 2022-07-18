const hamburger = document.querySelector(".hamburger");
const fullScreenMenu = document.querySelector(".fullscreen-menu");
const close = document.querySelector(".fullscreen-menu__close");
const closeForTouch = $(fullScreenMenu).find(".menu__link");

hamburger.addEventListener("click", e => {
  e.preventDefault();
  const actualDisplay = getComputedStyle(fullScreenMenu).display;

  if (actualDisplay == "none") {
    fullScreenMenu.style.display = "flex";
  }
});

close.addEventListener("click", e2 => {
  e2.preventDefault();

  fullScreenMenu.style.display = "none";
});

$(closeForTouch).click( e3 => {
  e3.preventDefault();

  fullScreenMenu.style.display = "none";
});