$('.m-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
});

new Vue({
    el: '#slider-carousel',
    data: {
        slides: $(".carousel-3d .s-c_card").length
    },
    created: function () {
        $(".counter-carousel_general").html(this.slides);
    },
    methods: {
        onBeforeSlideChange(index) {
            $(".counter-carousel_current").html(index + 1);
        }
    },
    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    }

})
