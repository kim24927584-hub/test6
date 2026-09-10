$(function(){
  $(".tab-menu li").on("click",function(){
    $(".tab-menu li").removeClass("on");
    $(this).addClass("on");
    $(".content .menu").removeClass("active");

    $(".content ."+$(this).attr("id")).addClass("active");
  })
})