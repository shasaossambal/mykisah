// Filter JS
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');

        if (value == 'all'){
            $('.post-box').show(1000);
        } else {
            $('.post-box').not('.' + value).hide(1000);
            $('.post-box').filter('.' + value).show(1000);
        }

        $('.filter-item').removeClass('active-filter');
        $(this).addClass('active-filter');
    });
    // add active to btn
    $('.filter-item').click(function() {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");

    });
});

// Header bg change on scroll
const header = document.querySelector("header");

function toggleHeaderShadow() {
    header.classList.toggle("shadow", window.scrollY > 0);
}

window.addEventListener("scroll", toggleHeaderShadow);
window.addEventListener("load", toggleHeaderShadow);
