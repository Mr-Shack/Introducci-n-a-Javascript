let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];

let citricos = 0;
let pomaceas = 0;
let tropicales = 0;
let drupas = 0;
let cucurbitaceas = 0;
let bayas = 0;

for (let i = 0; i < frutasConTipo.length; i++) {
    if (frutasConTipo[i].tipo === "Cítrico") {
        citricos++;
    } else if (frutasConTipo[i].tipo === "Pomácea") {
        pomaceas++;
    } else if (frutasConTipo[i].tipo === "Tropical") {
        tropicales++;
    } else if (frutasConTipo[i].tipo === "Drupa") {
        drupas++;
    } else if (frutasConTipo[i].tipo === "Cucurbitácea") {
        cucurbitaceas++;
    } else if (frutasConTipo[i].tipo === "Baya") {
        bayas++;
    } else {
        console.log(`Tipo desconocido: ${frutasConTipo[i].tipo}`);
    }
}

console.log(`Cítricos: ${citricos}`);
console.log(`Pomáceas: ${pomaceas}`);
console.log(`Tropicales: ${tropicales}`);
console.log(`Drupas: ${drupas}`);
console.log(`Cucurbitáceas: ${cucurbitaceas}`);
console.log(`Bayas: ${bayas}`);