document.writeln( '<div id="banner">' );
document.writeln( '<header><a href="index.html"><img id="imagen" src="imagenes/banner.png" alt="FoodCourt" /></a></header>' );
document.writeln( '<button id="botonMenu" onclick="toggleMenu()"><img src="imagenes/toggle_menu.png" alt="toggle menu" height="15px"> Menu </button>');
document.writeln( '<nav id="menu">' );
document.writeln( '<ul><li><a class="inicio" href="index.html">Inicio</a></li>' );
document.writeln( '<li class="receta"><a class="receta" href="recetas.html">Recetas</a>' );
document.writeln( '<ul><li><a href="recetas.html#entradas">Entradas</a></li><li><a href="recetas.html#platosF">Platos Fuertes</a></li><li><a href="recetas.html#postres">Postres</a></li><li><a href="recetas.html#bebidas">Bebidas</a></ul></li>');
document.writeln( '<li><a class="acerca" href="acerca.html">Acerca De</a></li>' );
document.writeln( '<li><a  class="contacto"href="contacto.html">Contacto</a></li></ul>' );
document.writeln( '</nav></div>' );

function toggleMenu(){
    var menu = document.getElementById('menu');
    var display = menu.style.display;
    if(display == "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}

$(window).resize(function() {
    if ($(window).width() > 480) {
        $('#botonMenu').css('display','none');
        $('#menu').css("display", "block");
    }else{
        $('#botonMenu').css('display','block');
        $('#menu').css("display", "none");
    }
});