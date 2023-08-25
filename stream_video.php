<?php
// Set the CORS headers
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET"); // Allow only GET requests
header("Access-Control-Allow-Headers: Content-Type"); // Allow specified headers

// Serve the video
$video_url = "https://api.onedrive.com/"; // Replace with your actual OneDrive video link
header("Content-Type: video/mp4"); // Set the appropriate Content-Type for the video
readfile($video_url); // Output the video content
?>
