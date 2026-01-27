// Wiederverwendbare AJAX Hilfsfunktion

function ajaxGet(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = () => {
    callback(xhr.responseText, xhr.status);
  };

  xhr.send();
}