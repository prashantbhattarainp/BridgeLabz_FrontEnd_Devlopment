$(document).ready(function(){

    $("#add").click(function(){
        $("#posts").append("<p>New Post Added!</p>");
    });

    $("#featured").click(function(){
        $("#posts").prepend("<p><strong>FEATURED:</strong> Important Update</p>");
    });

    $("#remove").click(function(){
        $("#posts p").last().remove();
    });

    // Highlight posts with 'Update'
    $("#posts").on("DOMNodeInserted", function(){
        $("#posts p:contains('Update')").css("background","lightgreen");
    });

});