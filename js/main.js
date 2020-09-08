gsap.registerPlugin(ScrollToPlugin);

// $(window).bind("resize", function (e) {
//   if (window.RT) clearTimeout(window.RT);
//   window.RT = setTimeout(function () {
//     this.location.reload(false); /* false to get page from cache */
//   }, 100);
// });

function bannerLanding() {
  let mainImg = $("#banner .img-wrapper");
  let asideImg = $("#banner .minor aside");
  let note = $("#banner .container p");

  var tl = gsap.timeline();

  tl.to(mainImg, 0.5, { opacity: 1 });
  tl.to(asideImg, 1, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    // ease: "Power1.easeOut",
  });
  tl.to(note, { opacity: 1, x: 0 }, "-=.5");
}
$(function () {
  bannerLanding();
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
      if ($(this).position().top < $(window).scrollTop() + 100) {
        $(".sub-nav li.active").removeClass("active");
        $(".sub-nav li").eq(i).addClass("active");
      }
    });
  });

  $(".anchor-links li").click(function () {
    let index = $(this).index() + 2;
    var scrollPos = $("body").children().eq(index).position().top;
    gsap.to(window, { duration: 0.7, scrollTo: scrollPos, ease: "power3.Out" });
  });
});

$(function () {
  $("#banner .has-play-btn").click(function () {
    $("#platform video").trigger("play");
  });
});

$(function () {
  let cta = $("#products .container .col .btn");

  cta.click(function (e) {
    e.preventDefault();
    let target = $(this).attr("target");
    window.location = "#how-it-works";
    // $(".sub-nav ul .how-it-works").click();
    $("ul.toggle li." + target).click();
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
    slide: ".slide",
  });

  $("#platform .slider").click(function () {
    slider.slick("slickNext");

    if ($(".cursor").hasClass("last-slide")) {
      slider.slick("slickGoTo", 0);
    }
  });

  slider.on("afterChange", function (event, slick, currentSlide, nextSlide) {
    if (currentSlide < 1) {
      $("#platform .slider header h3 span").removeClass("active");
      $("#platform .slider header h3 span:first-of-type").addClass("active");
      $(".cursor").removeClass("last-slide");
    } else if (currentSlide == 1) {
      $("#platform .slider header h3 span").removeClass("active");
      $("#platform .slider header h3 span:nth-child(2)").addClass("active");
      $(".cursor").removeClass("last-slide");
    } else if (currentSlide == 2) {
      $("#platform .slider header h3 span").removeClass("active");
      $("#platform .slider header h3 span:last-of-type").addClass("active");
      $(".cursor").addClass("last-slide");
    }
  });
});

$(function () {
  var cursor = $(".cursor");
  var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 2;
      posY += (mouseY - posY) / 2;

      gsap.set(cursor, {
        css: {
          left: mouseX - 27,
          top: mouseY - 27,
        },
      });
    },
  });

  $("body").on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  $("#platform .slider").on("mouseenter", function () {
    $("body").addClass("active-cursor");
  });

  $("#platform .slider").on("mouseleave", function () {
    $("body").removeClass("active-cursor");
  });
});

$(function () {
  let trigger = $("#numbers");
  function counter() {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }

  gsap.from(trigger, {
    scrollTrigger: {
      trigger: trigger,
      start: "top 70%",
      once: true,
      onEnter: function () {
        counter();
      },
    },
  });
});

