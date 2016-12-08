$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$('ul.about-nav .btn').on('click', function () {
    if ($(this).hasClass('selected')) {
        return;
    } else {
        $('ul.about-nav .btn').removeClass('selected');
        $(this).addClass('selected');
        $('#about-2 > div').hide();
        switch ($(this).text()) {
            case 'Experience':
                $('.experience').show();
                break;
            case 'Skills':
                $('.skills').show();
                break;
            case 'Resume':
                $('.resume').show();
                break;
        }
    }
});