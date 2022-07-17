const mesureWidth = item => {
  let reqItemWidth = 0;
  const screenWidth = $(window).width();
  const container = item.closest(".slider-menu");
  const titlesBlocks = container.find(".slider-menu__title");
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
  
  const textContainer = item.find(".slider-menu__container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  } else {
    reqItemWidth = 500;
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingLeft - paddingRight
  }

}

const closeEveryItemInContainer = container => {
  const items = container.find(".slider-menu__item");
  const content = container.find(".slider-menu__content");

  items.removeClass("active");
  content.width(0);
}

const openSlider = item => {
  const hiddenContent = item.find(".slider-menu__content");
  const reqWidth = mesureWidth(item);
  const textBlock = item.find(".slider-menu__container");

  item.addClass("active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
}

$(".slider-menu__title").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".slider-menu__item");
  const itemOpened = item.hasClass("active");
  const container = $this.closest(".slider-menu");

  if (itemOpened) {
    closeEveryItemInContainer(container);
  } else {
    closeEveryItemInContainer(container);
    openSlider(item);
  }

});