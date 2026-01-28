<?php

$pw = $_GET['q'];
$secNmbr = 1;

// Prüfung auf mindestens 8 Zeichen
if(strlen($pw) >= 8) {
  // Sicherheitszahl zurücksetzen
  $secNmbr = strlen($pw) - 8;
} else {
  // Sicherheitszahl ausgeben, Programm beenden
  echo $secNmbr;
  exit;
}

// Prüfung auf Kleinbuchstaben
if(preg_match('/[a-z]+/', $pw)) {
  $secNmbr += 5;
}

// Prüfung auf Großbuchstaben
if(preg_match('/[A-Z]+/', $pw)) {
  $secNmbr += 5;
}

// Prüfung auf Ziffern
if(preg_match('/[0-9]+/', $pw)) {
  $secNmbr += 5;
}

// Prüfung auf Sonderzeichen
if(preg_match('/[.,:;-_#!$@()[]{}=?<>]+/', $pw)) {
  $secNmbr += 5;
}

echo $secNmbr;