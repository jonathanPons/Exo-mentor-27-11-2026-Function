// .MAP()
// Analogie running
//Tu as une liste de tes courses en km, tu veux les convertir TOUTES en miles
//.map() fait ça automatiquement pour chaque course

//const nouveau = ancien.map((element) => transformation);

//Ex1
//const courses = [5, 10, 15, 21];
//const coursesMiles = courses.map((km) => km * 0.62);
//console.log(coursesMiles);

//EX2 Calculer allures

//const temps = [50, 40, 60]; //minutes
//const distances = [10, 8, 12]; //km

//const allures = distances.map((dist, index) => temps[index] / dist);
//console.log(allures);

//Exercice 1

//Temps de courses en km

//const tempsMinutes = [45, 60, 30, 90];

//const tempsSecondes = tempsMinutes.map((sec) => sec * 60);
//console.log(tempsSecondes);

// .filter()

//const filtre = ancien.filter((element) => condition);

//Condition = doit retourner true ou false
//Si true → élément GARDÉ
//Si false → élément ENLEVÉ

//exo 2

//const distances = [5, 12, 8, 15, 3, 20, 10];

//const coursesMoyennes = distances.filter((element) => element >= 10);
//console.log(coursesMoyennes);

// .reduce() = reduire un array à une seule valeur

//Analogie running :Tu as toutes tes distances de courses : [5, 10, 15, 8]
//Tu veux le TOTAL des km parcourus : 38 km
//.reduce() additionne tout pour donner 1 seul nombre

//const resultat = array.reduce((accumulateur, element) => accumulateur + element, valeurInitiale)

//accumulateur = le résultat en cours de construction
//element = l'élément actuel
//valeurInitiale = point de départ (souvent 0)

//const courses = [5, 10, 15, 8];

//const total = courses.reduce((acc, km) => acc + km, 0);

//console.log(total); // 38

//Ce qui se passe tour par tour :

//Départ: acc = 0 (valeur initiale)

//Tour 1: acc = 0, km = 5  → 0 + 5 = 5  → acc devient 5
//Tour 2: acc = 5, km = 10 → 5 + 10 = 15 → acc devient 15
//Tour 3: acc = 15, km = 15 → 15 + 15 = 30 → acc devient 30
//Tour 4: acc = 30, km = 8 → 30 + 8 = 38 → acc devient 38

//exo 3

// Tu as ces temps de courses en minutes
//const tempsMinutes = [45, 60, 30, 90];

// Calcule le temps TOTAL avec .reduce()

//const tempsTotal = tempsMinutes.reduce((acc, temps) => acc + temps, 0);

//console.log(tempsTotal + " minutes");
// Résultat attendu : 225 minutes

// Exercice : Calculer distance totale ET moyenne

//const coursesTotal = [5, 10, 8, 12, 15];
//const total = coursesTotal.reduce((num, km) => num + km, 0);
//const moyenne = total / coursesTotal.length;
//console.log(total);
//console.log(moyenne);
//console.log(`Total: ${total}km, Moyenne: ${moyenne}km.`);

//EXO 1

//const alluresMin = [5, 4.5, 6, 5.2, 4.8];

//const allureSec = alluresMin.map((all) => all * 60);
//console.log(allureSec);

//EXO2

//const coursesTous = [5, 12, 8, 15, 3, 20, 10, 6];
//const coursesLongues = coursesTous.filter((long) => long > 10); //
//console.log(coursesLongues);
//const totalLongues = coursesLongues.reduce((num, km) => num + km, 0);
//console.log(totalLongues);

// EXO3

// Tes courses : [distance, temps en minutes]
//const courses = [
//{ distance: 10, temps: 50 }, // allure 5 min/km
//{ distance: 8, temps: 36 }, // allure 4.5 min/km (rapide!)
//{ distance: 12, temps: 66 }, // allure 5.5 min/km
//{ distance: 5, temps: 22 }, // allure 4.4 min/km (rapide!)
//{ distance: 15, temps: 72 }, // allure 4.8 min/km (rapide!)
//];

//const allures = courses.map((course, index) => course.temps / course.distance);

// aller chercher les valeurs des objets: 1 er element c'est 1 objet,le second son index

//console.log(allures);
// ÉTAPE 2 : Garde seulement les courses avec allure < 5
// (en gardant l'objet course complet, pas juste l'allure)
//const coursesRapides = courses.filter(
//(course, index) => course.temps / course.distance < 5
//);

//console.log(coursesRapides.length);

// ÉTAPE 3 : Calcule distance MOYENNE des courses rapides
//const distanceMoyenne = coursesRapides.reduce(
//(acc, dist) => acc + dist.distance,
//0
//);

