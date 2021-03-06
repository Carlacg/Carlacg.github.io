/**
 * Created by alex on 6/21/15.
 */

var dataBase = openDatabase('comentarios', '1.0', 'relacion comentario-usuario', 2 * 1024 * 1024);

initDatabase();

function initDatabase() {
  dataBase.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS comentario (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, usuario VARCHAR(45), email VARCHAR(45), comentario VARCHAR(140), receta VARCHAR(45))");
  });
}

function saveComment(usuario, email, comentario, receta) {
    dataBase.transaction(function (tx) {
      tx.executeSql("INSERT INTO comentario (usuario, email, comentario, receta) VALUES ('" + usuario + "', '" + email + "', '" + comentario + "', '" + receta + "')");
  });
  createCookie("nombre", usuario, 7);
  createCookie("correo", email, 7);
}

function createCookie(key, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = key + "=" + value + "; " + expires;
}