$(function(){
  $(".bxslider").bxSlider({
    auto: true
  });
  $(".slider-basic").slick({
    autoplay:true,
    dots: true,
    arrows:false,
    isfinite:true,
    speed:500,
    slidesToShow:1,

  })
  $(".popup .btn").click(function(){
    $(".popup").css("display", "none");
  })
  $(".popup").draggable();
})

