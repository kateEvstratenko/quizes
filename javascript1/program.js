(function () {
    var a = document.getElementById('aField');
    var b = document.getElementById('bField');
    var flag = document.getElementById('flag');


    var $form = document.getElementById('inputForm');
    $form.addEventListener('click', function (e) {
        if (e.target.type == 'button') {
            GetResultValue(a.value, b.value, flag.checked);
        }
    }, false);
    
})();

