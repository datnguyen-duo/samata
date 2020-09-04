gsap.registerPlugin(ScrollToPlugin);

function nextSlide() {
  let nextSlide = $(".next-slide");
  let content = nextSlide.find(".content");
  let activeSlide = $(".slide.active");
  let logo = $(".slide.next-slide .col:first-of-type");

  var tl = gsap.timeline({
    onStart: function () {
      $(".next").addClass("disable-click");
    },
    onComplete: function () {
      activeSlide.removeClass("active");
      nextSlide.addClass("active");
      if (!nextSlide.next().hasClass("nav-bar")) {
        nextSlide.next().addClass("next-slide");
      } else {
        $(".slide.one").addClass("next-slide");
      }
      nextSlide.removeClass("next-slide");
      $(".next").removeClass("disable-click");
    },
  });

  tl.to(nextSlide, { width: "100%", ease: "power1.inOut" });
  tl.set(nextSlide, { left: 0 });
  if ($(window).width() > 767) {
    tl.to(nextSlide, { width: "75%", ease: "power1.inOut" });
  }
  if ($(window).width() < 1025) {
    tl.to(logo, { left: "calc(37.2vw - 360px)", ease: "power1.inOut" }, "-=1");
  } else if ($(window).width() < 1281) {
    tl.to(logo, { left: "calc(37.2vw - 380px)", ease: "power1.inOut" }, "-=1");
  } else {
    tl.to(logo, { left: "calc(37.2vw - 450px)", ease: "power1.inOut" }, "-=1");
  }
  tl.to(content, { opacity: 1, y: 0 });
  tl.set(nextSlide, { clearProps: "all" });
  tl.set(logo, { clearProps: "all" });
  tl.set(content, { clearProps: "all" });
}

$(function () {
  $(".next").click(function () {
    nextSlide();
  });
});

$(function () {
  let subnav = $(".sub-nav");
  let trigger = $("#products").position().top;
  let scrollTop = $(window).scrollTop();

  let sections = $("section");

  if (scrollTop > trigger) {
    subnav.addClass("active");
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > trigger) {
      subnav.addClass("active");
    } else {
      subnav.removeClass("active");
    }

    sections.each(function (i) {
      if ($(this).position().top < $(window).scrollTop() + 50) {
        $(".sub-nav li.active").removeClass("active");
        $(".sub-nav li").eq(i).addClass("active");
      }
    });
  });

  $(".anchor-links li").click(function () {
    let index = $(this).index() + 1;
    var scrollPos = $("body").children().eq(index).position().top;
    gsap.to(window, { duration: 0.7, scrollTo: scrollPos, ease: "power3.Out" });
  });
});

$(function () {
  let track = $(".track");
  let num = $(".tracker .num");
  let val1 = $(".val-1");
  let val2 = $(".val-2");
  let val3 = $(".val-3");
  let bg = $(".tracker .bg");

  track.draggable({
    axis: "x",
    containment: "parent",
    drag: function (event, ui) {
      let track = $(this);
      var trackPos = ui["position"]["left"];
      var width = $(this).parent().width() - track.width();

      var perc = trackPos / width;
      var n = Math.ceil(perc * 10000)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      var v1 = Math.ceil(perc * 20)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      var v2 = Math.ceil(perc * 300)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      var v3 = Math.ceil(perc * 400)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      num.text(n);
      val1.text(v1);
      val2.text(v2);
      val3.text(v3);
      bg.css("width", trackPos);
    },
  });
});

$(function () {
  let slider = $("#platform .slides");

  slider.slick({
    arrows: false,
    rows: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    centerMode: true,
  });
});
