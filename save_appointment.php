<?php

include "config.php";

$data = json_decode(file_get_contents("php://input"), true);


$appointment_no = $data["number"];
$full_name = $data["name"];
$phone = $data["phone"];
$service = $data["service"];
$application_date = $data["applicationDate"];
$appointment_date = $data["appointmentDate"];


$sql = "INSERT INTO appointments
(appointment_no, full_name, phone, service, application_date, appointment_date, status)

VALUES (?, ?, ?, ?, ?, ?, 'Pending')";


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


if($stmt->execute()){

    echo json_encode([
        "success"=>true,
        "message"=>"Appointment Saved Successfully"
    ]);

}else{

    echo json_encode([
        "success"=>false,
        "message"=>$conn->error
    ]);

}


$stmt->close();
$conn->close();

?>
