// price range bar

var maxval = document.getElementById("pricerange").max;

$(document).on('input', '#pricerange', function() {
    $('#pricerangeout').html( $(this).val() );

// plus sign of price range bar show only on max value of bar
    
    if($(this).val()==maxval) {
        
        $('#rangeplustext').removeClass("disappear");
    
        }
    
        else {
            
        $('#rangeplustext').addClass("disappear");
        }
});

//change name of service to the selected service name

document.getElementById("monthlyservicename").innerHTML=localStorage.getItem("serviceopened")

// change icon of about service to that of the selected service

iconimgurl="./assets/images/servicesimage/"+localStorage.getItem("serviceimg")
document.getElementById("avatarimg").src=iconimgurl;



function openBookingBox() {
    document.getElementById("bookingbox").style.display = "block";
  }
  
  function closeBookingBox() {
    document.getElementById("bookingbox").style.display = "none";
  }

function selectedInDropdown(){
  timeOfMonthlyService = document.getElementById("timeOfMonthlyService");
  if(timeOfMonthlyService.value=="Custom Time"){
    document.getElementById("customtimecont").style.display="flex";
  }
  else{
    document.getElementById("customtimecont").style.display="none";
  }
}