function load(){
  $("#c").html("Loading...");
  var src = $("#src").val();
  if(!src){
    src = "https://kakuyomu.jp/works/1177354054881684388/episodes/1177354054881686249";
  }
  src = "https://cors.io/?" + src;
  $.get(src)
      .then(function(data){
        var html_ar = [];
        $(data).find("#contentMain-inner").find("p").each(function(idx,html){
          html_ar.push("<p>" + $(html).html() + "</p>");
        });
        $("#c").html(html_ar.join(""));
        var $c = $("#c");
        $c[0].scrollBy((40 * 2 * 9000000),0);
        $("#src").val("");
        $("#close").click();
      });
}

$(function(){
  var $c = $("#c");
  var right = () => {
     $c[0].scrollBy((40 * 2 * 9),0);
  };
  var left = () => {
     $c[0].scrollBy(-(40 * 2 * 9),0);
  };
  $("#right").click(function(){right();});
  $("#left").click(function(){left();});
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