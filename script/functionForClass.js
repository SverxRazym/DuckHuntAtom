export function rand(min, max, width) {
    let ran = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return 500 - ran >= width ? ran : ran - width;
}
export function initSize() {
    let ran = Math.random() * 100;
    if (ran < 33) return "lit";
    else if (ran < 66) return "med";
    else return "lar";
}

export function getWidthOnCircle(str) {
    switch (str) {
        case "lit":
            return 33;
        case "med":
            return 41;
        case "lar":
            return 66;
    }
}
