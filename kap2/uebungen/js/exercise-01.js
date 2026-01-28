const btn = document.getElementById("btnLoad");
const out = document.getElementById("out");

btn.addEventListener("click", () => {
  out.innerHTML = "<p>Lade Daten…</p>";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "server/data.json");

  xhr.onload = () => {
    let data;
    data = JSON.parse(xhr.responseText);
        render(data);
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
