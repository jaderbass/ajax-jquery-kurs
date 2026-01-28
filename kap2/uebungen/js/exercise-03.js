const btn = document.getElementById("btnLoad");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
  output.textContent = "Lade Daten…";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "server/data.json");

  xhr.onload = function () {
    // bewusst KEINE Statusprüfung
    const data = JSON.parse(xhr.responseText);
    output.textContent = data[0].title;
  };

  xhr.send();
});