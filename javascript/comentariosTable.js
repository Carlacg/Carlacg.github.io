var path = window.location.pathname;
var elements = path.split("/");
var receta = elements[elements.length - 1].split("#")[0];

document.writeln('<h4 id="commentHeader">');
document.writeln('</h4>');
document.writeln('<table id="comentariosTable">');
document.writeln('</table>');

getComments(receta);

function getComments(receta) {
  dataBase.transaction(function (tx) {
    tx.executeSql("SELECT * FROM comentario WHERE receta = '" + receta + "'", [], function (tx, result) {
      var commentNumber = result.rows.length;

      // el link a comentarios
      var divFecha = document.getElementById('fecha');
      var pComment = document.createElement('p');
      var commentLink = document.createElement('a');
      commentLink.id = 'commentLink';
      commentLink.href = '#comentarios';
      commentLink.textContent = commentNumber + ' comentarios >>';
      pComment.appendChild(commentLink);
      divFecha.appendChild(pComment);

      // el titulo de los comentarios
      var commentHeader = document.getElementById('commentHeader');
      if (commentNumber == 1) {
        commentHeader.textContent = commentNumber + ' comentario';
      } else {
        commentHeader.textContent = commentNumber + ' comentarios';
      }

      // la tabla de comentarios
      for (var i = 0; i < commentNumber; i++) {
        var item = result.rows.item(i);
        var nameRow = document.createElement("tr");
        var nameData = document.createElement("td");
        var commentRow = document.createElement("tr");
        var commentData = document.createElement("td");

        nameData.className = "nombreTable";
        commentData.className = "commentTable";

        nameData.textContent = item.usuario;
        commentData.textContent = item.comentario;
        nameRow.appendChild(nameData);
        commentRow.appendChild(commentData);

        document.getElementById('comentariosTable').appendChild(nameRow);
        document.getElementById('comentariosTable').appendChild(commentRow);
      }
    });
  });
}