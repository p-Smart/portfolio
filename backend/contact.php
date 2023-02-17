<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Origin: *");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 header("Content-Type: application/json; char=UTF-8");
 ?>

<?php
include("connect.php");

if ( isset($_POST["send"]) ){
    $name = mysqli_real_escape_string($conn, $_POST["name"] );
    $email = mysqli_real_escape_string($conn, $_POST["email"] );
    $subject = mysqli_real_escape_string($conn, $_POST["subject"] );
    $message = mysqli_real_escape_string($conn, $_POST["message"] );

    $query_insert = mysqli_query($conn, "INSERT INTO messages SET
        sender_name='$name',
        sender_email='$email',
        subject='$subject',
        message='$message'
    " );
}

if( @$query_insert ){
    echo json_encode( array("sent" => true) );
}
else{
    echo json_encode( array("sent" => false ) );
}

?>