// Version 1 → Slider
jq1(function(){
    setInterval(()=>{
        jq1("#carousel").fadeToggle();
    },3000);
});

// Version 2 → Modal + Tooltips
jq2(function(){
    jq2("#notify").click(function(){
        jq2("#modal").fadeIn().delay(1000).fadeOut();
    });

    jq2("body").attr("title","Dashboard Loaded!");
});