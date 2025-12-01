// Travail de fonction //

// EXO 1//
// À toi de coder

// 1. Crée une fonction "calculerAllure" qui prend 2 paramètres :
//    - distance (en km)
//    - temps (en minutes)
//
// 2. La fonction doit calculer l'allure (temps / distance)
//    et RETOURNER le résultat
//
// 3. La fonction doit retourner l'allure avec 2 décimales

// 4. Appelle la fonction avec :
//    - 10km en 50min
//    - 5km en 27min
//    - 21km en 105min (semi-marathon)
//
// 5. Affiche les résultats avec console.log()

// @ts-ignore
function calculerAllure(temps, distance) {
  const calculAllure = temps / distance;
  const allureDec = calculAllure.toFixed(2);
  return ` Votre allure au ${distance} km : ${allureDec} min/km`;
}
//console.log(calculerAllure(50, 10));
//console.log(calculerAllure(27, 5));
//console.log(calculerAllure(105, 21));

//EXO 2//

// 1. Crée une fonction "evaluerPerformance" qui prend 1 paramètre :
//    - allure (en min/km, par exemple 5.2)
//
// 2. La fonction doit RETOURNER un message selon l'allure :
//    - Si allure < 4.5 → "Élite 🔥"
//    - Si allure entre 4.5 et 5.5 → "Très bon niveau 💪"
//    - Si allure entre 5.5 et 6.5 → "Bon rythme ✅"
//    - Si allure > 6.5 → "Endurance 🐢"

// 3. Teste avec plusieurs valeurs :
//    - 4.2
//    - 5.0
//    - 6.0
//    - 7.5
// @ts-ignore
function evaluerPerformance(allure) {
  if (allure < 4.5) {
    return "Élite 🔥";
  } else if (allure >= 4.5 && allure <= 5.5) {
    return "Très bon niveau 💪";
  } else if (allure >= 5.5 && allure <= 6.5) {
    return "Bon rythme ✅";
  } else if (allure > 6.5) {
    return "Endurance 🐢";
  }
}
console.log(evaluerPerformance(4.2));
console.log(evaluerPerformance(5));
console.log(evaluerPerformance(6));
console.log(evaluerPerformance(7.5));

// @ts-ignore
function calculerAllure(distance, temps) {
  return (temps / distance).toFixed(2);
}

// @ts-ignore
function evaluerPerformance(allure) {
  if (allure < 4.5) return "Élite 🔥";
  if (allure <= 5.5) return "Très bon niveau 💪";
  if (allure <= 6.5) return "Bon rythme ✅";
  return "Endurance 🐢";
}

// Maintenant tu peux analyser N'IMPORTE QUELLE course facilement :
//console.log(evaluerPerformance(calculerAllure(10, 50)));
//console.log(evaluerPerformance(calculerAllure(5, 27)));
//console.log(evaluerPerformance(calculerAllure(21, 105)));
//console.log(evaluerPerformance(calculerAllure(42, 180))); // Marathon
//console.log(evaluerPerformance(calculerAllure(100, 600))); // Ultra

// EXO 3

// 1. Crée une fonction "formaterNom" qui prend 1 paramètre :
//    - nom (string, exemple : "jean-claude")
//
// 2. La fonction doit :
//    - Mettre la première lettre en MAJUSCULE
//    - Mettre le reste en minuscules
//    - Si le nom contient un tiret, formater les 2 parties
//    - RETOURNER le résultat

// Exemples :
// "jean" → "Jean"
// "MARIE" → "Marie"
// "jean-claude" → "Jean-Claude"
// "anne-SOPHIE" → "Anne-Sophie"

// 3. Teste avec ces valeurs :
//    - "pierre"
//    - "LUCAS"
//    - "jean-marc"
//    - "marie-FRANCE"

// @ts-ignore
function formaterNom(nom) {
  if (!nom.includes("-")) {
    const newName = nom.charAt(0).toUpperCase() + nom.slice(1).toLowerCase();
    return newName;

    // vérifier si le param inclut un caractere precis
  } else if (nom.includes("-")) {
    // couper le param en 2 tableaux
    const morceau = nom.split("-");
    const firstPartie =
      morceau[0].charAt(0).toUpperCase() + morceau[0].slice(1).toLowerCase();
    const secondePartie =
      morceau[1].charAt(0).toUpperCase() + morceau[1].slice(1).toLowerCase();
    const nouveauPrenom = firstPartie + "-" + secondePartie;
    return nouveauPrenom;
  }
}
console.log(formaterNom("pierre"));
console.log(formaterNom("LUCAS"));
console.log(formaterNom("jean-marc"));
console.log(formaterNom("marie-FRANCE"));
