<?php
  $data = file_get_contents("php://input");

  try
  {
    $processedData = new SimpleXMLElement($data);
    $rType = (string) $processedData->rType;
    $dType = (string) $processedData->dType;
    $index = (int) $processedData->index;

    echo "Filled u";
  }
  catch (Exception $e)
  {
    echo $e;
  }  
?>
