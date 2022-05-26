// function to open service.html page after you click on any one service
function openTheService(servicename) {
    window.location.href = "uploadproblem.html"
    localStorage.setItem("serviceopened", servicename);
}

$( '#overlay, #close').on('click', function(event) {
    $("#creditbox, #overlay").hide();
});

$( '#creditsboxtext').on('click', function(event) {
    $("#creditbox, #overlay").show();
});

function openMonthlyService(servicename,serviceimg){
    window.location.href = "monthlypaidservices.html"
    localStorage.setItem("serviceopened", servicename);
    localStorage.setItem("serviceimg", serviceimg);
}

function openProfilePage(profilesection){
    window.location.href = "profilepage.html"
    localStorage.setItem("profilesection",profilesection)
}