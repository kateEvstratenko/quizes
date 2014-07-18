window.onerror = function (e) {
    
    var newNotification = $('<div/>', {
        text: 'Произошла непредвиденная ошибка'
    });

    newNotification.css({
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

    newNotification
        .appendTo('body')
        .animate({
            opacity: '1'
        }, 500)
        .delay(3000)
        .animate({
            opacity: '0'
        }, 500);

}();

