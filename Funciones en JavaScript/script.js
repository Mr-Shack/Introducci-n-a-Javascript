let librosLeidos = [];
function agregarLibro() {
    alert("Por favor, ingresa el título de un libro que has leído.");
    let titulo = prompt("¿Cuál es el nombre del libro?");
    if (titulo && titulo.trim() !== "") {
        librosLeidos.push(titulo);
        alert(`El libro "${titulo}" ha sido agregado a tu lista.`);
    } else {
        alert("No se agregó ningún libro. Por favor, ingresa un título válido.");
    }
}
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        alert("No has agregado ningún libro a la lista todavía.");
    } else {
        let lista = "Lista de libros leídos:\n";
        librosLeidos.forEach((libro, index) => {
            lista += `${index + 1}. ${libro}\n`;
        });
        alert(lista);
    }
}