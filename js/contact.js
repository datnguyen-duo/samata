$(function () {
  let employers = $(".toggle .employers");
  let therapists = $(".toggle .therapists");
  let individuals = $(".toggle .individuals");

  let underline = $(".toggle .has-underline");

  employers.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $(".contact .toggle  li").removeClass("active");
      $(this).addClass("active");
      underline.css("left", "20px");
    }
  });

  therapists.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $(".contact .toggle  li").removeClass("active");
      $(this).addClass("active");
      underline.css("left", "calc(50% - 65px)");
    }
  });

  individuals.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $(".contact .toggle  li").removeClass("active");
      $(this).addClass("active");
      underline.css("left", "calc(100% - 150px)");
    }
  });
});
