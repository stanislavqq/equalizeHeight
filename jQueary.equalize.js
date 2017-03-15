 $.fn.equalizeHeight = function () {
    return this.each(function () {
      var $this = $(this),
              j = 0,
              children = $this.children();
      children.css('height', 'auto');
      $this.children().each(function (i) {
        if (children.first().offset().top === $(this).offset().top)
          j++;
      });

      var rowsCount = Math.ceil(children.length / j);
      for (var i = 0, elementsCountRow = j, k = 0; i < rowsCount; i++, j = j + elementsCountRow) {
        var maxHeight = [];
        var sliceHeights = children.slice(k, j);
        sliceHeights.each(function () {
          maxHeight.push($(this).innerHeight());
        });
        sliceHeights.height(Math.max.apply(Math, maxHeight));
        k = k + elementsCountRow;
      }
    });
  };
