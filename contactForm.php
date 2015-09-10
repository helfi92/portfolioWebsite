<?

$name = $_POST['Name'];
$message = $_POST['Message'];
$email = $_POST['Email'];
$subject = $_POST['Subject'];

$email_message = "
Name: ".$name."				
Email: ".$email."
Subject: ".$subject."
Message: ".$message."
";

mail("helfi92@gmail.com","New inquiry: Contact",$email_message);
header("Location: email_success.php");

?>