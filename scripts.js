

function buscarAniversario() {
    var fecha = document.getElementById("fecha").value;
    var resultado = document.getElementById("resultado-busqueda");

    // Comprobar si ya se ha realizado una búsqueda anterior
    if (resultado.innerHTML !== "") {
        resultado.style.display = "none"; // ocultar el resultado anterior
    }

    // Buscar la fecha en la lista de aniversarios
    else if (fecha === "01/06/22") {
        resultado.innerHTML = "<h1>nuestro primer mes juntos</h1><img src='img/mes 1.3.jpg'><img src='img/mes 1.4.jpg'><img src='img/mes 1.2.jpg'><img src='img/mes1.jpg'><h2>nuestro primer mes fue una cosa de locos, sentimos un monton de cosas... nos conocimos un montonaso, y de mi parte me enamoraba dia a dia, Te amo mucho. Gracias por un lindo mes.</h2>";
    } else if (fecha === "01/07/22") {
        resultado.innerHTML = "<h1>segundo mes juntitos</h1><video width='720' height='480' controls><source src='videos/Video de WhatsApp 2023-04-07 a las 05.01.16.mp4' type='video/mp4'></video>";
    } else if (fecha === "01/08/22") {
        resultado.innerHTML = "<h2>Aniversario 3</h2><img src='img/aniversario3.jpg'>";
    } else if (fecha === "01/09/22") {
        resultado.innerHTML = "<h2>Aniversario 4</h2><img src='img/aniversario4.jpg'>";
    } else if (fecha === "01/10/22") {
        resultado.innerHTML = "<h2>Aniversario 5</h2><img src='img/aniversario5.jpg'>";
    } else if (fecha === "01/11/22") {
        resultado.innerHTML = "<h2>Aniversario 6</h2><img src='img/aniversario6.jpg'>";
    } else if (fecha === "01/12/22") {
        resultado.innerHTML = "<h2>Aniversario 7</h2><img src='img/aniversario7.jpg'>";
    } else if (fecha === "01/01/23") {
        resultado.innerHTML = "<h2>Aniversario 8</h2><img src='img/aniversario8.jpg'>";
    } else if (fecha === "01/02/23") {
        resultado.innerHTML = "<h2>Aniversario 9</h2><img src='img/aniversario9.jpg'>";
    } else if (fecha === "01/03/23") {
        resultado.innerHTML = "<h2>Aniversario 10</h2><img src='img/aniversario10.jpg'>";
    } else if (fecha === "01/04/23") {
        resultado.innerHTML = "<h2>Aniversario 11</h2><img src='img/aniversario11.jpg'>";
    } else {
        resultado.innerHTML = "<p>No se encontró ningún aniversario para la fecha ingresada</p>";
    }

    resultado.style.display = "block"; // mostrar el resultado
}

    