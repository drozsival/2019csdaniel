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
    TweenMax.to("#car1",1.5,{x:500, y:-290,delay:1.7, ease:Sine.easeOut});
    TweenMax.to("#car1",.8,{rotation: -180,delay:2.3, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-100, y:-270,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",.8,{rotation: -270,delay:3.9, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{y:10,delay:5, ease:Sine.easeOut});
    TweenMax.to("#car1",.8,{rotation: -360,delay:6, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{y:0,x:150,delay:7, ease:Sine.easeOut});
 
    TweenMax.to("#car2",2,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car2",.8,{rotation: -90,delay:1.4, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:500, y:-300,delay:2.3, ease:Sine.easeOut});
    TweenMax.to("#car2",.8,{rotation: -190,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:-80, y:-290,delay:3.3, ease:Sine.easeOut});
    TweenMax.to("#car2",.8,{rotation: -270,delay:4, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{y:10,delay:5.4, ease:Sine.easeOut});
    TweenMax.to("#car2",.8,{rotation: -360,delay:5.6, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{y:0,x:150,delay:6.5, ease:Sine.easeOut});
 
    TweenMax.to("#car3",2,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car3",.8,{rotation: -90,delay:1, ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:550, y:-300,delay:1.4, ease:Sine.easeOut});
    TweenMax.to("#car3",.8,{rotation: -190,delay:2.2, ease:Sine.easeOut});
    TweenMax.to("#car3",2,{x:-100, y:-300,delay:2.7, ease:Sine.easeOut});
    TweenMax.to("#car3",.8,{rotation: -270,delay:3.5, ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{y:10,delay:4, ease:Sine.easeOut});
    TweenMax.to("#car3",.8,{rotation: -360,delay:4.8, ease:Sine.easeOut});
    TweenMax.to("#car3",2,{y:0,x:150,delay:5.5, ease:Sine.easeOut});
}
