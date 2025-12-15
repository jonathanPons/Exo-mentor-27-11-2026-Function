Json est un format pour stocker/ transporter des données
Comme un carnet où tu notes tes infos de manière structurée.

FETCH()= fonction JS pour aller chercher des données
fetch("adresse)= "va chercher le colis à cette adresse"

async devant fonction = "Cette fonction contient des opérations asynchrones"
Règle : Pour utiliser await, la fonction DOIT être async
Mot-clé await
await = "Attends que cette promesse se résolve avant de continuer"

async function getData() {
const response = await fetch("./data.json");
// ↑
// "Attends que fetch finisse"

console.log("Fetch terminé !");
}

Étape par étape

1. Faire la requête fetch
   javascript
   const response = await fetch("./data.json");

→ Va chercher le fichier
→ Retourne un objet Response

2. Vérifier succès (optionnel mais recommandé)
   javascriptif (!response.ok) {
   throw new Error("Erreur HTTP");
   }

3. Convertir en JSON
   javascriptconst data = await response.json();
   → Convertit le texte JSON en objet JavaScript

4. Utiliser les données
   javascriptconsole.log(data);
   data.forEach(item => ...);

async function getData() {
try {
// 1. Fetch
const response = await fetch("./data.json");

    // 2. Vérifier
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    // 3. Convertir JSON
    const data = await response.json();

    // 4. Utiliser
    console.log(data);
    return data;

} catch (error) {
console.error("Erreur:", error);
}
}

// 5. Appeler
getData();

const response = await fetch("./data.json"); // 1er await
const data = await response.json(); // 2ème await

```

**1er await :**
- Attend que le fichier soit TÉLÉCHARGÉ
- Retourne Response (enveloppe)

**2ème await :**
- Attend que le contenu soit CONVERTI en JavaScript
- Retourne données utilisables

**Analogie :**
```

1er await = "Attends que le colis arrive"
2ème await = "Attends que j'ouvre le colis et sorte le contenu"

PARTIE 6 : INTÉGRER AU DOM
Une fois les données récupérées
