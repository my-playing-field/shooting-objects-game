var stageElement = $('#stage');
var balls = [];
for(var i=0;i<10;i++){
    var ballElement = $('<div></div>');
    ballElement.addClass('balls');
    stageElement.append(ballElement)
    balls.push(ballElement);
    ballElement.css('backgroundColor',randomColor());

}

setInterval(function (){
    for(var j=0; j < balls.length; j++){
        $(balls[j]).css('left',''+($('body').innerWidth()-$(balls[j]).innerWidth())*Math.random()+'px');
        $(balls[j]).css('top',''+($('body').innerHeight()-$(balls[j]).innerHeight())*Math.random()*0.5+'px');
/*
        $(balls[j]).css('borderRadius',Math.random()*100+'%');
*/
    }
},1000);


function randomColor() {
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}

$('body').mousemove(function (event){
    $('#gun').css('left',event.clientX+'px');
})