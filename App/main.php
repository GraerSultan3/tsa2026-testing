<?php
  $data = file_get_contents("php://input");

  try
  {
    $processedData = json_decode($data);

    echo "Filled u";
  }
  catch (Exception $e)
  {
    echo $e;
  }  
?>
