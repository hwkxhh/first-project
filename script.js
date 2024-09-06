$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// document.getElementsByClassName('page-scroll btn  btn-xl')


// multiplication and division of a number in javascript
// Full name along with your email and number 
// 2 in function. 