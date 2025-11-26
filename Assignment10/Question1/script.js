$(document).ready(function () {

    $("#searchBox").on("keyup", function () {
        let value = $(this).val();

        $("#loading").show();

        $.ajax({
            url: `http://localhost:3001/products?q=${value}`,
            method: "GET",
            success: function (data) {
                $("#loading").hide();
                $("#results").empty();

                if (data.length === 0) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                data.forEach(item => {
                    $("#results").append(`
                        <div class="product">
                            <img src="${item.image}">
                            <div>
                                <h4>${item.name}</h4>
                                <p>Price: ₹${item.price}</p>
                            </div>
                        </div>
                    `);
                });
            }
        });
    });
});