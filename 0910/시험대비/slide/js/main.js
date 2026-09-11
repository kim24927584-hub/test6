$(function(){
  
  var slider =  $(".bxslider").bxSlider({
    

    
    onSlideBefore:function($slideElement, oldIndex, newIndex){
      $(".current").text(newIndex+1);
    }
  })

  $(".total").text(slider.getSlideCount())

  $(".pause").on("click", function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      slider.startAuto();
    }else{
      $(this).addClass("on");
      slider.stopAuto();
    }
    return false;
  })

  $(".prev").on("click",function(){
    slider.goToPrevSlide();
    return false;
  })
  $(".next").on("click",function(e){
    e.preventDefault();
    slider.goToNextSlide();
  })

})