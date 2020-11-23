var done = false;
var count =1;
var buttonElement = $('button');
buttonElement.click(function (){
    done=false;
    count++;
})
$('body').on('click',function (event){
    if($(event.target).hasClass('box')){
        if(done){
            $(event.target).css('backgroundColor','green');
        }
        else {
            if(count%2===0){
                $(event.target).css('backgroundColor','blue');
                done = true;
            }
            else{
                $(event.target).css('backgroundColor','yellow');
                done = true;
            }

        }
    }
})

