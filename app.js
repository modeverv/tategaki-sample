$(function(){
  var c = $(".widget-episode-inner");
  $(window).keyup(function(e){
    window.console.log(e.keyCode);
    if(e.keyCode == 37){
      c[0].scrollBy(-800,0);
    }
    if(e.keyCode == 39){
      c[0].scrollBy(800,0);
    }
  });
});