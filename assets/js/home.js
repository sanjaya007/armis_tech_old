$(".nav-tab").on("click", function () {
  $(".mobile-nav").animate({
    left: 0,
  });
  $("#homeBody").addClass("fixed-body");
});

$(".close-icon").on("click", function () {
  $(".mobile-nav").animate({
    left: "-100%",
  });
  $("#homeBody").removeClass("fixed-body");
});
