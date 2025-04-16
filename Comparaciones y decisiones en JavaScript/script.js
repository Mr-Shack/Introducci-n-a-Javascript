let nota = prompt ("¿Qué valor tiene la nota?");
if (nota < 0 || nota > 100) {
console.log ("El valor es incorrecto, introduce un valor entre 0 y 100")
} else if (nota >= 90) {
    console.log("Excelente");
} else if (nota < 90 && nota >= 75) {
    console.log("Bien");
}else if (nota < 75 && nota >= 60) {
    console.log("Suficiente");
} else {
    console.log("El estudiante no aprueba");
}