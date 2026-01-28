const btn = document.getElementById("btnLoad");
const out = document.getElementById("out");

btn.addEventListener("click", () => {
  out.innerHTML = "<p>Lade Daten…</p>";

  const xhr = new XMLHttpRequest();
  // komplette URL, um Netzwerkfehler zu provozieren
  xhr.open("GET", "http://ajax-jquery-course-start.test/kap2/uebungen/server/data.json");

  xhr.onload = () => {
    if (xhr.status !== 200) {
      out.innerHTML = `<p>Fehler: HTTP ${xhr.status}</p>`;
      return;
    }

    let data;
    try {
      data = JSON.parse(xhr.responseText);
    } catch (e) {
      out.innerHTML = "<p>Fehler: JSON ist ungültig.</p>";
      return;
    }

    render(data);
  };

  xhr.onerror = () => {
    out.innerHTML = "<p>Netzwerkfehler. Bitte Verbindung prüfen.</p>";
  };

  xhr.send();
});

function render(items) {
  out.innerHTML = "";

  const ul = document.createElement("ul");
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} – ${item.author}`;
    ul.appendChild(li);
  });

  out.appendChild(ul);
}
