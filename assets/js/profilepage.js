profilesection=localStorage.getItem("profilesection")
if(profilesection!=null){
    if(profilesection=="#profiledetails"){
        $('a[href="#profiledetails"]').tab('show')
    }
    else if(profilesection=="#viewbookings"){
        $('a[href="#viewbookings"]').tab('show')
    }
    else if(profilesection=="#viewwishlist"){
        $('a[href="#viewwishlist"]').tab('show')
    }
}
