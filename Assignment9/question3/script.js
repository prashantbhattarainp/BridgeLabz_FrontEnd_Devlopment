$(document).ready(function(){

    // 1. Question click → toggle answer
    $(".question").click(function(){
        $(this).next(".answer").toggle();
    });

    // 2. Hover → change color
    $(".question").hover(
        function(){ $(this).css("color","blue"); },
        function(){ $(this).css("color","black"); }
    );

    // 3. Double click → collapse all
    $(".question").dblclick(function(){
        $(".answer").slideUp();
    });

    // 4. Focus on input → highlight parent
    $("input").focus(function(){
        $(this).parent().css("background","lightyellow");
    });

    // 5. Blur → reset
    $("input").blur(function(){
        $(this).parent().css("background","white");
    });

});