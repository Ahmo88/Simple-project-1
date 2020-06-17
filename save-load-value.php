
<?php

//save text value from textBox in to file 
if (isset($_POST['text1Value'])) {
    $text1 = $_POST['text1Value'];
    $filename = "files/text1.txt";
    $file = fopen($filename, "w");
    fwrite($file, $text1);
    fclose($file);
}
//delete value from text file
if (isset($_POST['clear'])) {
    $data = $_POST['clear'];
    $filename = "files/text1.txt";
    $file = fopen($filename, "w");
    fwrite($file, $data);
    fclose($file);
}

?>
 

