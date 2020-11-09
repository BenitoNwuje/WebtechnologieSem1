function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let randomNumber = 6, number, attemptCounter = 0, helpText = "";

while(number != randomNumber){
    number = prompt("Geef een getal tussen 1 en 10 in " + helpText);
    if(number > randomNumber){
        helpText = "tip: lager";
    } else {
        helpText = "tip: hoger";
    }
    attemptCounter++;
}

showText("Je hebt het juiste getal geraden in " + attemptCounter + " keer!", "mainHeading");
