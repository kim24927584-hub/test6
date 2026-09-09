$(function(){


// pc hover시
$('nav> ul').hover(function(){
  $(this).addClass("over");
},function(){
  $(this).removeClass("over");
});

//햄버거메뉴 클릭
$(".mobile_tab").on('click',openMoblieNav);


function openMoblieNav(){
    $('.mobile_nav').addClass('active');
    $(".transparency").addClass("active");
    $(".mobile_tab").attr("aria-expanded", "true");
    // 웹접근성만 필요 - 삭제무방
    $("body").css("overflow", "hidden");
}
function closeMobileNav(){
    $(".mobile_nav").removeClass("active");
    $(".transparency").removeClass("active");
    $(".mobile_tab").attr("aria-expanded", "false");
    $(".mobile_nav .sub").slideUp(0);
    $("body").css("overflow", "");
    // 메뉴를 닫을때 overflow : hidden 계속 남아있어서
    //버그가 생길때 
}

$('.transparency').on('click',closeMobileNav);
$('.mobile_close').on('click',closeMobileNav);

// 모바일 아코디언 서브

 $(".mobile_nav > ul > li > a").on("click", function (e) {
    var $sub = $(this).next(".sub");
    if ($sub.length === 0) return;

    e.preventDefault();
    if ($sub.css("display") === "none") {
      $(".mobile_nav .sub").slideUp(300);
      $sub.slideDown(300);
    } else {
      $sub.slideUp(300);
    }
  });


  var MOBILE_BP  = 850;

//   리사이즈 : pc로 돌아가면 모바일메뉴 초기화
$(window).on('resize',function(){
    if($(window).width() >  MOBILE_BP){
         closeMobileNav();
    }
});

var $slider = $('.main-slider');

$slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    fade: true,
    cssEase: "linear",
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive:[{
      breakpoint: 768,
      settings:{
        fade:false, /* 모바일에서는 슬라이드 전환 */
        speed:400,
      }
    }]
});
//슬라이드 시작시
$slider.on('init',function(event, slick){
  $('.slider-control .total').text(slick.slideCount); // 총슬라이드 - 4
  $('.slider-control .current').text(slick.currentSlide +1); //첫번째 슬라이드
});


//슬라이드변경시
$slider.on('afterChange',function(event, slick, currentSlide){
  $('.slider-control .current').text(currentSlide +1);
});

//슬라이드 화살표(별도로 넣었을때)
  $(".slick-prev-btn").on("click", function () {
    $slider.slick("slickPrev");
  });

  $(".slick-next-btn").on("click", function () {
    $slider.slick("slickNext");
  });


  var playing = true;
  $('.slick-pause-btn').on('click',function(){
    if(playing){
      $slider.slick('slickPause'); //슬라이드정지
      $(this).text("▶").attr('aria-label','재생');
      playing=false;
    }else{
      $slider.slick('slickPlay'); //슬라이드 다시시작
      $(this).text("❚❚").attr('aria-label','일시정지');
      playing=true;
    }
  });


});