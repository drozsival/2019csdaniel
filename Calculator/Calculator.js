$('#sumButton').click(
    function(){
        
        /*
         * HINT: parseInt() -  https://www.w3schools.com/jsref/jsref_parseint.asp 
         * 
         **/
        var a = $('#sumA').val();
        var b = $('#sumB').val();
        var sum = a + b;
        $('#sumTotal').text(sum);
    }
);
