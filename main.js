jQuery(document).ready(function ($) {

    var counter = 0;
    var slideWidth = $('#slider ul li').width();
    var movement;
    var count = 1;
    $('#slider').load(slideshow());

    $('a.control_prev').click(function () { 
        clearTimeout(movement); 
        left();
    });
    
    $('a.control_next').click(function () { 
        clearTimeout(movement); 
        right();
    });

    //$('#sliderPlay').click(function(){ $('#sliderPlay').css('background-image', "url('resources/play.png')")});

    //$('#sliderPlay').click(function(){ $('#sliderPlay').css('background-image', "url('resources/pause.png')") });

    $('#slider').hover(
        function(){ 
            $('#sliderPlay').css('background-image', "url('resources/play.png')"); 
            clearTimeout(movement); }
        , function(){ 
            $('#sliderPlay').css('background-image', "url('resources/pause.png')"); 
            slideshow();}
    );    

    function slideshow()
    {       
        movement = setInterval(function(){
            $('#slider ul').animate({'margin-left':"-" + slideWidth + 'px'}
            , 2000
            ,function(){  $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('margin-left','');
            imageCounter(1);
        });    
        },5000);
    }
    
    function imageCounter(counter){
        count = count + counter;
        if(count > 3)
        {
            count = 1;
            $('#sliderPlay small').html(count + '/3');
        }
        else if(count < 1)
        {
            count = 3;
            $('#sliderPlay small').html(count + '/3');
        }
        else{
            $('#sliderPlay small').html(count + '/3');    
        }
    }


    function right()
    {
        $('#slider ul').animate({'margin-left':
            "-" + slideWidth + 'px'}, 2000
            ,function(){
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('margin-left','');
            imageCounter(1);
        });    
    }
    function left()
    {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('margin-left',"-" + slideWidth + "px");
        $('#slider ul').animate({ 'margin-left': '0px'},2000,function(){ imageCounter(-1);});
    }
});