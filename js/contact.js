$(function () {
  let employers = $(".toggle .employers");
  let therapists = $(".toggle .therapists");
  let individuals = $(".toggle .individuals");

  let underline = $(".toggle .has-underline");

  let body = $("body.contact");

  employers.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $(".contact .toggle  li").removeClass("active");
      $(this).addClass("active");
      underline.css("left", "20px");

      body.attr("class", "contact init__employers");
    }
  });

  therapists.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $(".contact .toggle  li").removeClass("active");
      $(this).addClass("active");
      if ($(window).width() < 768) {
        underline.css("left", "calc(50% - 45px)");
      } else {
        underline.css("left", "calc(50% - 58px)");
      }
      body.attr("class", "contact init__therapists");
    }
  });

  individuals.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $(".contact .toggle  li").removeClass("active");
      $(this).addClass("active");
      if ($(window).width() < 768) {
        underline.css("left", "calc(100% - 110px)");
      } else {
        underline.css("left", "calc(100% - 135px)");
      }
      body.attr("class", "contact init__individuals");
    }
  });

  setTimeout(() => {
    if (window.location.href.indexOf("#employers") > -1) {
      employers.click();
    }

    if (window.location.href.indexOf("#therapists") > -1) {
      therapists.click();
    }

    if (window.location.href.indexOf("#individuals") > -1) {
      individuals.click();
    }
  }, 50);
});

$(function () {
  $(".hidden input[type='checkbox'").prop("checked", true);
});
