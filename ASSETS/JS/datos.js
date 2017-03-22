function imprime(){
  var resultado = document.getElementById("reporte");
  var ingNombre = document.getElementById("name").value;
  var ingApellido = document.getElementById("lastName").value;
  var ingDNI = document.getElementById("nDNI").value;
  var ingDireccion = document.getElementById("direction").value;
  var totDatos = document.getElementsByClassName("datos");
  if(totDatos[0].value.length > 0 && totDatos[1].value.length > 0 && totDatos[2].value.length > 0 && totDatos[3].value.length > 0){
    resultado.innerHTML= "<ul>"
                          +"<li>Nombre:  "+ingNombre  +"</li>"
                          +"<li>Apellido:"+ingApellido+"</li>"
                          +"<li>DNI:     "+ingDNI     +"</li>"
                          +"<li>Dirección:"+ingDireccion+"</li>"
                        +"</ul>";
  }
}
function limpiar(){
  document.getElementById("formulario").reset();
}

window.addEventListener("load", function(){
  document.getElementById("btnImprime").addEventListener("click", imprime);
  document.getElementById("btnLimpia").addEventListener("click", limpiar);
});
