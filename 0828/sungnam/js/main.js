$(function(){
  var slide1 = $(".bxslider").bxSlider({
    auto:true,
    pager:false,
    onSliderLoad:function(currentIndex){
      $("#current").text(currentIndex+1);
    },
    onSlideBefore:function($slideElement, oldIndex, newIndex){
      $("#current").text(newIndex+1);
    }  
  })
  var slide2 = $(".bxslider2").bxSlider({
    auto:true,
    pager:false,
    onSlideBefore:function($slideElement, oldIndex, newIndex){
      $("#current2").text(newIndex+1);
    }
  })

  $(".pause").on("click", function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      slide1.startAuto();
    }else{
      $(this).addClass("on");
      slide1.stopAuto();
    }
    return false;
  })

  $(".prev").on("click",function(){
    slide1.goToPrevSlide();
    return false;
  })
  $(".next").on("click",function(e){
    e.preventDefault();
    slide1.goToNextSlide();
  })
});
