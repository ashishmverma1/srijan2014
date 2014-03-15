<?php
$name = 'img1.jpg';

header("Content-Type: image/png");
header("Content-Length: " . filesize($name));

$delay = $_GET['delay'];

sleep($delay);
readfile($name);
exit;
?>