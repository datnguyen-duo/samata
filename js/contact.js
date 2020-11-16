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

$(function () {
  $(".nav-toggle").click(function () {
    $(this).closest("nav").toggleClass("open");
  });
});

$(function () {
  $(".formkit-form").on("submit", function (event) {
    var origin = window.location.origin;
    var url = origin + "/mail/mail.php";
    var fname = "";
    var lname = "";
    var email = "";
    var company = "";
    var message = "";
    var location_therapy = "";
    var licence_type = "";
    var licence_number = "";
    var link_website = "";
    var practice = "";
    var action = "";
    fname = $(this).find('input[name="fields[first_name]"]').val();
    lname = $(this).find('input[name="fields[last_name]"]').val();
    company = $(this).find('input[name="fields[company]"]').val();
    message = $(this).find('input[name="fields[message]"]').val();
    email = $(this).find('input[name="email_address"]').val();
    if ($(this).attr("data-sv-form") == "1653865") {
      action = "contact_for_therapists";
    } else if ($(this).attr("data-sv-form") == "1653463") {
      action = "contact_for_employers";
    } else if ($(this).attr("data-sv-form") == "1653624") {
      action = "contact_for_therapists";
    } else if ($(this).attr("data-sv-form") == "1653633") {
      action = "contact_for_individuals";
    } else if ($(this).attr("data-sv-form") == "1653666") {
      action = "footer_home_form";
    } else if ($(this).attr("data-sv-form") == "1163245") {
      action = "footer_home_form";
    } else if ($(this).attr("data-sv-form") == "1657833") {
      action = "contact_for_apply_now";
      lname = $(this).find('input[aria-label="Last Name"]').val();
      location_therapy = $(this)
        .find('input[name="fields[location_of_therapy_practice]"]')
        .val();
      licence_type = $(this).find('input[name="fields[license_type]"]').val();
      licence_number = $(this).find('input[aria-label="License Number"]').val();
      link_website = $(this).find('input[aria-label="Link to Website"]').val();
      practice = $(this)
        .find('input[aria-label="Tell us a bit about your practice"]')
        .val();
    }
    $.ajax({
      url: url,
      data: {
        action: action,
        email: email,
        fname: fname,
        lname: lname,
        company: company,
        message: message,
        location_therapy: location_therapy,
        licence_type: licence_type,
        licence_number: licence_number,
        link_website: link_website,
        practice: practice,
      },
      type: "POST",
      success: function (data) {
        console.log(data);
      },
    });
  });
});
