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
// -----------------팝업
  
  $(".popup .btn").click(function(){
    $(".popup").css("display", "none");
  })
  $(".popup").draggable();

  // ---------------햄버거
  $(".hamburger").click(function(){
    $(this).toggleClass("active");
    $(".mobile_nav").toggleClass("active");
    $(".mobile_bg").addClass("active");
    $("body").toggleClass("hidden");

  })
  $(".mobile_bg").click(function(){
    $(".hamburger").toggleClass("active");
    $(".mobile_nav").toggleClass("active");
    $(this).removeClass("active");
    $("body").toggleClass("hidden");
  })
  // -------------------모바일 메뉴 항목 클릭시 아코디언
  $(".mobile_gnb > li > a").click(function(){
    var me =$(this).next();
    me.slideToggle()
    
  })

})

