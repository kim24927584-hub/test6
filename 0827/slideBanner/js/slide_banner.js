$(function(){
  var visual = $("#brandVisual > ul > li");
  var button = $("#buttonList > li");
  var current = 0;
  var id;

  button.click(function(){
    var i = $(this).index();
    
    button.removeClass('on');
    $(this).addClass("on");

    move(i);
    return false;
  })

  function timer(){
    setInterval(function(){
      var n = current + 1;
      if(n === 3){
        n = 0;
      }
      button.eq(n).trigger("click");
    }, 3000);
  }
  timer();

  function move(i){
    if(current == i)  {
      return;
    }
    var cu = visual.eq(current);
    var ne = visual.eq(i);
    cu.css("left", "0").stop().animate({"left":"-100%"},500);
    ne.css("left", "100%").stop().animate({"left":"0%"},500);
    current = i;
    // if(current == visual.length){
    //   current = 0;
    // }
    // visual.css("transition", "all 0.5s")
    // visual.css("margin-left", `-${current*100}%`)

    // current++;
  }

  
  
})