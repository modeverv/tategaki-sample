function load(){
  $("#cc").html("Loading...");
  var src = $("#src").val();
  if(!src){
    src = "https://kakuyomu.jp/works/1177354054881684388/episodes/1177354054881686249";
  }
  src = "https://cors.io/?" + src;
  $.get(src)
      .then(function(data){
        var html_ar = [];
        $data = $(data);
        $data.find("#contentMain-inner").find("p").each(function(idx,html){
          html_ar.push("<p>" + $(html).html() + "</p>");
        });
        $("#cc").html(html_ar.join(""));
        var c = $(".widget-episode-inner");
        c[0].scrollBy((40 * 2  * 9000000),0);
        $("#close").click();
      });
}

$(function(){
  var c = $(".widget-episode-inner");
  var right = () => {
     c[0].scrollBy((40 * 2  * 9),0);
  };
  var left = () => {
     c[0].scrollBy(-(40 * 2 * 9),0);
  };
  $("#right").click(function(){right();});
  $("#left").click(function(){left()});
  $(window).keyup(function(e){
    // 進む
    if(e.keyCode == 37){
      left();
    }
    // 戻る
    if(e.keyCode == 39){
      right();
    }
  });
});