function enviar() {
  alert("Gracias por comunicarse con nosotros.\nNos pondremos en contacto con usted a la brevedad posible.")
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  createCookie("nombre", nombre, 7);
  createCookie("correo", correo, 7);
}

function createCookie(key, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = key + "=" + value + "; " + expires;
}

function setValues () {
  var nombre = document.getElementById("nombre");
  var correo = document.getElementById("correo");

  var name = getCookie("nombre");
  var mail = getCookie("correo");

  if (name != "") {
    nombre.value = name;
  } else {
    nombre.value = "nombre";
  }
  if (mail != "") {
    correo.value = mail;
  } else {
    correo.value = "correo@host.com";
  }
}

function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}