<?php
$outputArr = array();
// Prüfe, ob ein Query per GET gesetzt wurde
if (!empty($_GET)) {
  // Prüfe weiter ob der Wert gefüllt ist (kein leerer String)
  if (empty(trim($_GET['v']))) {
    // Ist der Wert leer, Ausgabe einer Meldung, Abbruch des Programms
    $outputArr[] = 'keine Eingabe';
    exit;
  } else {
    // Wert in Variable speichern
    $val = $_GET['v'];
  }

  $phoneNbrsFile = 'phonebook.txt';
  // Öffnen der Telefonbuch-Datei
  $fp = fopen($phoneNbrsFile, 'r');
  if (!$fp) {
    // Öffene fehlgeschlagen, Meldung ausgeben und Programm beenden
    $outputArr[] = "Datei <b>$phoneNbrsFile</b> wurde nicht gefunden!";
    exit;
  }

  $phoneNbrsArr = array();

  // Schleife über die Zeilen der Text-Datei
  while (($phoneNbr = fgets($fp)) !== FALSE) {
    // stimmt der Such-String mit dem Anfang der Zeile überein...
    if (preg_match("/^$val/i", $phoneNbr)) {
      // ... füge diese Zeile zum Treffer-Array hinzu
      $phoneNbrsArr[] = $phoneNbr;
    }
  }

  // konvertiere das Array in einen JSON-String und liefere diesen aus
  if( empty($phoneNbrsArr) ) {
    $outputArr[] = 'keinen Eintrag gefunden';
  } else {
    $outputArr = $phoneNbrsArr;
  }
  echo json_encode($outputArr);

  fclose($fp);
}