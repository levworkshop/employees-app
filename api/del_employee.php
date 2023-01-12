<?php

require_once "./headers.php";
require_once "./database.php";

setHeaders();

try {

    if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
        throw new Exception("bad request");
    }

    $json = file_get_contents(
        "php://input",
        false,
        stream_context_get_default(),
        0,
        $_SERVER["CONTENT_LENGTH"]
    );

    $data = json_decode($json, true);

    $id = $data["id"];

    if (!isset($id) || empty($id)) {
        throw new Exception("bad input");
    }

    $sql = "DELETE FROM employees.workers WHERE id=$id";
    $result = runQuery($sql);

    echo json_encode([
        "ok" => $result
    ]);

} catch (Exception $err) {
    echo json_encode([
        "ok" => false,
        "error" => $err->getMessage()
    ]);
}