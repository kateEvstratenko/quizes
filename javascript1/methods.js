function GetResultValue(a, b, flag) {
    console.clear();


    var c = a * flag + b * !flag;
    console.log(Number(c));


    var c = Number(flag && a) + Number(!flag && b);
    console.log(c);
    

    var c = (flag || b) * (!flag || a);
    console.log(Number(c));


    var c = (!flag && b) || (flag && a);
    console.log(Number(c));


    var c = (isNaN(0 / flag) * b) + (!isNaN(0 / flag) * a);
    console.log(Number(c));


    var c = (flag.toString() == 'true') * a + (flag.toString() == 'false') * b;
    console.log(Number(c));
};

