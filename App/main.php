<?php
  include("db_connection.php");

  $data = file_get_contents("php://input");

  try
  {
    $processedData = json_decode($data);
    if ($processedData === null)
    {
        echo $data;
    }
    if ($processedData->rType == "getUser")
    {
        echo "Nice to see you user";
    }
    else
    {
        echo $processedData->rType;
    }
  }
  catch (Exception $e)
  {
    echo $e;
  }  
?>
