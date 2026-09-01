$(function(){
  var off_1 = $("#section1").offset().top;
  var off_2 = $("#section2").offset().top;
  var off_3 = $("#section3").offset().top;
  var off_4 = $("#section4").offset().top;
  var off_5 = $("#section5").offset().top;

  var of_3 = $("#wrap > section:eq(2)").offset().top;
  var f_top = $("#float_div").offset().top; 
  $(window).scroll(function(){
    var sct = $(window).scrollTop();
    $(".s_Top").text(sct);
    if(sct>100){
      $("nav").addClass("fixed");
    }else{
      $("nav").removeClass("fixed");
    }

    if(sct >= $("#wrap>section").eq(0).offset().top){
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(0).addClass("on");
    }
    if(sct >= $("#wrap>section").eq(1).offset().top){
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(1).addClass("on");
    }
    if(sct >= $("#wrap>section").eq(2).offset().top){
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(2).addClass("on");
    }
    if(sct >= $("#wrap>section").eq(3).offset().top){
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(3).addClass("on");
    }
    if(sct >= $("#wrap>section").eq(4).offset().top){
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(4).addClass("on");
    }

    
    $("#float_div").stop().animate({top:sct+f_top},300);
  })
  $("nav ul li").click(function(e){
    e.preventDefault();
      var i = $(this).index();
      
      var st = $("section").eq(i).offset().top;
      
      $("html, body").stop().animate({scrollTop:st+"px"},800);

      
  })

  $("#popup").draggable();
  
  if($.cookie("pop")!="no"){
    $("#popup").show();
  }
  $("#popup area:eq(0)").on("click",function(e){
    e.preventDefault();
    $("#popup").fadeOut("fast");
    
  })
  $("#popup area:eq(1)").click(function(){
    $("#popup").fadeOut("fast");
    $.cookie("pop", "no", {expires:1});
  })

  // 두 번째 팝업창
  $("#notice_wrap").draggable();
  if($.cookie("popup") == "none"){
    $("#notice_wrap").hide();
  }

  var chk = $("#expiresChk");
  $(".closeBtn").on("click",closePop)

  function closePop(){
    
    if(chk.is(":checked")){
      $.cooke("popup", "none",{expries:3});
    }
    $("#notice_wrap").fadeOut("fast");
  }
})