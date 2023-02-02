<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bd_web";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Insert a new photo
$title = "My first photo";
$image = file_get_contents("photo.jpg");
$sql = "INSERT INTO photos (title, image) VALUES ('$title', '$image')";
if (mysqli_query($conn, $sql)) {
    echo "New photo added successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Get all photos
$sql = "SELECT * FROM photos";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
}