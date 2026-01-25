<?php
  $data = file_get_contents("php://input");

  try
  {
    $processedData = json_decode($data);

    if ($processedData->rType == "getUser")
    {
        echo "Nice to see you user";
    }
  }
  catch (Exception $e)
  {
    echo $e;
  }  
?>
