document.getElementById("btn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "server/books.json");

  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    renderList(data);
  }

  xhr.send();
});

function renderList(items) {
  const ul = document.getElementById("list");
  ul.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.title;
    ul.appendChild(li);
  });
}