const slider = $('.offers__list').bxSlider({
  pager:false,
  controls:false
});

$('.offers__left').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$('.offers__right').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});