<?php
include 'encabezado.php';
$dir = '../img/galeria'; // Ruta a la carpeta de la galería
$files = array_diff(scandir($dir), array('..', '.')); // Obtener archivos, excluyendo '.' y '..'

header('Content-Type: application/json');

try {
  echo json_encode(array_values($files)); // Devolver la lista de archivos en formato JSON
} catch (\Throwable $th) {
  echo $th->getMessage(); // Manejo de errores
  echo $th->getLine(); // Línea de error
  echo $th->getFile(); // Archivo de error
  echo $th->getTraceAsString(); // Traza de error
  echo $th->getCode(); // Código de error
} finally {
}
?>
