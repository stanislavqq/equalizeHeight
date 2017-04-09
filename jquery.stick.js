(function($){
 $.fn.stick = function (options) {
        var settings = $.extend({
            parent: this.closest('div'),
            margin: 60
        }, options);

        var $parent = settings.parent;
        console.log($parent);
        var elementOffsetTop = this.offset().top, //изначальная позиция блока относительно страницы
                elementHeight = this.height(), //высота блока
                $this = this,
                direction = null, //сюда присваеваем направление скрола "down" или "up"
                save = 0;

        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop(),
                    windowHeight = $(this).height(),
                    scrollBottom = scrollTop + windowHeight,
                    elementOffsetBottom = elementOffsetTop + elementHeight;

            if (scrollTop >= save) {
                direction = 'down';
            } else {
                direction = 'up';
            }
            save = scrollTop;
            if (scrollBottom >= $this.offset().top + settings.margin && scrollTop >= elementOffsetTop - settings.margin) {
                var glueToBottom = scrollBottom - elementOffsetBottom - settings.margin;
                var glueToTop = scrollTop - elementOffsetTop + settings.margin;
                if (scrollBottom - settings.margin >= $parent.offset().top + $parent.height()) {
                    direction = null;
                }
                if (direction === 'down' && scrollBottom >= $this.offset().top + elementHeight + settings.margin) {
                    $this.css('transform', 'translateY(' + glueToBottom + 'px)');
                } else if (direction === 'up' && scrollTop <= $this.offset().top - settings.margin) {
                    $this.css('transform', 'translateY(' + glueToTop + 'px)');
                }
            } else {
                save = 0;
                $this.css('transform', '');
            }
        });
        return this;
    };
})(jQuery)
