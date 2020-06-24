
// //Menu toggle-effect
// $(document).ready(function(){
//     $(".menu-icon").on("click",function(){
//       $("nav ul").toggleClass("showing");
//     });
//   });
  
//   //Scrolling Effect
//   $(window).on('scroll', function(){
//     if($(window).scrollTop()) {
//       $('nav').addClass('black');
//     }
//     else{
//       $('nav').removeClass('black')
//     }
//   })



function teste (){
  a = document.getElementById('jsonResult');

  var b = '';
  
  fetch('https://ragnarokapi.herokuapp.com/api/monster/1002')
  .then(function(response) {
    return response.json();
  })
  .then(function(myBlob) {
    var objectURL = JSON.stringify(myBlob, undefined, 4);
    b = objectURL;
    a.value = b;
  }); 

  

}

