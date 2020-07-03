/*
+ унарный плюс
конверт строки в число
 */

// TODO опять пупа и лупа напутали ввод в функцию, поправь и дизигн главного меню

import {Bird, Circle} from "./scriptClasses.js";
import * as Script from "./functionForClass.js";
import * as Exp from "./queryToServer.js";

// var count = prompt("Колво птиц?");
var Elements = [];
var pause = true;
var parameter = 1;
var sec = 0;
var min = 0;
var znach = 0;
$(".menu li:nth-child(1)").click(function () {
    gameStart(1);
});
$(".menu li:nth-child(2)").click(function () {
    gameStart(2);
});
$(".menu li:nth-child(3)").click(function () {
    gameStart(3);
});
document.onkeydown = function (e) {
    if (e.key == "Escape") {
        pauseFun();
    }
};
$("#buttonSend").click(function () {
    let name = $("#nameInput").val();
    Exp.dataSend(name,parameter);
})
function pauseFun() {
    if (pause) {
        $("#menu").hide();
        $(".bg-fon").hide();
    } else {
        $(".bg-fon").show();
        $("#menu").show();
    }
    pause = !pause;
}

function gameStart(param) {
    let rewrite = 0;
    if (Elements[0] != null) {
        rewrite=true;
        sec = -1;
        min = 0;
    }
    pauseFun();
    parameter = param;
    let count;
    switch (param) {
        case 1:
            count = 10;
            break;
        case 2:
            count = 30;
            break;
        case 3:
            count = 10;
            break;

    }
    spawnElement(count);

    if (!rewrite) {
        $("#time").text("Time: " + conT(min) + ":" + conT(sec));
        timer();
        move();
    }
}

    function timer() {
        if (!pause)
            sec++;

        if (sec == 60) {
            min++;
            if(min==3){
                endGame();
            }
            sec = 0;
        }

        $("#time").text("Time: " + conT(min) + ":" + conT(sec));
        setTimeout(timer, 1000);
    }

function conT(number) {
    return number <= 9 ? ("0" + number) : number;
}
function spawnElement(count) {
    Elements = [];
    $("#contBird>div").remove();
    for (let i = 0; i < count; i++) {
        Elements.push(new Bird(i, "Bird"));
        Elements.push(new Circle(i, "Circle"));
    }
    for (let i = 0; i < Elements.length; i++) {
        document.getElementById(Elements[i].idName).onclick = f;
    }
}
function f() {
    let a = 0;
    for (let i = 0; i < Elements.length; i++) {
        if (this == document.getElementById(Elements[i].idName)) {
            if (this.className != "Bird")
                switch (Elements[i].width) {
                    case 33:
                        a = 30;
                        break;
                    case 41:
                        a = 20;
                        break;
                    case 66:
                        a = 10;
                        break;
                }
            else
                a = -10;
            Elements.splice(i, 1);
            break;
        }
    }
    const score = $("#score");
    let value = +score.text().split(" ")[1] + a;
    score.text("Score " + (value));
    this.remove();
    if($(".Circle").length==0){
        switch (parameter) {
            case 1:
                //Speed

                endGame();
                break;
            case 2:
                //Time(Spawn new bird)
                spawnElement(30);
                break;
            case 3:
                //Free game
                spawnElement(10);
                break;
        }
    }
}

function traektoria(Speed, traektoria) {
    let a = 0;
    switch (traektoria) {
        case 0:
            break;
        case 1:
            a = Math.cos(Speed);
            break;
        case 2:
            a = Math.log(Speed);
            break;
        case 3:
            a = Math.sqrt(Speed);
            break;
        case 4:
            a = 0.1 * Math.pow(Speed, 2);
            break;
    }
    return a;
}

function move() {
    if (!pause) {
        for (let i = 0; i < Elements.length; i++) {
            let element = Elements[i];
            let locSpeed = element.Speed;
            let randY = traektoria(element.Speed, element.Formuls);
            if (element.FlagY)
                randY *= -1;
            if (element.circleY + randY > 500 - element.width)
                element.FlagY = !element.FlagY;
            else if (element.circleY + randY <= 0) {
                element.FlagY = !element.FlagY;
            } else {
                element.circleY += randY;
            }

            if (element.cicrleX > 1366 || element.cicrleX <= -element.width && element.Flag) {
                let random = Script.rand(0, 500, element.width);
                document.getElementById(element.idName).style.top = random + "px";
                element.circleY = random;
                element.Flag = !element.Flag;
                element.Speed = Math.round((Math.random()) * 9) + 1;
                if (element.className == "Bird")
                    if (!element.Flag)
                        document.getElementById(element.idName).style.transform = "scale(-1,1)";
                    else
                        document.getElementById(element.idName).style.transform = "";

            }

            if (element.Flag)
                locSpeed *= -1;
            element.cicrleX += locSpeed;
            document.getElementById(element.idName).style.top = element.circleY + "px";
            document.getElementById(element.idName).style.left = element.cicrleX + "px";

        }
    }
    setTimeout(move, 50);
}
function endGame() {
    Elements = [];
    $("#contBird>div").remove();
    pauseFun();
    if(parameter==1){
        znach = $("#time").text().split(" ")[1];
    }
    if(parameter==2){
        znach = $("#score").text().split(" ")[1];
    }
    $("#Modal1").modal("show");
}