console.log("loaded js");
for(var r=0; r<12; r++)
        for(var c=0; c<12; c++){
            $('#outer').append("<div class='innerbox'></div>");
        }

$('.box').click(
    function(){
        console.log("click box")
        var myColor = $(this).css('background-color');
        $('#longbox').css('background-color', myColor);
    }
);

$('.type3, .type4').click(
    function(){
        $('#longbox').css('color', $(this).css('color'));
        $('#longbox').text($(this).text());
    }
);