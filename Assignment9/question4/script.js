$(document).ready(function(){

    // 1. Hide banners
    $("#hide").click(()=> $(".banner").hide());

    // 2. Show banners
    $("#show").click(()=> $(".banner").show());

    // 3. Slide toggle
    $("#slide").click(()=> $(".banner").slideToggle());

    // 4. Fade toggle
    $("#fade").click(()=> $(".banner").fadeToggle());

    // 5. Auto rotate
    let index = 0;
    setInterval(()=>{
        $(".banner").fadeOut();
        $(".banner").eq(index).fadeIn();
        index = (index + 1) % $(".banner").length;
    }, 5000);

});