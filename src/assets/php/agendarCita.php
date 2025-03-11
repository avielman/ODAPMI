<?php
include 'encabezado.php';

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$fechaReservacion = $_POST['fechaReservacion'];
$horaReservacion = $_POST['horaReservacion'];
$proyecto = $_POST['proyecto'];
$fechaCreacion = date('Y-m-d H:i:s');

// Constantes de correo
define('REMITENTE', 'ongodapmi@gmail.com');
define('DESTINATARIO', 'avielman@gmail.com');

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$fechaReservacion = $_POST['fechaReservacion'];
$horaReservacion = $_POST['horaReservacion'];
$proyecto = $_POST['proyecto'];
$fechaCreacion = date('Y-m-d H:i:s');

// Conexión a la base de datos (ajusta los datos según tu configuración)
$servername = "localhost";
$username = "vielman";
$password = "Linux123@";
$dbname = "odapmior_odapmi";
/*
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}


// Guardar datos en la base de datos

$sql = "INSERT INTO reservaciones (nombre, email, fecha_reservacion, hora_reservacion, proyecto, fechacreacion)
        VALUES ('$nombre', '$email', '$fechaReservacion', '$horaReservacion', '$proyecto', '$fechaCreacion')";
*/
//if ($conn->query($sql) === TRUE) {
    // Enviar correo electrónico
    $asunto = "Nueva reservación";
    $mensaje = "Se ha recibido una nueva reservación:\n\n" .
               "Nombre: " . $nombre . "\n" .
               "Email: " . $email . "\n" .
               "Fecha de reservación: " . $fechaReservacion . "\n" .
               "Hora de reservación: " . $horaReservacion . "\n" .
               "Proyecto: " . $proyecto;

    $headers = "From: " . REMITENTE;

    if (mail(DESTINATARIO, $asunto, $mensaje, $headers)) {
        echo "La reservación se ha guardado y se ha enviado el correo electrónico.";
    } else {
        echo "La reservación se ha guardado, pero ha habido un error al enviar el correo electrónico.";
    }
    /*
} else {
    echo "Error al guardar la reservación: " . $conn->error;
}

$conn->close();
*/
?>