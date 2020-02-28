var numRows = 5;
var numCols = 5;    
    
    for(var r=0; r<numRows*2; r++){
        if(r%2==0){
            for(var c=0; c<numCols; c++){
                $('#outer').append("<div class='dot'></div>");
                if(c<numCols-1){
                    var tValue = r/2;
                    var bValue = 
                    $('#outer').append("<div class='line' t='"+tValue+"'></div>");
                }
            }
        }
        else{
            if(r<numRows*2-1){
                for(var c=0; c<numCols; c++){
                    $('#outer').append("<div class='vert'></div>");
                    if(c<numCols-1){
                        $('#outer').append("<div class='box'></div>");
                    }
                }
            }
        }
    }
