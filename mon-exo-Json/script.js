console.log("Script chargé");
const container = document.querySelector("#container");
const button = document.querySelector("#charger");

async function getData() {
  try {
    const response = await fetch("/courses.json");
    console.log(response);
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur:", error);
  }
}
