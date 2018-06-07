$(document).ready(function() {
    var offset = 220;
    var duration = 500;
    var backToTopBtn = $('.back-to-top');
    // ---
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            backToTopBtn.fadeIn(duration);
        } else {
            backToTopBtn.fadeOut(duration);
        }
    });
    // ---
    backToTopBtn.click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
