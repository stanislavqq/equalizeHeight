(function ($) {
  $(document).ready(function () {
    $('body').append('<div class="debuger"></div>');
    $('.debuger').css({
      'position': 'fixed',
      'top': '10px',
      'right': '10px',
      'opacity': '0.6',
      'width': '20%',
      'z-index': '10',
      'background': '#333',
      'color': '#fff',
      'padding': '15px',
      'box-sizing': 'border-box',
      'font-size': '16px'
    });
    $('.debuger').hover(function () {
      $(this).css({
        'opacity': '1'
      });
    });
    debug(['width', 'height', 'scroll']);
  });
  function debug(settings) {
    for (var i = 0; i <= settings.length; i++) {
      if (settings[i] == 'width') {
        $('.debuger').append('<div class="debug-field debug-width"></div>');
        $('.debug-width').text("width: " + $(window).width() + 'px');
        $(window).resize(function () {
          $('.debug-width').text("width: " + $(window).width() + 'px');
        });
      }
      if (settings[i] == 'height') {
        $('.debuger').append('<div class="debug-field debug-height"></div>');
        $('.debug-height').text("height: " + $(window).height() + 'px');
        $(window).resize(function () {
          $('.debug-height').text("height: " + $(window).height() + 'px');
        });
      }
      if (settings[i] == 'scroll') {
        $('.debuger').append('<div class="debug-field debug-scroll"></div>');
        $('.debug-scroll').text("scroll: " + $(window).scrollTop() + 'px');
        $(window).scroll(function () {
          $('.debug-scroll').text("scroll: " + $(window).scrollTop() + 'px');
        });
      }
    }
  }
})(jQuery);

