/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

$( document ).ready(function() {
    //var heights = Array();
    $(".event-container").each(
    function(index, ec){
        var eventContainer = $( ec );

        var anchorTag = $('<a>');
        anchorTag.attr('href',eventContainer.attr('data-src-link'))
        .attr('target','_blank')
        .addClass('portfolio-box');

        var imgTag = $('<img>');
        imgTag.attr('src',eventContainer.attr('data-img-src'))
        .attr('alt', eventContainer.attr('data-event-title'))
        .addClass('img-responsive').addClass("event-img");

        var portfolioBadge = $('<div>').append(eventContainer.attr('data-event-title'))
        .append('<hr>')
        .append(eventContainer.attr('data-event-date'))
        .addClass('portfolio-box-badge');

        var caption = $('<div>').addClass('portfolio-box-caption');

        var captionContent = $('<div>').addClass('portfolio-box-caption-content');

        var projectCategory = $('<div>').addClass('project-category text-faded')
        .append(eventContainer.attr('data-event-type'));

        var projectName = $('<div>').addClass('project-name')
        .append(eventContainer.attr('data-event-presenter') + ' - ' + eventContainer.attr('data-event-title'))
        .append('<br>')
        .append(eventContainer.attr('data-event-date'));

        captionContent.append(projectCategory).append(projectName)

        caption.append(captionContent);

        anchorTag.append(imgTag);
        anchorTag.append(portfolioBadge);
        anchorTag.append(caption);
        eventContainer.append(anchorTag);
    }
    );
    var foo = document.getElementsByClassName(".img-responsive");
    console.log(foo);
});
