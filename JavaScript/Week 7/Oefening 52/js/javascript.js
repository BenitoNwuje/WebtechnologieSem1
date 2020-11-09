let showText = function (id, text) {
    let textVeld = document.getElementById(id); 
    textVeld.textContent = text;
}
showText("head", "Universal function");
showText("p", "To put text on the screen");