$(function () {
  let employers = $("#how-it-works ul .employers");
  let therapists = $("#how-it-works ul .therapists");
  let individuals = $("#how-it-works ul .individuals");

  let underline = $("#how-it-works ul .has-underline");
  let screen = $("#how-it-works .screen");

  let imgTherapists = $(".img__therapists");
  let imgIndividuals = $(".img__individuals");

  let asideEmployers = $(".aside__employers");
  let asideTherapists = $(".aside__therapists");
  let asideIndividuals = $(".aside__individuals");

  let asides = $("#how-it-works .img-wrapper aside > div");

  let majorTherapists = $(".major__therapists");
  let majorEmployers = $(".major__employers");
  let majorIndividuals = $(".major__individuals");

  let majors = $("#how-it-works .container .major > div");

  function initEmployers() {
    var tl = gsap.timeline();

    tl.to(screen, 0.5, { width: "100%", ease: "power1.inOut" });
    tl.to(asides, { opacity: 0, pointerEvents: "none" }, "-=.5");
    tl.set(imgTherapists, { opacity: 0 });
    tl.set(imgIndividuals, { opacity: 0 });

    tl.set(screen, { left: "0" });
    tl.to(screen, { width: "0%", ease: "power1.inOut" });
    tl.to(asideEmployers, { opacity: 1, pointerEvents: "initial" }, "-=.5");
    tl.set(screen, { clearProps: "all" });

    gsap.to(majors, { opacity: 0 });
    gsap.to(majorEmployers, { opacity: 1, delay: 0.5 });
  }

  function initTherapists() {
    var tl = gsap.timeline();

    tl.to(screen, 0.5, { width: "100%", ease: "power1.inOut" });
    tl.to(asides, { opacity: 0, pointerEvents: "none" }, "-=.5");
    tl.set(imgIndividuals, { opacity: 0 });

    tl.set(imgTherapists, { opacity: 1 });
    tl.set(screen, { left: "0" });
    tl.to(screen, { width: "0%", ease: "power1.inOut" });
    tl.to(asideTherapists, { opacity: 1, pointerEvents: "initial" }, "-=.5");
    tl.set(screen, { clearProps: "all" });

    gsap.to(majors, { opacity: 0 });
    gsap.to(majorTherapists, { opacity: 1, delay: 0.5 });
  }

  function initIndividuals() {
    var tl = gsap.timeline();

    tl.to(screen, 0.5, { width: "100%", ease: "power1.inOut" });
    tl.to(asides, { opacity: 0, pointerEvents: "none" }, "-=.5");
    tl.set(imgTherapists, { opacity: 0 });
    tl.set(imgIndividuals, { opacity: 1 });

    tl.set(screen, { left: "0" });
    tl.to(screen, { width: "0%", ease: "power1.inOut" });
    tl.to(asideIndividuals, { opacity: 1, pointerEvents: "initial" }, "-=.5");
    tl.set(screen, { clearProps: "all" });

    gsap.to(majors, { opacity: 0 });
    gsap.to(majorIndividuals, { opacity: 1, delay: 0.5 });
  }

  employers.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $("#how-it-works .toggle li").removeClass("active");
      $(this).addClass("active");
      underline.css("left", "20px");
      initEmployers();
    }
  });

  therapists.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $("#how-it-works .toggle li").removeClass("active");
      $(this).addClass("active");
      underline.css("left", "calc(50% - 65px)");
      initTherapists();
    }
  });

  individuals.click(function () {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $("#how-it-works .toggle li").removeClass("active");
      $(this).addClass("active");
      underline.css("left", "calc(100% - 150px)");
      initIndividuals();
    }
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

function nextSlide() {
  let nextSlide = $(".next-slide");
  let content = nextSlide.find(".content");
  let activeSlide = $(".slide.active");
  let logo = $(".slide.next-slide .col:first-of-type");
  let num = $("#testimonials .nav-bar .major .num");
  let header = $("#testimonials header");

  var tl = gsap.timeline({
    onStart: function () {
      $(".next").addClass("disable-click");
      header.removeClass();

      if (activeSlide.next().is(":nth-child(2)")) {
        num.text("02");
        header.addClass("green");
      } else if (activeSlide.next().is(":nth-child(3)")) {
        num.text("03");
        header.addClass("blue");
      } else {
        num.text("01");
        header.addClass("navy");
      }
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
