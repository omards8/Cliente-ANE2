function caja() { 
  var caja1 = document.getElementById("caja1"); 

  // creo un elemento checkbox  
  var checkbox = document.createElement('input'); 

  // Asigno los atributos 
  // al checkbox creado
  checkbox.type = "checkbox"; 
  checkbox.name = "name"; 
  checkbox.value = "value"; 
  checkbox.id = "id"; 

  checkbox.onchange = function(){
    if(document.getElementById('button').disabled == !this.checked){
        document.getElementById('button').disabled = this.checked;
    } else {
        document.getElementById('button').disabled = !this.checked;
    }
}
  // creo una etiqueta para el checkbox 
  var label = document.createElement('label'); 

  // asigno atributos a
  // la etiqueta creada
  label.htmlFor = "id"; 

  // Adjunto el texto necesario
  // para la etiqueta creada anteriormente
  label.appendChild(document.createTextNode('Imagen seleccionada.')); 

  // Adjunto el checkbox
  // y la etiqueta al div  
  caja1.appendChild(checkbox); 
  caja1.appendChild(label); 
}
function cambio() {
    var image = document.getElementById('imagen1');
    if (image.src.match("on")) {
        image.src = "https://i.pinimg.com/600x315/40/ab/7a/40ab7a26c90ee682a23e2dd55f978a65.jpg";
    } else {
        image.src = "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/05/20/15268197318458.jpg";
    }
}