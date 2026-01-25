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
      $sql = $conn->prepare("SELECT * FROM user_accounts WHERE username=? AND password=? LIMIT 1");
      $sql->bind_param("ss", $processedData->username, $processedData->password);
      $result = $sql->execute();

      if ($result != 0)
      {
        $row = $result->fetch_assoc();
        echo sprintf("Welcome %s", $row['first_name']);
      }
      else
      {
        echo "nobody found;
      }

      $sql->close();
      $conn->close();
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
