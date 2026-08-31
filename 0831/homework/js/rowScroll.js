$(function(){
  $(window).scroll(function(){
    let sct = $(this).scrollLeft();
    $(".s_Top").text(sct);
  })
  $("nav ul li").click(function(e){
    e.preventDefault();
    $("nav ul li").removeClass("on");
    $(this).addClass("on");
    
    var i = $(this).index();
    var offset_l = $(".container div").eq(i).offset().left;
    $("html, body").stop().animate({scrollLeft:offset_l},1000);
  })
})
