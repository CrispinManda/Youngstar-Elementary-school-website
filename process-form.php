<?php

$name = $_POST["name"];
$message = $_POST["message"];
$priority = filter_input(INPUT_POST, "priority",FILTER_VALIDATE_INT);
$type =  filter_input(INPUT_POST, "type",FILTER_VALIDATE_INT);
$terms =  filter_input(INPUT_POST, "terms",FILTER_VALIDATE_BOOL);

if (! $terms) {
    die ("terms must be accepted");
}

$host = "localhost";
$dbname = "message_db";
$username ="root";
$password = "";

$conn = mysqli_connect(hostname: $host, username: $username, password: $password,database: $dbname);
   if (mysqli_connect_errno()) {
    die("connection error: " . mysqli_connect_error());
   }

   $sql = "INSERT INTO message (name,body,priority,type)
    VALUES (?, ?, ?, ?)";
    $stmt = mysqli_stmt_init($conn);

    if (! mysqli_stmtprepare($stmt,$sql)) {

    }
    
    mysqli_stmt_bind_param($stmt, "ssii",$name, $message, $priority, $type);
    
    mysqli_stmt_execute($stmt);
    echo "record saved.";



?> 
