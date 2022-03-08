$(".nav-tab").on("click", function () {
  $(".mobile-nav").animate({
    left: 0,
  });
  $("#contactBody").addClass("fixed-body");
});

$(".close-icon").on("click", function () {
  $(".mobile-nav").animate({
    left: "-100%",
  });
  $("#contactBody").removeClass("fixed-body");
});
