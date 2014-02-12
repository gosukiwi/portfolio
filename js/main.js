/*
 * Federico Ramirez's portfolio frontend effects
 * Copyright Federico Ramirez 2014
 */
(function () {
    "use strict";

    var pointers = $('.pointer'),
        menu = $('#menu'),
        timer;

    // menu pointers
    pointers.hide();
    menu.find('a').mouseenter(function () {
        var el = $(this),
            left = el.position().left,
            center = el.outerWidth() / 2 + left;

        if(timer !== undefined) {
            clearTimeout(timer);
        }

        pointers
            .show()
            .stop()
            .animate({'left': center + 'px'});
    }).mouseleave(function () {
        if(timer !== undefined) {
            clearTimeout(timer);
        }

        timer = setTimeout(function () {
            pointers.hide();
            timer = undefined;
        }, 1000);
    });

    // smooth scroll
    $('div#menu a').click(function (e) {
        var tag = $(this).attr('href').split('#')[1],
            el = $('#' + tag);

        e.preventDefault();

        if(el.length) {
            $('html, body').animate({ scrollTop: el.offset().top });
        }
    });

    $('#to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}());
