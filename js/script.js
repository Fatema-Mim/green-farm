$('.banner-slide').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [
        // {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //     }
        // },

        {
            breakpoint: 1199.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#scrolltop').fadeIn();
        }
        else{
            $('#scrolltop').fadeOut();
        }
    });
    $('#scrolltop').click(function(){
        $('html,body').animate({
            scrollTop:0
        },5000);
    })
});