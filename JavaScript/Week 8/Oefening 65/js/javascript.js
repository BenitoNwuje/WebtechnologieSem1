let showText = function(id, text){
    let element = document.getElementById(id);
    element.textContent = text;
}

let randomNumber = 8, number, attemptCounter = 0, helpText = "", exited = false;

while (number != randomNumber) {
    number = prompt("Geef een getal tussen 1 en 10 in " + helpText);
    if (number > randomNumber) {
        helpText = "tip: lager";
    } else {
        helpText = "tip: hoger";
    }
    attemptCounter++;
    if (number == "exit") {
        exited = true;
        break;
    }
}

if (!exited) {
    showText("head", "Je hebt het juiste getal geraden in " +attemptCounter+ " keer!");

}