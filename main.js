jQuery(document).ready(function ($) {
  
    var slideCount = $('#slider ul li').length; //get the number of items in the list
    var slideWidth = $('#slider ul li').width(); //get the width of each list item
    var slideHeight = $('#slider ul li').height(); //get the height of each list
    var sliderUlWidth = slideCount * slideWidth; //get the total width of the unordered list
    var runnning = false;

    $('#slider').css({ width: slideWidth, height: slideHeight });
    /*
        sets the slider id properties
        -> width = width of each items
        -> height of the each list
     */
    
    $('#sliderUl').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    /*
        sets the sliderUl id properties
        -> width = width of the whole unordered list
        -> margin = negative value of the slide width
     */
    
    $('#sliderUl li:last-child').prependTo('#sliderUl');
    /*
        when the sliderUl li meets the last-element
        it will go back to the first element    
    */

    function moveLeft(){
        $('#slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
    /*
        moves the margin of the currently displayed items
        it will add a margin to the slider ul equal to the width of each item
     */

    function moveRight() {
        $('#sliderUl').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 100 );
    };
    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
    $('a.play').click(function(){
        slideShow();
    });

});    
