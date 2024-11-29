var formulario = document.querySelector(".formulario"); // Selecciona el formulario por su clase. CORRECTO

formulario.onsubmit = function(e) {
  e.preventDefault(); // Evita el comportamiento por defecto del formulario. CORRECTO

  var n = formulario.elements[0]; // Selecciona el primer elemento del formulario (nombre). CORRECTO
  var edadElem = formulario.elements[1]; // Selecciona el segundo elemento del formulario (edad). CORRECTO. CAMBIADO para evitar confusión con la variable 'e'.
  var na = formulario.elements[2]; // Selecciona el tercer elemento del formulario (nacionalidad). CORRECTO

  var nombre = n.value; // Obtiene el valor del campo de nombre. CORRECTO
  var edad = edadElem.value; // Obtiene el valor del campo de edad. CORRECTO

  var i = na.selectedIndex; // Obtiene el índice seleccionado en el campo de nacionalidad. CORRECTO
  var nacionalidad = na.options[i].value; // Obtiene el valor de la nacionalidad seleccionada. CORRECTO
  console.log(nombre, edad); // Muestra el nombre y la edad en la consola. CORRECTO
  console.log(nacionalidad); // Muestra la nacionalidad en la consola. CORRECTO

  if (nombre.length === 0) {
    n.classList.add("error"); // Añade la clase 'error' si el nombre está vacío. CORRECTO
  } else {
    n.classList.remove("error"); // Remueve la clase 'error' si el nombre no está vacío. CORRECTO
  }

  if (edad < 18 || edad > 120) {
    edadElem.classList.add("error"); // Añade la clase 'error' si la edad no está en el rango permitido. CORRECTO
  } else {
    edadElem.classList.remove("error"); // Remueve la clase 'error' si la edad está en el rango permitido. CORRECTO
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad); // Llama a la función agregarInvitado si los datos son válidos. CORRECTO
  }
};

var botonBorrar = document.createElement("button"); // Crea un botón para borrar invitados. CORRECTO
botonBorrar.textContent = "Eliminar invitado"; // Añade texto al botón de borrar. CORRECTO
botonBorrar.id = "boton-borrar"; // Añade un ID al botón de borrar. CORRECTO
var corteLinea = document.createElement("br"); // Crea un salto de línea. CORRECTO
document.body.appendChild(corteLinea); // Añade el salto de línea al cuerpo del documento. CORRECTO
document.body.appendChild(botonBorrar); // Añade el botón de borrar al cuerpo del documento. CORRECTO

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"; // Asigna el texto 'Argentina' si la nacionalidad es 'ar'. CORRECTO
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"; // Asigna el texto 'Mexicana' si la nacionalidad es 'mx'. CORRECTO
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"; // Asigna el texto 'Venezolana' si la nacionalidad es 'vnzl'. CORRECTO
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana"; // Asigna el texto 'Peruana' si la nacionalidad es 'per'. CORRECTO
  }

  var lista = document.getElementById("lista-de-invitados"); // Selecciona el contenedor de la lista de invitados por su ID.

  if (!lista) { // Si no existe, crea un nuevo contenedor.
    lista = document.createElement("div"); // Crea un nuevo div para la lista de invitados. CORRECTO
    lista.id = "lista-de-invitados"; // Asigna un ID al nuevo div. CORRECTO
    document.body.appendChild(lista); // Añade el nuevo div al cuerpo del documento. CORRECTO
  }

  var elementoLista = document.createElement("div"); // Crea un div para un elemento de la lista. CORRECTO
  elementoLista.classList.add("elemento-lista"); // Añade la clase 'elemento-lista' al div. CORRECTO (CORREGIDO: Cambiado de 'classList.added')

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span"); // Crea un span para la descripción. CORRECTO
    var inputNombre = document.createElement("input"); // Crea un input para el valor. CORRECTO
    var espacio = document.createElement("br"); // Crea un salto de línea. CORRECTO
    spanNombre.textContent = descripcion + ": "; // Establece el texto del span. CORRECTO
    inputNombre.value = valor; // Establece el valor del input. CORRECTO
    elementoLista.appendChild(spanNombre); // Añade el span al elemento de la lista. CORRECTO
    elementoLista.appendChild(inputNombre); // Añade el input al elemento de la lista. CORRECTO
    elementoLista.appendChild(espacio); // Añade el salto de línea al elemento de la lista. CORRECTO
  }

  crearElemento("Nombre", nombre); // Crea y añade el elemento 'Nombre'. CORRECTO
  crearElemento("Edad", edad); // Crea y añade el elemento 'Edad'. CORRECTO
  crearElemento("Nacionalidad", nacionalidad); // Crea y añade el elemento 'Nacionalidad'. CORRECTO

  var botonBorrar = document.createElement("button"); // Crea un botón para borrar el invitado. CORRECTO
  botonBorrar.textContent = "Eliminar invitado"; // Añade texto al botón de borrar. CORRECTO
  botonBorrar.id = "boton-borrar"; // Añade un ID al botón de borrar. CORRECTO
  var corteLinea = document.createElement("br"); // Crea un salto de línea. CORRECTO
  elementoLista.appendChild(corteLinea); // Añade el salto de línea al elemento de la lista. CORRECTO
  elementoLista.appendChild(botonBorrar); // Añade el botón de borrar al elemento de la lista. CORRECTO

  botonBorrar.onclick = function() {
    elementoLista.remove(); // Elimina el elemento de la lista cuando se hace clic en el botón. CORRECTO
  }

  lista.appendChild(elementoLista); // Añade el elemento de la lista al contenedor de la lista. CORRECTO
}
