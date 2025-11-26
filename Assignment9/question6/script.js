$(document).ready(function(){

    // Subscribe click
    $("#topics").on("click", ".topic", function(){
        $("#msg").text(`Subscribed to ${$(this).text()}`).css("color","green");
    });

    // Add new topic dynamically
    $("#addTopic").click(function(){
        $("#topics").append("<li class='topic'>New Topic</li>");
    });

    // Remove topic with off()
    $("#remove").click(function(){
        $("#topics .topic").last().off("click").remove();
        $("#msg").text("Topic removed").css("color","red");
    });

});