let showText = function(id, text){
    let element = document.getElementById(id);
    element.textContent = text;
}
let passwoord = prompt("Geef een passwoord");

if (passwoord === "WireFrame") {
    showText("head", "Toegang toestaan");
} else {
    showText("head", "Toegang geweigerd");
}