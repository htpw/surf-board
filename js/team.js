const teamListDesktop = document.querySelector(".team__list--version--desktop");
const teamListTablets = document.querySelector(".team__list--version--tablets");


function openItem(button) {
  const contentWrap = button.nextElementSibling;
  const content = contentWrap.firstElementChild;

  const currentHeight = content.offsetHeight;
  contentWrap.style.height = currentHeight + "px";
  button.classList.add("team__link--active")
}

function closeItem(button) {
  if (!button) return;
  const contentWrap = button.nextElementSibling;
  contentWrap.style.height = 0;
  button.classList.remove("team__link--active");
}



teamListDesktop.addEventListener("click", e => {
  e.preventDefault();
  const target = e.target;
  const activeItem = document.querySelector(".team__link--active");

  
  if (target.classList.contains("team__link")) {
    if (target.classList.contains("team__link--active")) {
      closeItem(target);
    } else {
      closeItem(activeItem);
      openItem(target);
    }
  }

})

teamListTablets.addEventListener("click", e => {
  e.preventDefault();
  const target = e.target;
  const activeItem = document.querySelector(".team__link--active");

  
  if (target.classList.contains("team__link")) {
    if (target.classList.contains("team__link--active")) {
      closeItem(target);
    } else {
      closeItem(activeItem);
      openItem(target);
    }
  }

})