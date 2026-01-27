document.getElementById("btn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "server/books.xml");

  xhr.onload = () => {
    const data = xhr.responseXML;
    console.log('Response:', data);
    renderList(data);
  }

  xhr.send();
});

function renderList(items) {
  const ul = document.getElementById("list");
  ul.innerHTML = "";

  xmlData = items.querySelectorAll("book > title");

  xmlData.forEach(title => {
      const li = document.createElement("li");
      li.textContent = title.textContent;
      ul.appendChild(li);
  });
  // items.forEach(item => {
  //   const li = document.createElement("li");
  //   li.textContent = item.title;
  //   ul.appendChild(li);
  // });
}