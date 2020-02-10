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

/*
    function(){
        var a = parseInt($('#sumA').val());
        var b = parseInt($('#sumB').val());
        var sum = a  b;
        $('#sumTotal').text(sum);
    }
);*/