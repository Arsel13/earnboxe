$(document).ready(function () {
  "use strict";
  var e, o;
  (e = $(".accordion-menu li:not(.open) ul")),
    (o = $(".accordion-menu li.active-page > a")),
    e.hide(),
    $(".accordion-menu li a").on("click", function () {
      var e = $(this).next("ul"),
        o = $(this).parent("li"),
        a = $(".accordion-menu > li.open");
      if (e.length)
        return (
          o.hasClass("open")
            ? (e.slideUp(200), o.removeClass("open"))
            : (a.length &&
                ($(".accordion-menu > li.open > ul").slideUp(200),
                a.removeClass("open")),
              e.slideDown(200),
              o.addClass("open")),
          !1
        );
    }),
    $(".active-page > ul").length && o.click(),
    $("#sidebar-state").on("click", function () {
      $("body").toggleClass("compact-sidebar");
    }),
    $(window).click(function () {
      if ($("body").hasClass("small-screen-sidebar-active")) {
        var e = document.querySelector(".small-screens-sidebar-link a");
        (o = e),
          (a = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window,
          })),
          o.dispatchEvent(a);
      }
      var o, a;
    }),
    $(".small-screens-sidebar-link a").on("click", function () {
      $("body").toggleClass("small-screen-sidebar-active"),
        event.stopPropagation();
    }),
    $("#sidebar-close").on("click", function () {
      $("body").toggleClass("small-screen-sidebar-active");
    }),
    $(".page-sidebar").click(function (e) {
      e.stopPropagation();
    }),
    $(".horizontal-bar").click(function (e) {
      e.stopPropagation();
    }),
    $(".hide-horizontal-bar").on("click", function () {
      $("body").toggleClass("small-screen-sidebar-active");
    }),
    $(".horizontal-bar-menu li:not(.open) ul").hide(),
    $(".horizontal-bar-menu li a").on("click", function () {
      var e = $(this).next("ul"),
        o = $(this).parent("li"),
        a = $(".horizontal-bar-menu > ul > li.open");
      if (e.length)
        return (
          o.hasClass("open")
            ? (e.slideUp(200), o.removeClass("open"))
            : (a.length &&
                ($(".horizontal-bar-menu > ul > li.open > ul").slideUp(200),
                a.removeClass("open")),
              e.slideDown(200),
              o.addClass("open")),
          !1
        );
    }),
    "dark" == localStorage.getItem("theme") && $("body").addClass("dark-theme"),
    "dark" != localStorage.getItem("theme") &&
      $("body").hasClass("dark-theme") &&
      localStorage.setItem("theme", "dark"),
    $("#dark-theme-toggle").on("click", function () {
      $("body").toggleClass("dark-theme"),
        $("body").hasClass("dark-theme")
          ? localStorage.setItem("theme", "dark")
          : localStorage.setItem("theme", "light"),
        event.preventDefault();
    }),
    $(window).width() > 767 &&
      $(".slimscroll")
        .slimScroll({ wheelStep: 5, touchScrollStep: 30, opacity: 0 })
        .mouseover(function () {
          $(this).next(".slimScrollBar").css("opacity", 0.4);
        }),
    $('[data-toggle="popover"]').popover(),
    $('[data-toggle="tooltip"]').tooltip(),
    window.addEventListener(
      "load",
      function () {
        var e = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(e, function (e) {
          e.addEventListener(
            "submit",
            function (o) {
              !1 === e.checkValidity() &&
                (o.preventDefault(), o.stopPropagation()),
                e.classList.add("was-validated");
            },
            !1
          );
        });
      },
      !1
    );
}),
  $(window).on("load", function () {
    setTimeout(function () {
      $("body").addClass("no-loader");
    }, 1e3);
  });
