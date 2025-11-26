$(document).ready(function(){

    // 1. Click manager → highlight direct reports
    $(".manager").click(function(){
        $(this).nextAll(".employee").addClass("highlight");
    });

    // 2. Hover employee → show contact info
    $(".employee").hover(
        function(){ $(this).next().append("<span> - Contact: 99999</span>"); },
        function(){ $(this).find("span").remove(); }
    );

    // 3. Click department → highlight all
    $(".department").click(function(){
        $(this).children(".employee").css("background","#c8f7c5");
    });

    // 4. Random employee → highlight siblings
    let random = Math.floor(Math.random() * $(".employee").length);
    $(".employee").eq(random).siblings().addClass("highlight");

    // 5. Collapse/expand team
    $(".department h2").click(function(){
        $(this).parent().find(".employee").slideToggle();
    });

});