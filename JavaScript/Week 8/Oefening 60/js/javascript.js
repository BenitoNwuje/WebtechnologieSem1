

let showText = function(id, text) {
    let element = document.getElementById(id);
    element.textContent = text;
}


let score = prompt("Voer in jouw score");

if (score > 50) {

    showText("mainHeading","Geslaagd");
}
else{
    showText("mainHeading", "Niet geslaagd");
}