const search = document.querySelector("#searchField");
const list = document.querySelector("#list");
const xhr = new XMLHttpRequest();

search.addEventListener("keyup", () => {
  xhr.open("GET", "server/phonebook.php?v=" + encodeURIComponent(search.value));
  xhr.onload = handleResponse;
  xhr.responseType = "JSON";
  xhr.send();
});

function handleResponse() {
  let nbrList = null;
  let output = "<pre>";

  if(!xhr.response) {
    output += "Bitte (noch) ein Zeichen eingeben!";
  } else {
    nbrList = JSON.parse(xhr.responseText);
    console.log(nbrList);
    for(nbr in nbrList) {
      output += nbrList[nbr];
    }
  }

  output += "</pre>";
  list.innerHTML = output;
}