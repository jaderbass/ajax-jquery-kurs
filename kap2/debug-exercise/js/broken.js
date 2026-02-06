const btn = document.getElementById("btn");
const out = document.getElementById("out");

btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  // Fehler 1: falscher Pfad / Dateiname
  xhr.open("GET", "server/dtaa.json");

  xhr.onload = () => {
    // Fehler 2: Status wird nicht geprüft
    // Fehler 3: JSON.parse kann krachen, wenn Response HTML/404 ist
    const data = JSON.parse(xhr.responseText);

    out.textContent = data.items[0].title;
  };

  xhr.send();
});
