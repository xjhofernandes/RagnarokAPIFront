function FazerRequisição (){
  request = document.getElementById('request');
  resultado = document.getElementById('jsonResult');

  fetch('https://ragnarokapi.herokuapp.com/' + request.value)
  .then(function(response) {
    return response.json();
  })
  .then(function(myBlob) {
    var objectURL = JSON.stringify(myBlob, undefined, 4);
    resultado.value = objectURL;
  }); 
}

