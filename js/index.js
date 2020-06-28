function FazerRequisição (){
  request = document.getElementById('request');
  resultado = document.getElementById("container");

  fetch('https://ragnarokapi.herokuapp.com/' + request.value)
  .then(function(response) {
    return response.json();
  })
  .then(function(myBlob) {
    var objectURL = JSON.stringify(myBlob, undefined, 4);
    resultado.lastElementChild.innerHTML = "";
    resultado.appendChild(renderjson.set_icons('\u25BC', '\u25B6').set_show_to_level(3)(myBlob));
  }); 
}

