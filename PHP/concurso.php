<?php
require_once('conexion.php');


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $db = Db::conectar();

        $select = $db->query('SELECT * FROM concurso');

        $listaLibros = $select->fetchAll(PDO::FETCH_ASSOC);
        header('Content-type: application/json');
        echo json_encode($listaLibros);

        break;
    case 'POST':
        $db = Db::conectar();
        $insert = $db->prepare('INSERT INTO concurso( nombre, cantidad, lugar, hora,fecha) VALUES (:nombre,:cantidad,:lugar,:hora,:fecha)');
        $insert->bindValue('nombre', $_POST['nombre']);
        $insert->bindValue('cantidad', $_POST['cantidad']);
        $insert->bindValue('lugar', $_POST['lugar']);
        $insert->bindValue('hora', $_POST['hora']);
        $insert->bindValue('fecha', $_POST['fecha']);
        $insert->execute();
        header('Content-type: application/json');
        echo json_encode(['message' => 'concurso creado correctamente']);
        break;

    case 'PUT':
        $db = Db::conectar();
        parse_str(file_get_contents('php://input'), $_PUT);
 
        $insert = $db->prepare('UPDATE `concurso` SET nombre=:nombre,`cantidad`=:cantidad,`lugar`=:lugar,`hora`=:hora,`fecha`=:fecha WHERE id = ' . $_PUT['id']);
        $insert->bindValue('nombre', $_PUT['nombre']);
        $insert->bindValue('cantidad', $_PUT['cantidad']);
        $insert->bindValue('lugar', $_PUT['lugar']);
        $insert->bindValue('hora', $_PUT['hora']);
        $insert->bindValue('fecha', $_PUT['fecha']);
        $insert->execute();
        header('Content-type: application/json');
        echo json_encode(['message' => 'concurso editado correctamente']);
        break;

    case 'DELETE':

        $db = Db::conectar();
   
        $insert = $db->prepare('DELETE FROM `concurso` WHERE id ='.$_GET['id']);
        $insert->execute();
        header('Content-type: application/json');
        echo json_encode(['message' => 'concurso eliminado correctamente']);
        break;




    default:
        echo json_encode(['message' => 'CONCURSO PHP VERSION ']);
}
