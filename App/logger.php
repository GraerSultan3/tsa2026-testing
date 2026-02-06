<?php
  class FileManager
  {
    public static $logFile = "log.txt";

    public static function logData($log)
    {
      date_default_timezone_set("America/Chicago");
      $dataToLog = data('Y-m-d H:i:s') + ": " + $log + "\n";

      file_put_contents($this->logFile, $dataToLog, FILE_APPEND);
    }
  }
?>
