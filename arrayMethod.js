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

const coursesTotal = [5, 10, 8, 12, 15];
const total = coursesTotal.reduce((num, km) => num + km, 0);
const moyenne = total / coursesTotal.length;
//console.log(total);
//console.log(moyenne);
//console.log(`Total: ${total}km, Moyenne: ${moyenne}km.`);

//EXO 1

const alluresMin = [5, 4.5, 6, 5.2, 4.8];

const allureSec = alluresMin.map((all) => all * 60);
//console.log(allureSec);

//EXO2

const coursesTous = [5, 12, 8, 15, 3, 20, 10, 6];
const coursesLongues = coursesTous.filter((long) => long > 10); //
//console.log(coursesLongues);
const totalLongues = coursesLongues.reduce((num, km) => num + km, 0);
//console.log(totalLongues);

// EXO3

// Tes courses : [distance, temps en minutes]
const courses = [
  { distance: 10, temps: 50 }, // allure 5 min/km
  { distance: 8, temps: 36 }, // allure 4.5 min/km (rapide!)
  { distance: 12, temps: 66 }, // allure 5.5 min/km
  { distance: 5, temps: 22 }, // allure 4.4 min/km (rapide!)
  { distance: 15, temps: 72 }, // allure 4.8 min/km (rapide!)
];

const allures = courses.map((course, index) => course.temps / course.distance);

// aller chercher les caleurs des objets: 1 er element c'est 1 objet,le second son index

//console.log(allures);
// ÉTAPE 2 : Garde seulement les courses avec allure < 5
// (en gardant l'objet course complet, pas juste l'allure)
const coursesRapides = courses.filter(
  (course, index) => course.temps / course.distance < 5
);

console.log(coursesRapides.length);

// ÉTAPE 3 : Calcule distance MOYENNE des courses rapides
const distanceMoyenne = coursesRapides.reduce(
  (acc, dist) => acc + dist.distance,
  0
);

const distM = distanceMoyenne / coursesRapides.length;
console.log(distM);
/* TON CODE avec reduce + length */
