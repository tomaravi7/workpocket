window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop>500||document.documentElement.scrollTop>500){
        document.getElementById("custom-top").style.top = "0";
    }
    else{
        document.getElementById("custom-top").style.top = "-110px";
    }
}