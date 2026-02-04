<?php
  include("db_connection.php");

  $data = file_get_contents("php://input");

  try
  {
    $processedData = json_decode($data);
    if ($processedData === null)
    {
        echo $data;
        return;
    }
    if ($processedData->rType == "getUser")
    {
      $sql = $conn->prepare("SELECT * FROM user_accounts WHERE username=? AND password=? LIMIT 1");
      $sql->bind_param("ss", $processedData->username, $processedData->password);
      $sql->execute();
      $result = $sql->get_result();

      if ($result and $result->num_rows > 0)
      {
        $row = $result->fetch_assoc();
        echo sprintf("Welcome %s", $row['first_name']);
      }
      else
      {
        echo "nobody found";
      }

      $result->free();
      $sql->close();
      $conn->close();
    }
    else if ($processedData->rType == "getResources")
    {
      $sql = $conn->prepare("SELECT `shortDescription`, `longDescription` from `resources`");
      $sql->execute();
      $result = $sql->get_result();

      if ($result and $result->num_rows > 0)
      {
        foreach($result as $row)
        {
          $row = $result->fetch_assoc();
          $data = (object) ['shortDescription' => $row['shortDescription'], 'longDescription' => $row['longDescription']];
          echo json_encode($data);
        }
      }

      $result->free();
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
