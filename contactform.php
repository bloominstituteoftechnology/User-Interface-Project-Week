<?php 


if (isset($_POST['submit'])) {

  $mailFrom = $_POST['email'];
  $buildingPlanned = $_POST['inputSelect'];
  $message = $_POST['message'];
  $smallBusiness = $_POST['smallBusiness'];
  $residential = $_POST['residential'];
  $corp = $_POST['corporation'];



  $mailTo = "riley@riley.gg";
  $headers = "From: " . $mailFrom;

  $txt = "New email from S&J form \n\n Email: {$mailFrom} \n\n Amount of buildings that need planning: {$buildingPlanned} \n\n Message: {$message} \n\n Business Type: {$smallBusiness} {$residential} {$corp} \n\n";


  mail($mailTo, $subject, $txt, $headers);

  header("Location:  thanks.html");

}