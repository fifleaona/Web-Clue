<?php
  ob_start();
  session_start();
  echo json_encode($_SESSION['players']);
  
  ob_end_flush();
?>