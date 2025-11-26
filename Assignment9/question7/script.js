$(document).ready(function(){

    $("#search").keyup(function(){
        let text = $(this).val().toLowerCase();
        let count = 0;

        $("#courses li").each(function(){
            if($(this).text().toLowerCase().includes(text)){
                $(this).show().css("background","yellow");
                count++;
            } else {
                $(this).hide();
            }
        });

        $("#count").text(count);
    });

});