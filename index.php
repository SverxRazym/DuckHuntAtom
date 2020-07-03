<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/css.css">
    <title>DuckHunt</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
</head>
<body>
<?php
include_once("modal.php");
?>
<div class="bg-fon"></div>
<div class="container-fluid">
    <div id="area">
        <div id="counter">
            <p class="textCont float-right" id="score">Score: 0</p>
            <p class="textCont" id="time">Time</p>
        </div>
        <div id="layout" class="row">
            <div id="contBird"></div>
            <div id="menu" class="menu mx-auto text-center   " >
                <h2>Bird Hunt</h2>
                <p>Целью игры является сбитие тарелочек</p>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Игра на скорость</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Игра на время</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Свободная игра</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
<script type="module" src="script/mainScript.js"></script>


</body>
</html>