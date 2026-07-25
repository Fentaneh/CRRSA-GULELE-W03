<?php

include "config.php";


$name = $_POST['name'];

$phone = $_POST['phone'];

$message = $_POST['message'];


$text = "📩 CRRSA Customer Feedback\n\n";

$text .= "👤 Name: ".$name."\n";

$text .= "📞 Phone: ".$phone."\n\n";

$text .= "💬 Message:\n".$message;



$url = "https://api.telegram.org/bot".$botToken."/sendMessage";


$data = [
"chat_id"=>$chatID,
"text"=>$text
];


$options = [
"http"=>[
"header"=>"Content-Type: application/x-www-form-urlencoded",
"method"=>"POST",
"content"=>http_build_query($data)
]
];


$context = stream_context_create($options);


$result = file_get_contents($url,false,$context);


if($result){

echo "Feedback sent successfully";

}else{

echo "Error sending feedback";

}


?>
