
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