$(document).ready(function () {
    $('#sidebarCollapse,#insideCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$('.home-slider').slick({
    nav:true,
    dots:true
});