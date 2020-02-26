var numRows = 5;
var numCols = 5;    
    
    for(var r=0; r<numRows*2; r++){
        if(r%2==0){
            for(var c=0; c<numCols; c++){
                console.log("first for");
                $('#outer').append("<div class='dot'></div>");
                if(c<numCols){
                    $('#outer').append("<div class='line'></div>");
                }
            }
        }
        else{
            for(var c=0; c<numRows; c++){
                console.log("second for")
                $('#outer').append("<div class='vert'></div>");
                if(r<numRows-1){
                    $('#outer').append("<div class='box'></div>");
                }
            }
        }
    }
