jQuery(document).ready(function($) {

    initTimeAgo();

    initAboutLinks();

    resizeHeader();

    $('body').hide();
    $(window).load(function(){
        $('body').show();
    });

});

function resizeHeader() {

    $('header').height($(window).height() * 0.40);

    $(window).resize(function(){
        $('header').height($(window).height() * 0.40);
    });
}

function initTimeAgo() {
    $('abbr.timeago').timeago();
}

function initAboutLinks() {
    if ( window.location.href.indexOf('/about') > -1 ) {
      console.log('Current page is: about');
      $('.yearofcode i, .hosting i, .advocate i').hide();

      // If the URL dictates they were linked to view the 365 section,
      // scroll to that section
      if ( window.location.href.indexOf('?section=365') > -1 ) {
        console.log('Scrolling to section: 365');
        $('.yearofcode i').show().fadeOut(3000);
        $('html, body').animate({
          scrollTop: $('.yearofcode').offset().top
        }, 300);
      }

      // If the URL dictates they were linked to view the advocate
      // section, scroll to that section
      if ( window.location.href.indexOf('?section=advocate') > -1 ) {
        console.log('Scrolling to section: advocate');
        $('.advocate i').show().fadeOut(3000);
        $('html, body').animate({
          scrollTop: $('.advocate').offset().top
        }, 300);
      }

      // If the URL dictates they were linked to view the hosting
      // section, scroll to that section
      if ( window.location.href.indexOf('?section=hosting') > -1 ) {
        console.log('Scrolling to section: hosting');
        $('.hosting i').show().fadeOut(3000);
        $('html, body').animate({
          scrollTop: $('.hosting').offset().top
        }, 300);
      }
    }
}