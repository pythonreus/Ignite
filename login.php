<?php
$username = "s2653945";
$password = "s2653945";
$database = "d2653945";
$link = mysqli_connect("127.0.0.1", $username, $password, $database);
$output = array();

header("Access-Control-Allow-Origin: *"); // Allows any origin to access the resource
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers

$email = $_REQUEST["email"];
$pass = $_REQUEST["password"];

function userExists($email, $pass,$link) {
    $query = "SELECT COUNT(*) AS count FROM users WHERE email = ? AND _password = ?";
    $statement = $link->prepare($query);
    $statement->bind_param("ss", $email,$pass);
    $statement->execute();
    $result = $statement->get_result();
    $row = $result->fetch_assoc();
    if ($row['count'] == 1) {
        return true;
    } else {
        return false;
    }    
}


if ($link) {
    if (!userExists($email, $pass,$link)) {
        echo "false";
    } else {
        echo "true";
    }
} else {
    echo "Failed to connect to database";
}

mysqli_close($link);
?>
