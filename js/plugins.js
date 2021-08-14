/*
* Template Name      : AXIT
* Template Version   : V 1.0.0
* Template Url       : .....................
* Language           : HTML5 | CSS3 |JavaScript
* Framework          : Bootstrap[CSS] | jQuery [JavaScript]
* Preprocesseur      : SaSS [CSS]
* Contact Me : Skaype   :- Boudraa.Hammani
*				Facebook :- Ham mani
*				Email    :- Ham47mani@gmail.com
*/
/*global $*/
$(function () {
    "use strict";

    /*                       Start Cashing Variables
    ========================================================================== */
    var navbar      = $(".navbar"),
        socialIcon  = $("i").not(".pricing-plan .pricing .cost i"),
        tabLink     = $(".tebs-section .nav-tabs li a");
    /*                       End Cashing Variables
    ========================================================================== */


    /*                       Start Add Class When Window Scrolling
    ========================================================================== */
    $(window).scroll(function () {
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
    /*                       End Add Class When Window Scrolling
    ========================================================================== */

    /*                       Start Add Hover To Social Media Icons
    ========================================================================== */
    socialIcon.hover(function () {
        $(this).css('color', $(this).data("color"));
    }, function () {
        $(this).css('color', "#CCC");
    });
    /*                       End Add Hover To Social Media Icons
    ========================================================================== */

    /*                       Start Ennable Tabs Section
    ========================================================================== */
    tabLink.click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    /*                       End Ennable Tabs Section
    ========================================================================== */

    /*                       Start Nice Scroll
    ========================================================================== */
    $('html').niceScroll({
        cursorcolor: 'var(--main-Color)',
        cursorborder: '1px solid var(--main-Color)'
    });
    /*                       End Nice Scroll
    ========================================================================== */
});

/* ------------------------------- Start Loading Screene ------------------------------- */
$(window).on("load", function () {
    "use strict";
});
/* ------------------------------- End Loading Screene ------------------------------- */
