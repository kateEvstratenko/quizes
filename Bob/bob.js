(function(){
    'use strict';

    window.onerror = function () {

        var notificationError = $('<div/>', {
            text: 'Произошла непредвиденная ошибка'
        });

        notificationError.css({
            'position': 'absolute',
            'z-index': '9999',
            'top': '0',
            'right': '0',
            'width': '200px',
            'min-height': '20px',
            'padding': '10px',
            'background': '#FF3030',
            'opacity':'0'
        });
        notificationError.addClass('notification');

        notificationError
            .appendTo('body')
            .animate({
                opacity: '1'
            }, 500)
            .delay(3000)
            .animate({
                opacity: '0'
            }, 500);

        setTimeout(
            function () {
                $('.notification').remove();
            }, 4000);
    };
})();
