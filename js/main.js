$(function() {
  $(".pure-menu a").on('click', function(e) {
    var t = e.target;
    $(t).next("ul").toggle();
  });
});
