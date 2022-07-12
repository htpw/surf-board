const findBlockByAlias = alias => {
  return $(".reviews__content").filter((ndx, item) => {
    return $(item).attr("data-linked-with") == alias;
  });
};

$(".reviews__link").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".reviews__item");

  itemToShow.addClass("active").siblings().removeClass("active");
  curItem.addClass("reviews__link--active").siblings().removeClass("reviews__link--active");
});