const btn = document.querySelector("#searchBtn");

btn.addEventListener("click", () => {
  const query = document.querySelector("#searchInput").value;

  // encodeURIComponent ist Pflicht bei URLs
  const url = "server/search.php?q=" + encodeURIComponent(query);
  console.log("Request:", url);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = () => {
    console.log('Response:', xhr.responseText);

    const data = JSON.parse(xhr.responseText);

    const output = document.getElementById("output");
    data.forEach(d => {
      output.innerHTML += d.title + "<br>";
    });
  }

  xhr.send();
});