// Ajouter à la fin d'un array
//courses.push(12)

// Enlever le dernier
//courses.pop()

//Ajouter au début
//courses.unshift(5)

//Enlever le premier
//courses.shift()

//EXERCICE 1 : GESTION LISTE DE COURSES

//Objectif
//Créer un système simple pour gérer tes distances de running hebdomadaires.

// 1. Crée un array vide appelé distancesHebdo

let distancesHebdo = [];

// 2. Ajoute 3 distances : 10km, 8km, 12km (avec push)
distancesHebdo.push(10, 8, 12);

// 3. Affiche la première distance
console.log("Première distance: " + distancesHebdo[0]);

// 4. Affiche la dernière distance (utilise .length - 1)
const lastElement = distancesHebdo[distancesHebdo.length - 1];
console.log("Derniere distance: " + lastElement);

// 5. Ajoute une distance au début : 5km
distancesHebdo.unshift(5);
// 6. Affiche le nombre total de courses
const NombreCourses = distancesHebdo.length;
console.log("Nombre de courses: " + NombreCourses);
console.log("Array Final: " + distancesHebdo);
// 7. Enlève la dernière course
distancesHebdo.pop();
console.log(distancesHebdo);

//Résultat attendu
//Première distance: 10
//Dernière distance: 12
//Nombre de courses: 4
//Array final: [5, 10, 8, 12]
//(après pop): [5, 10, 8]

//EXERCICE 2 : PARCOURIR AVEC FOR LOOP (15 min)
//Objectif
//Utiliser une boucle for pour parcourir un array et faire des calculs.
//Nouvelle théorie : For Loop

// Données : Tes 5 dernières courses (en km)
let courses = [10, 8, 12, 15, 10];

// 1. Utilise une boucle for pour afficher chaque distance
//    Format : "Course 1: 10 km"

for (let index = 0; index < courses.length; index++) {
  const element = courses[index];
  console.log("Format " + [index + 1] + ": " + element + " km");
}

// 2. Calcule la distance totale parcourue
//    Utilise une variable totalKm initialisée à 0
//    Additionne chaque distance dans la boucle
let totalKm = 0;
let moyenne = 0;
for (let index = 0; index < courses.length; index++) {
  const element = courses[index];

  totalKm = totalKm + element;
  moyenne = totalKm / courses.length;
}
console.log("Total: " + totalKm + " km");
console.log("Moyenne: " + moyenne + " km");
console.log("Total " + totalKm + ", Moyenne" + moyenne + " km");

// 3. Calcule la moyenne des distances
//    moyenne = total / nombre de courses

// 4. Affiche le résultat final
//    Format : "Total: X km, Moyenne: Y km"

//Resultats attendu

//Course 1: 10 km
//Course 2: 8 km
//Course 3: 12 km
//Course 4: 15 km
//Course 5: 10 km
//Total: 55 km, Moyenne: 11 km
