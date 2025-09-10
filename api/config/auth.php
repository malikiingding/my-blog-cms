<?php
$headers = getallheaders();
$token = $headers['Authorization'] ?? '';

if ($token !== 'Bearer YOUR_SECRET_TOKEN') {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}
