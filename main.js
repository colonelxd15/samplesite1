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
        $('#slider ul').animate({'margin-left':
            "-" + slideWidth + 'px'}, 1000
            ,function(){
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('margin-left','');
        });    
    }
    function left()
    {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('margin-left',"-" + slideWidth + "px");
        $('#slider ul').animate({ 'margin-left': '0px'}, 1000);
    }

});