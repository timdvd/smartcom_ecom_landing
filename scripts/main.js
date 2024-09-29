/* open window */

let cart = document.querySelector('.cart');

function open_cart(){
    cart.classList.add('active');
}
function close_cart(){
    cart.classList.remove('active');
}

var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
});



var swiper = new Swiper(".sale__section", {
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1600: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    },
});


var swiper = new Swiper(".product__swip", {
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1600: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    },
});


/* back to top */
let backTop = document.querySelector('.back__to__top');

backTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

// open & close menu

let menu = document.querySelector('#menu');

function open_menu(){
    menu.classList.add('active');
}
function close_menu(){
    menu.classList.remove('active');
}

// change item image
let bigImage = document.getElementById('bigImg')

function ChangeItemImage(img){
    bigImage.src = img
}


let filter = document.querySelector('.filter');

function open_close_filter(){
    filter.classList.toggle('active')
}