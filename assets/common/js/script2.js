$(document).ready(function(){
  $(window).resize(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth > 768) {
    $(".nav li").css("display":"inline");
  }
  });
});
