<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['emailaddress'];
$subject= $_POST['subject'];
$text= $_POST['text'];

$to = "galsilv@alumni.usp.br";
$subject = "Mail From Glaucia's portfolio";
$txt ="Name = ". $name . "\r\nEmail = " . $email . "\r\n Subject =" . $subject. "\r\n Text =" . $text;
$headers = "From: noreply@Glaucia's Portfolio.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
