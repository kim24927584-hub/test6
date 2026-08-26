$(function(){
  // $(".m_menu li ul").css("display","none");
  $(".sub").hide();

  $(".sub").eq(0).show();

  $(".m_menu>li>a").click(function(e){
    e.preventDefault();

    var status = $(this).next(".sub").css("display");
    
    if(status == "none"){
      $(".sub").slideUp();
      $(this).next(".sub").slideDown();
    }else{
      $(".sub").slideUp();
    }
  });
})