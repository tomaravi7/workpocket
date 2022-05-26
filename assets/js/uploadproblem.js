var maxval = document.getElementById("pricerange").max;

$(document).on('input', '#pricerange', function() {
    $('#pricerangeout').html( $(this).val() );

    if($(this).val()==maxval) {
        
    $('#rangeplustext').removeClass("disappear");

    }

    else {
        
    $('#rangeplustext').addClass("disappear");
    }
});

servicename = localStorage.getItem("serviceopened")

if(servicename!=null){
document.getElementById("servicename").innerHTML= servicename;
document.getElementById("serviceselection").style.display="none"

}
else{
    document.getElementById("servicename").style.display="none"
}


$('select[name="serviceselection"]').find('option[value="'+servicename+'"]').attr("selected",true);


localStorage.clear("serviceopened")

// on input in the dropdown menu

function selectedInDropdown(){
    servicename = document.getElementById("serviceselection").value;
    if(servicename!="Select Service"){
    document.getElementById("servicename").innerHTML= servicename;
    document.getElementById("serviceselection").style.display="none"
    document.getElementById("servicename").style.display="" 

    //check if labor service is selected in the dropdown menu
    checkLabourServiceSelected();
}

}


// on clicking the edit icon

function editTheService(){
    document.getElementById("serviceselection").style.display="block"
    document.getElementById("servicename").style.display="none"
}


//check and display the labor group size div if servicename is Labor
function checkLabourServiceSelected(){

if(servicename=="Construction Labor"){
    document.getElementById("laborsizediv").style.display="flex"
}

else{
    document.getElementById("laborsizediv").style.display="none"
}

}

//display the labor group size number input box

groupsizeinpt = document.getElementById("groupsizeinpt");
function getTheGroupSize() {
    if (document.getElementById('laborgroup').checked) {
        groupsizeinpt.style.display = 'flex';
    } else {
        groupsizeinpt.style.display = 'none';
    }
  }