// achat//
const baguette = 1.2;
const lait = 0.95;
const pates = 1.8;

const total = baguette * 2 + lait + pates * 3;
console.log(`Total courses : ${total}€`);

const portefeuille = 15;
const reste = portefeuille - total;
console.log(`Il me reste ${reste}€`);

//Meteo//

let temperature = 18; // ✅ let correct (valeur peut changer)
let pluie = true; // ✅ boolean bien utilisé

if (temperature > 15 && !pluie) {
  // ✅ Opérateur && maîtrisé
  console.log("Go running !"); // ✅ Opérateur ! (NOT) maîtrisé
} else if (temperature > 15 && pluie) {
  // ✅ Logique parfaite
  console.log("Running sous la pluie, warrior mode");
} else if (temperature <= 15 && !pluie) {
  // ✅ Toutes les conditions couvertes
  console.log("Fait froid mais ok");
} else if (temperature <= 15 && pluie) {
  // ✅ Structure propre
  console.log("Reste à la maison, Netflix");
}

// IMC//

const poids = 67;
const taille = 1.72;

const imc = (poids / (taille * taille)).toFixed(2);
console.log(`Ton IMC : ${imc}`);

// @ts-ignore
if (imc < 18.5) {
  console.log("Sous-poids");
  // @ts-ignore
} else if (imc < 25) {
  // Pas besoin de >= 18.5 (déjà éliminé)
  console.log("Poids normal");
  // @ts-ignore
} else if (imc < 30) {
  // Pas besoin de >= 25
  console.log("Surpoids");
} else {
  console.log("Obésité");
}
