let input = document.querySelector(".input");
let botonAgregar = document.querySelector(".botonagregar");
let container = document.querySelector(".container");
let body = document.querySelector("body");
let inputValue = input.value;

//-------------------------------------

botonAgregar.addEventListener("click", function () {
  if (!input.value == "") {
    crearDiv();
  }
});

function crearDiv() {
  let tarea = document.createElement("input");
  tarea.disabled = !tarea.disabled;
  tarea.value = input.value;
  tarea.classList.add("item-input");
  input.value = null; //que el input quede vacio

  //creo el boton borrar
  let botonRemover = document.createElement("button");
  botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
  botonRemover.classList.add("boton-remover");

  //creo el boton candado
  let botonEditar = document.createElement("button");
  botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
  botonEditar.classList.add("boton-editar");

  let divCreado = document.createElement("div");
  divCreado.appendChild(tarea);
  divCreado.appendChild(botonEditar);
  divCreado.appendChild(botonRemover);
  container.appendChild(divCreado);

  botonRemover.addEventListener("click", function () {
    container.removeChild(divCreado);
  });

  botonEditar.addEventListener("click", function () {
    tarea.disabled = !tarea.disabled;

    if (tarea.disabled) {
      botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
    } else if (!tarea.disabled) {
      botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
    } else {
      console.log("ni true ni false");
    }
  });
}
