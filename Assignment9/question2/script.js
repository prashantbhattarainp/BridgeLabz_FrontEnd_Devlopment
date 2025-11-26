$(document).ready(function(){

    // 1. Click → Highlight product
    $(".product").click(function(){
        $(this).toggleClass("highlight");
    });

    // 2. Hover → Show extra details
    $(".product").hover(
        function(){ $(this).append("<small> - More details...</small>"); },
        function(){ $(this).find("small").remove(); }
    );

    // 3. Favorite icon toggle
    $(".fav").click(function(e){
        e.stopPropagation(); // prevent parent click
        $(this).toggleClass("selected");
    });

    // 4. Style discounted products
    $("[discount]").addClass("discount");

    // 5. Alert if out of stock
    $(".product").each(function(){
        if($(this).data("stock") == 0){
            $(this).click(function(){
                alert("This product is OUT OF STOCK!");
            });
        }
    });

});