// Haben Sie in Ihrem Video zum Auftrag erklärt
function changeColor(color) {
  document.documentElement.style.setProperty("--section-color", color);
}

// Erstellt eine Variable mit Namen count und dem Wert 0
let count = 0;

// Erstellt eine Funktion mit dem Namen increaseCount
function increaseCount() {
  // Erstellt eine neue Variable mit Namen titleElement und speichert das fieldset-Element darin
  let titleElement = document.querySelector("fieldset");

  // Erhöht die Variable count um 1
  count = count + 1;

  // setzt den Textinhalt von titleElement auf den Wert von count.
  titleElement.textContent = count;
}
setInterval(increaseCount, 1000);
