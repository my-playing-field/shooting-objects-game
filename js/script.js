var stageElement = $('#stage');
var gunElement = $('#gun');
var balls = [];
var bullets = [];

var noOfObjects = prompt('Number of objects to shoot down: ');
var noOfBullets = prompt('Number of bullets: ');


for(var i=0;i<noOfObjects;i++){
    var ballElement = $('<div</div>');
    ballElement.addClass('balls');
    stageElement.append(ballElement)
    balls.push(ballElement);

}

for(var m=0; m<noOfBullets;m++){
    var bulletElement = $('<div></div>');
    bulletElement.addClass('bullets');
    stageElement.append(bulletElement);
    bullets.push(bulletElement);
}


setInterval(function (){
    for(var j=0; j < balls.length; j++){
        $(balls[j]).css('left',($('body').innerWidth()-$(balls[j]).innerWidth())*Math.random()+'px');
        $(balls[j]).css('top',($('body').innerHeight()-$(balls[j]).innerHeight())*Math.random()*0.5+'px');
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
        if((Math.abs($(balls[l]).offset().left-$('#gun').offset().left)<25) && (bulletCount<bullets.length)){
            $(balls[l]).css('backgroundColor','transparent');
        }
    }
    $(bullets[bulletCount]).css('bottom',height+'px');
    bulletCount++;

})





