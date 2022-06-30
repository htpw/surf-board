const teamList = document.querySelector(".team__list");

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

teamList.addEventListener("click", e => {
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