var path = window.location.pathname;
var elements = path.split("/");
var receta = elements[elements.length - 1].split("#")[0];

document.writeln( '<div id="formulario">');
document.writeln( '<h4> Deja tu comentario </h4>');
document.writeln( '<form id="comment" action="" method="post">');
document.writeln( '<div> <label for="nombre"> * Nombre: </label><input class="textbox" type="text" name="nombre" id="nombre" required/></div>');
document.writeln( '<div> <label for="correo"> * E-mail: </label><input class="textbox" type="email" name="correo" id="correo" required/></div>');
document.writeln( '<div> <label for="web"> Sitio Web: </label><input class="textbox" type="text" name="web" id="web"/></div>');
document.writeln( '<div> <label for="comentario"> * Comentario: </label><textarea class="textbox" id="comentario" name="comentario" style="height: 10em;" required></textarea></div>');
document.writeln( '<div id="botones"><button onclick="saveComment(nombre.value, correo.value, comentario.value, receta)" class="boton">Publicar</button></div></form></div>');