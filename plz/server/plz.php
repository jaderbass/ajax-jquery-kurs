<?php
$errMsg = '';
$query = '';
if( $_GET['q'] ) {
  if( empty( trim( $_GET['q'] ) ) ) {
    $errMsg = 'keine Eingabe';
    exit;
  } else {
    $query = $_GET['q'];
  }

  $file = 'zuordnung_plz_ort.csv';

  // Datei zum Lesen öffnen
  $fp = fopen( $file, 'r' );
  if( !$fp ) {
    $errMsg = "Datei <b>$file</b> wurde nicht gefunden.";
    exit;
  }

  // Überschriften lesen und speichern
  $headers = fgetcsv( $fp );
  $ort = $headers[1];
  $plz = $headers[2];
  $bl  = $headers[3];

  $plz_array = array();

  $counter = 1;

  while( ($row = fgetcsv( $fp ) ) !== false ) {
    // Vergleiche eingegeben Zeichenkette mit dem Anfang von Ort
    if( preg_match( "/^$query/i", $row[1] ) ) {
      // Bei Treffer ins Array einfügen
      $plz_array[$counter++] = array(
        $ort => $row[1],
        $plz => $row[2],
        $bl =>  $row[3],
      );
    }
  }

  echo json_encode( $plz_array ?? ["error" => $errMsg] );

  fclose( $fp );
}