<?php
require_once '../config/database.php';
require_once '../config/headers.php';
require_once '../helpers/response.php';

$sql = "SELECT id, title, summary FROM articles ORDER BY created_at DESC";
$stmt = $pdo->query($sql);
$articles = $stmt->fetchAll();

jsonResponse($articles);
