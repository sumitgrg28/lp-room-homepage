jQuery('.hero__slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<button class='slick-prev slick-arrow' aria-label='Previous' type='button'><i class='icon-arrow-left'></i></button>",
    nextArrow: "<button class='slick-next slick-arrow' aria-label='Next' type='button'><i class='icon-arrow-right'></i></button>",
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});


objectFitImages();



// navbar
const navSlide = () => {
    const menu = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav__list');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav__list-active');

        menu.classList.toggle('toggle');
    });
}

navSlide();