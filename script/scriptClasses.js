import * as Script from "./functionForClass.js";

class Bird {
    Formuls;
    className = "Bird";
    idName;
    Flag;
    FlagY;
    cicrleX = 0;
    circleY = 0;
    width = 100;
    Speed = 1;

    constructor(id,name) {
        this.className = name;
        this.idName = this.className + id;
        this.spawn();
        this.Formuls = Math.round(Math.random() * 4);
    }

    createElem() {
        let Elem = document.createElement('div');
        Elem.setAttribute("id", `${this.idName}`);
        Elem.classList.add(this.className);
        document.getElementById("contBird").appendChild(Elem);
    }

    spawn() {
        this.createElem();
        this.circleY = Script.rand(0, 500, this.width);
        document.getElementById(this.idName).style.top = this.circleY + "px";
        this.Speed = Math.round((Math.random() + 5) * 2);
        if (Math.round(Math.random()) > 0) {
            document.getElementById(this.idName).style.left = 1366 + this.width + "px";
            this.cicrleX = 1366;
        } else if (this.className == "Bird")
            document.getElementById(this.idName).style.transform = "scale(-1,1)";
    }
}

class Circle extends Bird {
    Formuls = 2;
    spawn() {
        let anSt = Script.initSize();
        // console.log(anSt);
        this.width = Script.getWidthOnCircle(anSt);
        super.spawn();
        document.getElementById(this.idName).classList.add(anSt);
    }
}

export {Circle, Bird};