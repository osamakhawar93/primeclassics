$(document).ready(function() {
  $("#sidebarCollapse,#insideCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });

  $(".home-slider").slick({
    nav: true,
    dots: true
  });

  $(".vehicle-slider").slick({
    nav: true,
    dots: true,
    prevArrow:
      '<button class="left-arrow">\
      <i class="fa fa-caret-left grayclr"></i>\
  </button>',
    nextArrow:
      '<button class="right-arrow">\
      <i class="fa fa-caret-right grayclr"></i>\
  </button>'
  });

  $(".nn-tabs .nav-item").click(function() {
    $(".nn-tabs .nav-item div").removeClass("border-btm-active");
    $(this)
      .find("div")
      .addClass("border-btm-active");
  });

  $(".our-services-slider").slick({
    nav: true,
    dots: true,
    prevArrow:
      '<button class="left-arrow">\
      <i class="fa fa-caret-left grayclr"></i>\
  </button>',
    nextArrow:
      '<button class="right-arrow">\
      <i class="fa fa-caret-right grayclr"></i>\
  </button>'
  });
});
