// Definición del objeto libro
let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3", "Capítulo 4", "Capítulo 5", "Capítulo 6", "Capítulo 7", "Capítulo 8", "Capítulo 9", "Capítulo 10", "Capítulo 11", "Capítulo 12", "Capítulo 13", "Capítulo 14", "Capítulo 15", "Capítulo 16", "Capítulo 17", "Capítulo 18", "Capítulo 19", "Capítulo 20"],

    // Método para describir el libro
    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    // Método para cambiar el estado del libro
    cambiarEstado: function(nuevoEstado) {
        if (nuevoEstado === "disponible" || nuevoEstado === "prestado") {
            this.estado = nuevoEstado;
            console.log(`El estado del libro ahora es: ${this.estado}`);
        } else {
            console.log("Estado no válido. Usa 'disponible' o 'prestado'.");
        }
    },

    // Método para agregar un capítulo
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado.`);
    },

    // Método para eliminar un capítulo
    eliminarCapitulo: function(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log(`El capítulo "${capitulo}" no se encuentra en la lista.`);
        }
    }
};

// Pruebas de los métodos
libro.describirLibro();  // Imprime la descripción básica del libro
libro.cambiarEstado("prestado");  // Cambia el estado del libro a 'prestado'
libro.agregarCapitulo("Capítulo 1");  // Agrega un nuevo capítulo
libro.eliminarCapitulo("Capítulo 10");  // Elimina un capítulo
libro.agregarCapitulo("Capítulo 2");  // Agrega un nuevo capítulo
libro.eliminarCapitulo("Capítulo 12");  // Elimina un capítulo
libro.agregarCapitulo("Capítulo 3");  // Agrega un nuevo capítulo
libro.eliminarCapitulo("Capítulo 14");  // Elimina un capítulo
libro.agregarCapitulo("Capítulo 4");  // Agrega un nuevo capítulo
libro.eliminarCapitulo("Capítulo 15");  // Elimina un capítulo
libro.describirLibro();  // Imprime la descripción después de modificar el estado