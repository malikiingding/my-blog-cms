<?php
require_once '../config/headers.php';
require_once '../config/database.php';
require_once '../helpers/response.php';
require_once '../helpers/sanitize.php';

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if (!$id) {
    jsonResponse(['error' => 'Missing or invalid ID'], 400);
}

try {
    $sql = "SELECT id, title, summary, content FROM articles WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$id]);
    $article = $stmt->fetch();

    if (!$article) {
        jsonResponse(['error' => 'Article not found'], 404);
    }

    jsonResponse($article);
} catch (PDOException $e) {
    jsonResponse(['error' => 'Database error'], 500);
}
