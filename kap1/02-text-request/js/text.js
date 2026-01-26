// Einfachster AJAX Request (Text)
document.querySelector("#btn").addEventListener("click", _ => {
  // XHR-Objekt erzeuegn
  const  xhr= new XMLHttpRequest();

  // Verbindung vorbereiten
  // Angabe der Methode (GET) und des angeforderten Scripts bzw. der angeforderten Datei
  xhr.open("GET", "server/text.php");

  xhr.addEventListener("readystatechange", _ => {
    switch (xhr.readyState) {
      case 0:
        console.log('Objekt wurde noch nicht initialsiert');
        break;
      case 1:
        console.log('Verbindung wird aufgebaut');
        break;
      case 2:
        console.log('Anfrage wurde gesendet');
        break;
      case 3:
        console.log('Warte auf Antwort...');
        break;
      case 4:
        console.log('Antwort eingetroffen');
        break;
    }
  });

  // Wenn die Antwort des Servers komplett geladen wurde,
  xhr.addEventListener("load", _ => {
    // Ausgabe der Eigenschten des XHR-Objektes
    console.log('Status:', xhr.status);
    console.log('ReadyState:', xhr.readyState);
    console.log('Response:', xhr.responseText);
  });

  // Absenden der Anfrage
  xhr.send();
});