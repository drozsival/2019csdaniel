init();
 
function init(){
    for(var r=0; r<9; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}
 
function startRace(){
    TweenMax.to("#car1",2,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car1",.8,{rotation: -90,delay:1.2, ease:Sine.easeOut});
}
