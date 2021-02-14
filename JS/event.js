$(document).ready(function(){
    $(".carrousel-aktif").owlCarousel({
        margin : 10,
        nav : true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.custom-nav-aktif'
    });
    $(".carousel-beli").owlCarousel({
        margin : 10,
        nav : true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.custom-nav-beli'
    });
});