$(function(){
  $(window).resize(function(){
    var w = $(this).width();
    
    if(w <= 850){

    }else{
      if($(".mobile_nav").hasClass("active")==true){
        $(".mobile_nav").toggleClass("active");
    $(".container").toggleClass("active");
    $(".transparency").toggleClass("active");
    $(".mobile_nav .sub").slideUp();
      }
    }
  })

  $(".nav ul").hover(function(){
    $(this).addClass("over");
  },function(){
    $(this).removeClass("over");
  })
  
  $(".mobile_tab").click(function(e){
    e.preventDefault();
    $(".mobile_nav").toggleClass("active");
    $(".container").toggleClass("active");
    $(".transparency").toggleClass("active")
  })
  $(".transparency").click(function(e){
    $(".mobile_nav").toggleClass("active");
    $(".container").toggleClass("active");
    $(".transparency").toggleClass("active");
    $(".mobile_nav .sub").slideUp();
  })

  $(".mobile_nav > ul > li > a").click(function(e){
    e.preventDefault();
    var k = $(this).next(".sub").css("display");
    
    if(k==="none"){
      $(".mobile_nav .sub").slideUp(300);
      $(this).next(".sub").slideDown(300);
      
    }else{
      $(this).next(".sub").slideUp(300);
    }
  })

})