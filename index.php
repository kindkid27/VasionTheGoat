<?php
// Base directory for your project (adjust if needed)
$base_dir = __DIR__; // or use $_SERVER['DOCUMENT_ROOT'] if files are served from the web root

$allowed_pages = [
    'main' => "$base_dir/static/pages/index.html",
    'g' => "$base_dir/static/pages/g.html",
    'play' => "$base_dir/static/pages/play.html",
    's' => "$base_dir/static/pages/settings.html"
];

// Sanitize and validate the input
$p = isset($_GET['p']) ? htmlspecialchars($_GET['p']) : 'main';

// Include the file if it exists in the allowed list
if (array_key_exists($p, $allowed_pages)) {
    include $allowed_pages[$p];
} else {
    // Fallback to 404 or an error page
    include "$base_dir/static/pages/404.html";
}
?>
