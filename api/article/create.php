<?php
require_once '../config/database.php';
require_once '../config/headers.php';
require_once '../helpers/response.php';

require_once '../helpers/sanitize.php';

$title = clean($_POST['title'] ?? '');
$summary = clean($_POST['summary'] ?? '');
$content = clean($_POST['content'] ?? '');

$sql = "INSERT INTO articles (title, summary, content) VALUES (?, ?, ?)";
$stmt = $pdo->query($sql);
$stmt = $pdo->prepare($sql);
$stmt->execute([$title, $summary, $content]);

