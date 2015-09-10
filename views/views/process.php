<?php
$errors = array(); // array to hold validation errors
$data = array(); // array to pass back data
// validate the variables ======================================================
if (empty($_POST['name']))
$errors['name'] = 'Name is required.';
if (empty($_POST['email']))
$errors['email'] = 'Email is required.';
if (empty($_POST['message']))
$errors['message'] = 'Message is required.';
if (empty($_POST['subject']))
$errors['subject'] = 'Subject is required.';
// return a response ===========================================================
// response if there are errors
if ( ! empty($errors)) {
  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors'] = $errors;
  $data['messageError'] = 'Please check the fields in red';
} else {
  // if there are no errors, return a message
  $data['success'] = true;
  $data['messageSuccess'] = 'Message Sent!';
  // CHANGE THE TWO LINES BELOW
  $email_to = "helfi92@gmail.com";
  $email_subject = 'New inquiry: Contact';
  $name = $_POST['name']; // required
  $email_from = $_POST['email']; // required
  $message = $_POST['message']; // required
  $email_message = "Form details below". PHP_EOL. PHP_EOL;
  $email_message .= "Name: ".$name. PHP_EOL ;
  $email_message .= "Email: ".$email_from. PHP_EOL ;
  $email_message .= "Subject: ".$_POST['subject']. PHP_EOL ;
  $email_message .= "Message: ".$message. PHP_EOL ;
  $headers = 'From: '.$email_from."rn".
  'Reply-To: '.$email_from. PHP_EOL  .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);
}
// return all our data to an AJAX call
echo json_encode($data);

?>