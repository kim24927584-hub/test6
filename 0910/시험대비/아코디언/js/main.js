$(function(){
  $(".menu li").click(function(e){
    e.preventDefault();
    
    
    if($(this).attr("class") != "on"){
      $(".menu li").removeClass("on");
      $(this).addClass("on");
    }else{
      $(".menu li").removeClass("on");
    }
    
    
  })
})