<?php
header("Content-Type: application/json");

echo json_encode([
  ["id" => 1, "name" => "Item A"],
  ["id" => 2, "name" => "Item B"],
  ["id" => 3, "name" => "Item C"],
]);
