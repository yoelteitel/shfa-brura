
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $word = $_POST['word'];
    echo "<h3>נלמדה המילה: " . $word . "</h3>";
}
?>
