console.log("Script chargé");
const container = document.querySelector("#container");
const button = document.querySelector("#charger");

async function getData() {
  try {
    const response = await fetch("./courses.json");
    console.log(response);
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    console.log(data);

    data.forEach((course) => {
      const div = document.createElement("div");
      div.textContent = `Distance: ${course.distance}km en ${course.temps} min le ${course.date}`;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("Erreur:", error);
  }
}
button.addEventListener("click", getData);
