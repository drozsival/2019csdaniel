$('#sumButton').click(
    function(){
        
        /*
         * HINT: parseInt() -  https://www.w3schools.com/jsref/jsref_parseint.asp 
         * 
         **/
        var a = parseInt($('#sumA').val());
        var b = parseInt($('#sumB').val());
        var sum = a + b;
        $('#sumTotal').text(sum);
    }
);

$('#subButton').click(
    function(){
        var a = parseInt($('#subA').val());
        var b = parseInt($('#subB').val());
        var sum = a - b;
        $('#subTotal').text(sum);
    }
);

$('#multButton').click(
    function(){
        var a = parseInt($('#multA').val());
        var b = parseInt($('#multB').val());
        var sum = a * b;
        $('#multTotal').text(sum);
    }
);

$('#divButton').click(
    function(){
        var a = parseInt($('#divA').val());
        var b = parseInt($('#divB').val());
        var sum = a / b;
        $('#divTotal').text(sum);
    }
);