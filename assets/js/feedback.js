$(document).ready(function(){

    $("input[type='radio']").click(function(){
      $(".ratingvalue").show();

          var rateval =  $("input[type='radio']:checked").val();
          if (rateval<3) {
          $('.ratingvalue').css('color','red'); 
          $(".ratingvalue").text(rateval);
       }else{
          $('.ratingvalue').css('color','green');
          $(".ratingvalue").text(rateval);
       }
       });
    });