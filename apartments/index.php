<?php
header("Content-Type: application/json");
?>
<?php
$filename = 'apartments.xml';
$xml = file_get_contents($filename);
$sxml = simplexml_load_string($xml);
echo json_encode($sxml);
?>