
let librosleidos =[]; //Array libros leidos 

//agregar al array un libro
function agregarlibro (titulo){
    if (titulo){
        librosleidos.push(titulo);
        console.log(`🤓 Libro agregado: "${titulo}"`);
    } else {
        console.log("Ingresar un título válido por favor. ");

    }
}

//libros leidos 
function mostrarlibrosleidos(){
    if (librosleidos.length === 0){
        console.log("No se han leído libros nuevos.");
    
    }else{
        console.log("=> Libros léidos ultimamente:");
        librosleidos.forEach((libro, index)=>{
            console.log(`${index + 1}. ${libro}`);
        });
    }

}

agregarlibro("No apto para estrellas");
agregarlibro("Patria 1");
agregarlibro("Patria 2");
agregarlibro("Spectacular");
agregarlibro("Aprendiz del villano");
agregarlibro("Blackwater I");
agregarlibro("Novia");
agregarlibro("Una corte de rosas y espinas");
agregarlibro("Patria 3");
agregarlibro("The north wind");
agregarlibro("Una corte de niebla y furia");
agregarlibro("Blackwater II");
agregarlibro("Once upon a broken heart");
agregarlibro("The ballad of Never After");
gregarlibro("A curse for true love");
agregarlibro("Cien años de soledad");

mostrarlibrosleidos();