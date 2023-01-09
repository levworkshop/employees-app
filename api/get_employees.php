<?php

require_once "./headers.php";

try {
    $db_conn = mysqli_connect('localhost', 'root', 'password', 'employees');
    $sql = "SELECT * FROM workers";
    $result = mysqli_query($db_conn, $sql);

    setHeaders();
    echo json_encode($result);

} catch (Exception $err) {
    echo "Error: " . $err->getMessage();
}