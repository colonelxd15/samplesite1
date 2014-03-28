jQuery(document).ready(function ($) {

    var counter = 0;
    var slideWidth = $('#slider ul li').width();

    $('a.control_prev').click(function () { 
        left();
    });
    $('a.control_next').click(function () { 
        right();    
    });
        
    function right()
    {
        counter--;
        $('#slider ul').animate({'margin-left':
            counter * slideWidth + 'px'}, 1000
            ,function(){
            $('#slider ul li:last-child').appendTo('#slider ul');
            //$('#slider ul').css('margin-left','');
        });
        console.log(slideWidth);
               
    }
    function left()
    {
        counter++;
        $('#slider ul').animate({ 'margin-left': counter * slideWidth + 'px'}, 1000
            ,function(){
            $('#slider ul li:first-child').prependTo('#slider ul');
            //$('#slider ul').css('margin-left','');
        });
        console.log(slideWidth);
    }

});