$(window).on("load", function () {
  $(".modal-wrapper").addClass("hidden");
  $("#teamBody").removeClass("fixed-body");

  $(".nav-tab").on("click", function () {
    $(".mobile-nav").animate({
      left: 0,
    });
    $("#teamBody").addClass("fixed-body");
  });

  $(".close-icon").on("click", function () {
    $(".mobile-nav").animate({
      left: "-100%",
    });
    $("#teamBody").removeClass("fixed-body");
  });
});