//const distM = distanceMoyenne / coursesRapides.length;
//console.log(distM);
/* TON CODE avec reduce + length */

//EXO 1 12/12/2025

//const distances = [5, 10, 8, 15, 12, 20];

// En 1 SEULE ligne avec chaînage :
// 1. Garde courses >= 10km
// 2. Calcule le total

//const totalLongues = distances
//.filter((element) => element >= 10)
//.reduce((acc, km) => acc + km, 0);

//console.log(totalLongues);
// Attendu : 10 + 15 + 12 + 20 = 57

//EXO 2
const courses = [
  { distance: 10, temps: 50 }, // 5.0 min/km
  { distance: 8, temps: 36 }, // 4.5 min/km (rapide!)
  { distance: 12, temps: 66 }, // 5.5 min/km
  { distance: 5, temps: 20 }, // 4.0 min/km (le plus rapide!)
  { distance: 15, temps: 72 }, // 4.8 min/km
  { distance: 6, temps: 33 }, // 5.5 min/km
];

// ÉTAPE 1 : Ajoute l'allure à chaque objet
// Utilise .map() pour créer nouveaux objets avec propriété "allure"
const coursesAvecAllure = courses.map((course) => {
  return {
    distance: course.distance,
    temps: course.temps,
    allure: course.temps / course.distance, // TON CALCUL ICI
  };
});

console.log(coursesAvecAllure);
// Chaque objet doit avoir : { distance, temps, allure }

// ÉTAPE 2 : Trie par allure (ordre croissant = rapide d'abord)
// Nouvelle méthode : .sort()
//Syntaxe : array.sort((a, b) => a.propriété - b.propriété)
const coursesTriees = coursesAvecAllure.sort((a, b) => a.allure - b.allure);
console.log(coursesTriees);

// ÉTAPE 3 : Garde seulement les 3 premières
// Nouvelle méthode : .slice(début, fin)
// Syntaxe : array.slice(0, 3) = garde index 0, 1, 2
const top3 = coursesTriees.slice(0, 3);

console.log(top3);
// Attendu : 3 courses avec allures 4.0, 4.5, 4.8

// .sort()
// Trie les éléments d'un array selon une fonction de comparaison
// array.sort((a,b)=> comparaison)
//a= premier element à comparer
//b= deuxieme element à comparer
//comparaison= calcul qui determine l'ordre//

// Si (a - b) < 0 → a vient AVANT b (ordre croissant)
// Si (a - b) > 0 → a vient APRÈS b
// Si (a - b) = 0 → ordre inchangé

//Trier nombres croissants :
//javascriptconst nombres = [5, 2, 8, 1, 9];
//nombres.sort((a, b) => a - b);
// [1, 2, 5, 8, 9]
//Trier nombres décroissants :
//javascriptconst nombres = [5, 2, 8, 1, 9];
//nombres.sort((a, b) => b - a);
// [9, 8, 5, 2, 1]
//Trier objets par propriété :
//javascriptconst personnes = [
// { nom: "Alice", age: 30 },
// { nom: "Bob", age: 25 },
// { nom: "Charlie", age: 35 }
//];

// Trier par âge croissant
//personnes.sort((a, b) => a.age - b.age);
// Bob(25), Alice(30), Charlie(35)//

//⚠️ IMPORTANT :
//.sort() modifie l'array original (mute l'array)

//Methode Slice
//Définitiion = Extrait porton d'un array Sans modifier l'original

//array.slice(indexdebut, indexFin)
//indexDébut = ou commencer (inclus)
//indexFin= ou s'arreter ( non inclus)

//Comment ça marche :
//javascript// Garde les éléments de indexDébut jusqu'à indexFin-1
//Exemples simples :
//Garder les 3 premiers :
//javascriptconst nombres = [10, 20, 30, 40, 50];
//const top3 = nombres.slice(0, 3);
// [10, 20, 30]
// index 0, 1, 2
//Garder du milieu :
//j//avascriptconst nombres = [10, 20, 30, 40, 50];
//const milieu = nombres.slice(1, 4);
// [20, 30, 40]
// index 1, 2, 3
//Garder à partir d'un index :
//javascriptconst nombres = [10, 20, 30, 40, 50];
//const reste = nombres.slice(2);
// [30, 40, 50]
// À partir de l'index 2 jusqu'à la fin
//Garder les derniers :
//javascriptconst nombres = [10, 20, 30, 40, 50];
//const derniers = nombres.slice(-2);
// [40, 50]
// Les 2 derniers éléments
//Ton cas (top 3) :
//javascriptcoursesTriees.slice(0, 3);
// Garde index 0, 1, 2
// Les 3 premières courses (les plus rapides)
//⚠️ IMPORTANT :
//.slice() NE modifie PAS l'array original (retourne nouveau array)//
