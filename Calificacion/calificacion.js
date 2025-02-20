function evaluarNota(nota) {
    if (nota >= 90) {
        console.log(`"EXCELENTE". Tu nota es ${nota}. ¡Excelente trabajo! 🎉`);
    } else if (nota >= 75) {
        console.log(`"BIEN". Tu nota es ${nota}. ¡Bien hecho! 👍`);
    } else if (nota >= 60) {
        console.log(`"SUFICIENTE". Tu nota es ${nota}. Has aprobado con lo justo. 📚`);
    } else {
        console.log(`Tu nota es ${nota}. No has aprobado, sigue esforzándote. ❌`);
    }
}


evaluarNota(100); // Excelente
evaluarNota(95); // Excelente
evaluarNota(89)  // Bien
evaluarNota(80); // Bien
evaluarNota(74); // Suficiente
evaluarNota(65); // Suficiente
evaluarNota(50); // No aprueba
evaluarNota(0);  // No aprueba

// valor aleatorio:
let notaAleatoria = Math.floor(Math.random() * 101); // Número de 0 y 100
console.log("\nPrueba con nota aleatoria:");
evaluarNota(notaAleatoria);
