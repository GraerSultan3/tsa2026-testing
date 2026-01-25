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
      $sql = sprintf("SELECT * FROM user_accounts WHERE username=%s AND password=%s", $processedData->username, $processedData->password);
      $result = $conn->query($sql);

      if ($result->num_rows > 0)
      {
        $row = $result->fetch_assoc();
        echo sprintf("Welcome %s", $rpw['first_name']);
      }
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
