<?php

function exQuery($query)
{
    $dbCon = new mysqli("exploer.beget.tech", "exploer_wp1", "Z2y5cL&6", "exploer_wp1");
    if ($dbCon->connect_error) {
        die("Con er: " . $dbCon->connect_error);
    }
    $res = mysqli_query($dbCon, $query);
    mysqli_close($dbCon);
    return $res;
}
function addTime($name,$score){
    $name = screen($name);
    $query = "INSERT INTO `time`(`name`, `score`) VALUES ($name,$score)";
    exQuery($query);
}
function addSpeed($name,$time){
    $name = screen($name);
    $time = screen($time);
    $query = "INSERT INTO `speed`(`name`, `speed`) VALUES ($name,$time)";
    exQuery($query);
}
function selectTime(){
    $query = "SELECT * FROM `time`";
    return exQuery($query);
}
function selectSpeed(){
    $query = "SELECT * FROM `speed`";
    return exQuery($query);
}
function arrEx($data){
    $arr = [];
    while ($row = mysqli_fetch_array($data)){
        array_push($arr,$row);
    }
    return $arr;
}
if($_POST["par"]==1){
    addTime($_POST["name"],$_POST["score"]);
    header("Content-Type: application/json");
    header("HTTP/1.1 201");
    echo json_encode(arrEx(selectTime()));

}
if($_POST["par"]==2){
    addSpeed($_POST["name"],$_POST["time"]);
    header("Content-Type: application/json");
    header("HTTP/1.1 201");
    echo json_encode(arrEx(selectSpeed()));

}

function screen($data){
    return "'$data'";
}