$('.m-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
});


$('.slider-carousel').on('init', function () {
    console.log($(".slider-carousel .s-c_card.slick-center").index());
    $(".slider-carousel .s-c_card").removeClass("slide-left slide-right");
    $(".slider-carousel .s-c_card").eq($(".slider-carousel .s-c_card.slick-center").index() - 1).addClass("slide-left");
    $(".slider-carousel .s-c_card").eq($(".slider-carousel .s-c_card.slick-center").index() + 1).addClass("slide-right");
});
$('.slider-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    
    if (currentSlide != nextSlide) {
        console.log(currentSlide + " " + nextSlide);
        $(".slider-carousel .s-c_card").removeClass("slide-left slide-right");
        $(".slider-carousel .s-c_card").eq($(".slider-carousel .s-c_card.slick-active.slick-center").index() - 1).addClass("slide-left");
        $(".slider-carousel .s-c_card").eq($(".slider-carousel .s-c_card.slick-active.slick-center").index() + 1).addClass("slide-right");
    }
});

$('.slider-carousel').slick({
    infinite: true,
    initialSlide: 1,
    centerMode: true,
    draggable: false,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1

});
//$('.slider-carousel').slick({
//    infinite: true, 
//  centerMode: true,
//    variableWidth: true,
//  slidesToShow: 3,
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 3
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 1
//      }
//    }
//  ]
//});

//var glide = new Glide('.glide', {
//    type: 'carousel',
//    perView: 3,
//    focusAt: 'center',
//    breakpoints: {
//        800: {
//            perView: 2
//        },
//        480: {
//            perView: 1
//        }
//    }
//});
//
//glide.on(['mount.after', 'run.after'], function () {
//    console.log(glide.index);
//    $(".glide .glide__slide").removeClass("slide-left slide-right");
//    $(".glide .glide__slide").eq($(".slider-carousel-block .glide__slide--active").index() - 1).addClass("slide-left");
//    $(".glide .glide__slide").eq($(".slider-carousel-block .glide__slide--active").index() + 1).addClass("slide-right");
//
//});
//
//glide.mount();
