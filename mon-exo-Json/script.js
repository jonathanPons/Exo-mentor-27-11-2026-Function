console.log("Script chargé");
const container = document.querySelector("#container");

async function getCourses() {
  // 1. await fetch
  try {
    const response = await fetch("./courses.json");
    if (!response.ok) {
      throw new Error("Erreur");
    }
    // 2. await .json()
    const data = await response.json();
    console.log(data);
    const infodata = data.filter((item) => item.active);
    console.log(infodata);
    container.innerHTML = "";
    infodata.forEach((item) => {
      const element = document.createElement("div");
      element.textContent = item.distance;
      constainer.appenChild(element);
      console.log(element);
    });

    return data;
  } catch (error) {
    console.error("Erreur:", error);
  }

  // 3. console.log
  // 4. return
}
getCourses();
