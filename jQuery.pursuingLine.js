  $.fn.pursuingLine = function (lineClass = 'dec-line') {
    this.append('<div class="' + lineClass + '"></div>');
    var $this = this;
    var navItem = $this.find('li'),
            line = $this.children('.' + lineClass);

    navItem.each(function (i) {
      $(this).hover(function () {
        line.css({
          width: $(this).find('a').width()
        });
        line.offset({
          left: $(this).offset().left + parseInt($(this).css('padding-left')),
          top: $(this).offset().top + $(this).height() + 3
        });
      }, function () {
        line.css({
          width: 0
        });
      });
    });
    return this;
  };
