function Libro(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.describirLibro = function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    };
}
let libro1 = new Libro("El Hobbit", "J. R. R. Tolkien", 1937, "prestado");
libro1.describirLibro();