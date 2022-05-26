$("#signupcontainer").hide()

$( '#signupbtn').on('click', function(event) {
    $("#signincontainer").hide()
    $("#signupcontainer").show();
    $('#signupbtn').addClass("active");
    $('#signinbtn').removeClass("active");
    $('#signinbtn').addClass("underlinehover");
    $('#signupbtn').removeClass("underlinehover");
});

$( '#signinbtn').on('click', function(event) {
    $("#signupcontainer").hide()
    $("#signincontainer").show();
    $('#signinbtn').addClass("active");
    $('#signupbtn').removeClass("active");
    $('#signupbtn').addClass("underlinehover");    
    $('#signinbtn').removeClass("underlinehover");
});