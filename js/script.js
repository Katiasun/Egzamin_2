$(".sliders").slick({
  dots: true,
  Infinity: true,
  fade: true,
  speed: 500,
  adaptiveHeight: true,
  easing: "ease-out",
  verticalSwiping: true,
});

$(document).ready(function () {
  $(".cards").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 2000,
    easing: "ease-out", //type of animation
    Infinity: true, //показывает будет-ли слайдер бесконечным
    autoplay: true, //слайды автомат будут пролистываться
    autoplaySpeed: 800, //задает скорость пролистывания слайдов автоматически
    pauseOnFocus: true, //слайдер будет активен если его перематывать мышкой\дергать
  });
});
//pauseOnHover: true, //при наведении на всю область слайдера он будет останавливатся
//pauseOnDotsHover: true, //пауза при наведении на точки
