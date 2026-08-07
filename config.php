<?php

$botToken = "8534884253:AAFOcq70jnsEiGv-iUheOy0koOoVkp4G4HE";

$chatID = "-1001574219465";

/ =========================
// Database Connection
// =========================
$host = "localhost";
$user = "root";
$password = "";
$database = "crrsa_db";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

$conn->set_charset("utf8");
?>
