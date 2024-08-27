<?php
$username = "s2653945";
$password = "s2653945";
$database = "d2653945";
$link = mysqli_connect("127.0.0.1", $username, $password, $database);
$output = array();

header("Access-Control-Allow-Origin: *"); // Allows any origin to access the resource
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers

$username = $_REQUEST["username"];
$email = $_REQUEST["email"];
$pass = $_REQUEST["password"];

function userExists($email, $link) {
    $query = "SELECT COUNT(*) AS count FROM users WHERE email = ?";
    $statement = $link->prepare($query);
    $statement->bind_param("s", $email);
    $statement->execute();
    $result = $statement->get_result();
    $row = $result->fetch_assoc();
    if ($row['count'] > 0) {
        return true;
    } else {
        return false;
    }    
}

function signup($link, $username, $email, $password) {
    $sql = "INSERT INTO users(username, email, _password) VALUES (?, ?, ?)";
    $statement = $link->prepare($sql);
    $statement->bind_param("sss", $username, $email, $password);
    if ($statement->execute()) {
        return true;
    } else {
        return false;
    }
}

if ($link) {
    if (!userExists($email, $link)) {
        if (signup($link, $username, $email, $pass)) {
            echo "true";
        } else {
            echo "false";
        }
    } else {
        echo "false";
    }
} else {
    echo "Failed to connect to database";
}

mysqli_close($link);
?>
