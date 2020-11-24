var stageElement = $('#stage');
var gunElement = $('#gun');
var balls = [];
var bullets = [];

for(var i=0;i<20;i++){
    var ballElement = $('<div></div>');
    ballElement.addClass('balls');
    stageElement.append(ballElement)
    balls.push(ballElement);

}

for(var m=0; m<20;m++){
    var bulletElement = $('<div></div>');
    bulletElement.addClass('bullets');
    stageElement.append(bulletElement);
    bullets.push(bulletElement);
}


setInterval(function (){
    for(var j=0; j < balls.length; j++){
        $(balls[j]).css('left',''+($('body').innerWidth()-$(balls[j]).innerWidth())*Math.random()+'px');
        $(balls[j]).css('top',''+($('body').innerHeight()-$(balls[j]).innerHeight())*Math.random()*0.5+'px');

    }
},1000);

$('body').mousemove(function (event){
    gunElement.css('left',event.clientX+'px');
    $('.bullets').css('left',event.clientX+'px');
})

var height = $('body').innerHeight();
var bulletCount=0;

$('body').click(function (){
    for(var l=0;l<balls.length;l++){
        if(Math.abs($(balls[l]).offset().left-$('#gun').offset().left)<25){
            $(balls[l]).css('backgroundColor','red');
        }
    }
    $(bullets[bulletCount]).css('bottom',height+'px');
    bulletCount++;

})


/*function randomColor() {
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}*/



