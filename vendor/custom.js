$(document).ready(function() {
  $("#sidebarCollapse,#insideCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });

  $(".home-slider").slick({
    nav: true,
    dots: true
  });

  $(".vehicle-slider").slick({
    
    infinite: true,
    nav: true,
    slidesToShow: 1,
  slidesToScroll: 1,
    dots: true,
    prevArrow: $(".left-arrow"),
    nextArrow: $(".right-arrow")
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
      '<button class="left-arrow-services">\
      <i class="fa fa-caret-left grayclr"></i>\
  </button>',
    nextArrow:
      '<button class="right-arrow-services">\
      <i class="fa fa-caret-right grayclr"></i>\
  </button>'
  });

  $(".our-services-slider2").slick({
    nav: true,
    dots: true,
    prevArrow:
      '<button class="left-arrow-services">\
      <i class="fa fa-caret-left grayclr"></i>\
  </button>',
    nextArrow:
      '<button class="right-arrow-services">\
      <i class="fa fa-caret-right grayclr"></i>\
  </button>'
  });
  $(".our-services-slider3").slick({
    nav: true,
    dots: true,
    prevArrow:
      '<button class="left-arrow-services">\
      <i class="fa fa-caret-left grayclr"></i>\
  </button>',
    nextArrow:
      '<button class="right-arrow-services">\
      <i class="fa fa-caret-right grayclr"></i>\
  </button>'
  });
  $(".our-services-slider4").slick({
    nav: true,
    dots: true,
    prevArrow:
      '<button class="left-arrow-services">\
      <i class="fa fa-caret-left grayclr"></i>\
  </button>',
    nextArrow:
      '<button class="right-arrow-services">\
      <i class="fa fa-caret-right grayclr"></i>\
  </button>'
  });
});
