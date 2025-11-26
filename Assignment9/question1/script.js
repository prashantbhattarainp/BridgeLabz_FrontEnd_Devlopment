$(document).ready(function () {

    // 1. Greeting based on time
    let hour = new Date().getHours();
    if (hour < 12) $("#greeting").text("Good Morning!");
    else if (hour < 17) $("#greeting").text("Good Afternoon!");
    else $("#greeting").text("Good Evening!");

    // 2. Change greeting button
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself! You can do it!");
    });

    // 3. Toggle welcome message
    $("#toggleWelcome").click(function () {
        $("#welcomeMsg").toggle();
    });

    // 4. Alert on click
    $("#greeting").click(function () {
        alert("Greeting clicked!");
    });
});