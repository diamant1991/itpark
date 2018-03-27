(function () {
'use strict';

$('img.svg').each(function () {
  var $img = $(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  $.get(imgURL, function (data) {
    var $svg = $(data).find('svg');

    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');

    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
    }
    $img.replaceWith($svg);
  }, 'xml');
});

$('.hamburger-box').click(function (e) {
  $('.mobile-panel').addClass('is-visible');
});

$('.close-panel').click(function (e) {
  $('.mobile-panel').removeClass('is-visible');
});

if (window.matchMedia('(min-width: 768px)').matches) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass("is-fixed");
    } else {
      $('.header').removeClass("is-fixed");
    }
  });
}
$('.scroll-link').click(function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top - 50;
  if ($('.mobile-panel').is(':visible')) {
    top = $(id).offset().top;
    $('.mobile-panel').hide();
  }
  $('body,html').animate({ scrollTop: top }, 1000);
});

$('.review__tab__item').click(function (e) {
  e.preventDefault();
  var tab = $(this).attr('data-tab');
  $('.review__tab__item').removeClass('is-active');
  $(this).addClass('is-active');
  $('.review__content__item').removeClass('active');
  $('' + tab).addClass('active');
});

}());
//# sourceMappingURL=main.js.map
