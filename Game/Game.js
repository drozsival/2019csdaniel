    for(var r=0; r<5; r++){
        if(r%2==0){
            for(var c=0; c<5; c++){
                $('#outer').append("<div class='dot'></div>");
                if(c<4){
                    $('#outer').append("<div class='line'></div>");
                }
            }
        }
        else{
            for(var c=0; c<5; c++){
                $('#outer').append("<div class='vert'></div>");
                if(c<4){
                    $('#outer').append("<div class='box'></div>");
                }
            }
        }
    }
