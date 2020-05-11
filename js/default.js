$(document).ready(function(){
  // Mobile nav
  $(".js-navi__icon").click(function(){
    // var nav = $(".js-navi__menu");
    var nav = $(".navi__menu");
    var icon = $(".js-navi__icon");

    nav.slideToggle(200);
    if(icon.hasClass("fa-times")) {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    } else {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    }
  });
});
