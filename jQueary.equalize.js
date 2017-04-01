(function ($) {
    var qh = {
        setHeight: function (jQueryObject, rowsCount, countRowElements) {
            for (var i = 0, firstRowElement = 0, lastRowElement = countRowElements; i < rowsCount; i++, lastRowElement += countRowElements) {
                var rowsHeight = []; //Массив со значениями высоты элементов в строке
                var sliceHeights = jQueryObject.slice(firstRowElement, lastRowElement); //Записываем элементы каждой строки
                sliceHeights.each(function (i) {
                    rowsHeight.push($(this).height());
                });
                sliceHeights.height(Math.max.apply(Math, rowsHeight)); //Устанавливаем высоту всем элементам строки, выбрав максимальное значение из массива
                firstRowElement += countRowElements; //устанавливаем индекс первого элемента на следующей строке
            }
            return jQueryObject;
        },
        getCountRowElements: function (jQueryObject) {
            var countRowElements = 0;
            jQueryObject.each(function () {
                if (jQueryObject.first().offset().top === $(this).offset().top)
                    ++countRowElements;
            });
            return countRowElements;
        }
    };
    $.fn.equalizeHeight = function () {
        var countRowElements, countRows;
        this.css('height', 'auto');
        countRowElements = qh.getCountRowElements(this);
        countRows = Math.ceil(this.length / countRowElements); //Получаем количество строк
        qh.setHeight(this, countRows, countRowElements);
        return this;
    };
})(jQuery);
