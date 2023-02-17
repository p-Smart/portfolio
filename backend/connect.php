<?php

    $conn = mysqli_connect("localhost" ,"root", "", "smartfigures");
    if (!$conn){ die ( "Connection to Database failed" . mysqli_connect_error() ); }

?>