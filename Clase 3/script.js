alert("Ciclos");
console.log ("ejecución de un while");
let contador = 1;
while (contador <= 10){
    console.log(contador);
    contador++;    
}
console.log ("ejecución de un do-while");
do{
    console.log("Soy el código de un do-while");
}while(contador < 10);
console.log ("ejecución de un for");
for(let i = 0; i <= 20; i += 5){
    console.log(i);
}
console.log ("ejecución de un array");
let alumnosTona =["Abril","Alexis", "Luis", "Jeshua", "Jaqueline", "Victor"];
console.log (typeof alumnosTona);
console.log(alumnosTona);
console.log(alumnosTona[0]);
alumnosTona [0] = "Meghan";
console.log(alumnosTona[0]);
console.log(alumnosTona[-1]);