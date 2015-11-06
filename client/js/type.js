$(document).ready(function() {
  $(".masthead").visibility({
    once: false,
    onBottomPassed: function() {
      $(".fixed.menu").transition("fade in");
    },
    onBottomPassedReverse: function() {
      $(".fixed.menu").transition("fade out");
    }
  });
  $(".ui.sidebar").sidebar("attach events", ".toc.item");
  $(".type").typed({
    strings: ["developer", "builder", "foodie", "coffee lover", "pug fanatic"],
    typeSpeed: 0,
    loop: true,
    showCursor: true,
    cursorChar: "|"
  });
  $(".skill").hover(function() {
    $(this).addClass("animated tada");
  }, function() {
    $(this).removeClass("animated tada");
  });
})
