<?php
include "config.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $appointment_no = $_POST["appointment_no"];
    $full_name = $_POST["full_name"];
    $phone = $_POST["phone"];
    $service = $_POST["service"];
    $application_date = $_POST["application_date"];
    $appointment_date = $_POST["appointment_date"];

    $sql = "INSERT INTO appointments
    (appointment_no, full_name, phone, service, application_date, appointment_date)
    VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param(
        "ssssss",
        $appointment_no,
        $full_name,
        $phone,
        $service,
        $application_date,
        $appointment_date
    );

    if ($stmt->execute()) {
        echo "success";
    } else {
        echo "error";
    }

    $stmt->close();
}

$conn->close();
?>
