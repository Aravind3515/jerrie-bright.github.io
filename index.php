<?php

$to = "jerriebright@gmail.com";
$Subject = "Email from Portfolio-Jerrin Bright";

$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$headers .= "Content-type: text/html;\r\n";
$headers .= "From: $email";

mail ($to, $Subject, $comment, $headers);
echo "Hi $name, the mail has been sent! Will come back asap. Thank you!"

?>
