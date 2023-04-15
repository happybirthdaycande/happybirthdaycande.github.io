var imagenSeleccionada;

function seleccionarImagen() {
	var input = document.getElementById("seleccionar-imagen");
	
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		
		reader.onload = function(e) {
			var imagen = document.createElement("img");
			imagen.src = e.target.result;
			document.getElementById("imagen-seleccionada").innerHTML = "";
			document.getElementById("imagen-seleccionada").appendChild(imagen);
			imagenSeleccionada = e.target.result;
		}
		
		reader.readAsDataURL(input.files[0]);
	}
}
