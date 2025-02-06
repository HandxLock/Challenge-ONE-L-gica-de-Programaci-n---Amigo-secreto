// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Función para agregar un amigo a la lista
function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  // Validar que el campo no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  // Obtener la lista de amigos
  const listaAmigos = document.getElementById('listaAmigos');

  // Crear un nuevo elemento de lista y agregarlo
  const nuevoAmigo = document.createElement('li');
  nuevoAmigo.textContent = nombreAmigo;
  listaAmigos.appendChild(nuevoAmigo);

  // Limpiar el campo de texto después de agregar
  inputAmigo.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  const listaAmigos = document.getElementById('listaAmigos');
  const amigos = listaAmigos.getElementsByTagName('li');

  // Validar que haya al menos un amigo en la lista
  if (amigos.length === 0) {
    alert("Por favor, agrega al menos un amigo antes de sortear.");
    return;
  }

  // Seleccionar un amigo aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio].textContent;

  // Mostrar el resultado del sorteo
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}