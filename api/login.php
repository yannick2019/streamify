<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

require("./db_connection.php");
require 'vendor/autoload.php'; 

use Firebase\JWT\JWT;

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);

// Check if username and password are set
if (isset($data['username']) && isset($data['password'])) {
    $username = htmlspecialchars($data['username']);
    $password = htmlspecialchars($data['password']);

    // Fetch user data from the database
    $stmt = $conn->prepare('SELECT * FROM users WHERE username = :username');
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        // Verify the password
        if (password_verify($password, $user['password'])) {
            $config = include './config/config.php'; 

            // Password is correct, generate JWT token
            $secretKey = $config['JWT_FIREBASE_SECRET_KEY'];
            $issuedAt = time();
            $expirationTime = $issuedAt + 3600; // Token expiration time (1 hour)

            $tokenData = array(
                'iat' => $issuedAt, // Issued at
                'exp' => $expirationTime, // Expiration time
                'data' => array(
                    'username' => $user['username'],
                    'role' => $user['role'],
                ),
            );

            $token = JWT::encode($tokenData, $secretKey, 'HS256');

            $response = array(
                'message' => 'Connexion réussie',
                'token' => $token,
                'username' => $user['username'],
                'role' => $user['role'],
            );

            echo json_encode($response);
        } else {
            // Invalid password
            echo json_encode(array('error' => 'Invalid username or password'));
        }
    } else {
        // User not found
        echo json_encode(array('error' => 'User not found'));
    }
} else {
    // Invalid request
    echo json_encode(array('error' => 'Invalid request'));
}

?>
