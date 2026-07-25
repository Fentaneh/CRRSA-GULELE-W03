<?php

include "config.php";


$name = $_POST['name'] ?? '';

$phone = $_POST['phone'] ?? '';

$service = $_POST['service'] ?? '';

$otherService = $_POST['otherService'] ?? '';

$message = $_POST['message'] ?? '';


// If user selects Other
if($service == "Other" && !empty($otherService)){

    $service = $otherService;

}


$text = "📩 CRRSA Customer Feedback\n\n";


$text .= "👤 Name: ".$name."\n";


$text .= "📞 Phone: ".$phone."\n";


$text .= "🏢 Service Received: ".$service."\n\n";


$text .= "💬 Feedback:\n".$message;



$url = "https://api.telegram.org/bot".$botToken."/sendMessage";



$data = [

"chat_id" => $chatID,

"text" => $text

];



$options = [

"http" => [

"header" => "Content-Type: application/x-www-form-urlencoded\r\n",

"method" => "POST",

"content" => http_build_query($data)

]

];



$context = stream_context_create($options);



$result = file_get_contents($url,false,$context);



if($result){


echo "

<h2>✅ Feedback Sent Successfully</h2>

<a href='index.html'>Back to Home</a>

";


}

else{


echo "

<h2>❌ Error Sending Feedback</h2>

";


}


?>
