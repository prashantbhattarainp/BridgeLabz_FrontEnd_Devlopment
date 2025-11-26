$(document).ready(function(){

    let emails = ["test@gmail.com", "user@gmail.com"];

    $("#regForm").submit(function(e){
        e.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let pass = $("#pass").val();

        let valid = true;

        // Reset styles
        $("input").css("border","1px solid #ccc");

        // Name validation
        if(name === ""){
            $("#name").css("border","2px solid red");
            valid = false;
        }

        // Email validation
        let pattern = /\S+@\S+\.\S+/;
        if(!pattern.test(email) || emails.includes(email)){
            $("#email").css("border","2px solid red");
            valid = false;
        }

        // Password validation
        if(pass.length < 8){
            $("#pass").css("border","2px solid red");
            valid = false;
        }

        if(valid){
            $("#msg").text("Registration Successful!").css("color","green");
        } else {
            $("#msg").text("Fix errors and try again").css("color","red");
        }
    });

});