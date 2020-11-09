// Data array

let parkAndRideArr = [
    "Park&Ride E19 Kontich",
    "Park&Ride Bosuil Deurne",
    "Park&Ride Melsele Zwijndrecht",
    "Park&Ride Olympiade Antwerpen",
    "Park&Ride Blancefloer 1 Antwerpen",
    "Park&Ride Blancefloer 2 Antwerpen",
    "Park&Ride Blancefloer 3 Antwerpen",
    "Park&Ride Schoonselhof Antwerpen",
    "Park&Ride Boechout Boechout",
    "Park&Ride Merksem Antwerpen",
    "Park&Ride Luchtbal Antwerpen",
    "Park&Ride Wommelgem Wommelgem",
    "Park&Ride Blancefloer 4 Antwerpen"
];

let contactHourArr = [
    "Maandag 10-16u",
    "Dinsdag 11-17u",
    "Woensdag 8-12u",
    "Donderdag 13-18u",
    "Vrijdag 14-20u",
    "Zaterdag gesloten",
    "Zondag gesloten"
];


//OEFENING 1: Schrijf een functie om in een HTML-element met een specifiek id inhoud toe te voegen.
function showText(text, id) {
    //Hier komt jouw code.
    let element = document.getElementById(id);
    element.textContent = text;
}


/* OEFENING 2A: Vanaf 2020 verstrengen de normen voor LEZ in Antwerpen. Schrijf een js-functie die de euronorm
 * voor diesel checkt en eentje voor de benzine euronorm. Als een auto die op diesel rijdt een euronorm heeft van
 * groter dan 4 mag hij Antwerpen binnen. Een voertuig rijdend op benzine mag de stad binnen, indien de euronorm
 * groter of gelijk is aan 2. De selectie of een voertuig al dan niet op diesel of benzine rijdt en welke euronorm
 * deze heeft, wordt door de gebruiker geselecteerd in een dropdown op index.html. (tip: De waarde die bij
 * de euronorm doorgegeven wordt, moet een getal zijn) 
 */

function checkDieselAllowed(norm) {
    //Hier komt jouw code.
    norm.preventDefault(); //fout
        //norm = parseInt(norm); // is juist 


    if(norm > 4){
        return true;
    }
    else {
        return false;
    }
}

function checkBenzineAllowed(norm) {
    //Hier komt jouw code.
    norm.preventDefault(); //fout
        //norm = parseInt(norm); // is juist 

    if(norm >= 2) {
        return true;
    }
    else{
        return false;
    }
}


/* OEFENING 2B: Schrijf nu een functie waarbij het tekstveld met id ‘colorText’ rood kleurt en de tekst “Sorry, blijf vooral verder
 * rijden op de parking of kom met de fiets naar Antwerpen” verschijnt als het voertuig niet voldoet aan de euronorm.Als het    
 * voertuig wel voldoet, kleurt het tekstveld groen en krijg je de tekst “Welkom in ‘t stad met uw vierwieler” te zien.De tekst 
 * binnen de paragraaf ‘Doe de test’ verdwijnt als de JavaScript wordt gerund. 
 */

function checkCarAllowed() {
    //leer werken met formdata
    //Hier komt jouw code.
    if(checkBenzineAllowed() == false ){
        document.getElementById("colorText").style.color = "red";
        showText("Sorry, blijf vooral verder rijden op de parking of kom met de fiets naar Antwerpen","colorText");
    }
    if(checkDieselAllowed() == false){
        document.getElementById("colorText").style.color = "red";
        showText("Sorry, blijf vooral verder rijden op de parking of kom met de fiets naar Antwerpen","colorText");
    }
    if(checkDieselAllowed() == true){
        document.getElementById("colorText").style.color = "green";
        showText("Welkom in ‘t stad met uw vierwieler","colorText");
    }
    if(checkBenzineAllowed()== true){
        document.getElementById("colorText").style.color = "green";
        showText("Welkom in ‘t stad met uw vierwieler","colorText");
    }


}

document.getElementById("carCheckBtn").addEventListener("click", checkCarAllowed);


/* OEFENING 3: Maak een overzicht van alle parkings en plaats deze op het scherm. Deze zijn te vinden in het bronbestand in de 
 * array ‘parkAndRideArr’.Voor deze data is er onder ‘Parkings rond Antwerpen’ op index.html reeds een leeg ul-element voorzien
 * met id ‘pList’. Om de data in het ul-element te plaatsen maak je gebruik van JavaScript. 
 */

function showParkAndRideList() {
    //Hier komt jouw code.
    let element = document.getElementById("pList");
    let list = document.createElement('li');
    element.appendChild(list);
    for(let i = 0; i < parkAndRideArr.length; i++){
        list.innerHTML = parkAndRideArr[i];
    }

    for (parking of parkAndRideArr){ //dit is juist 
        let listItem = document.createElement("li");
        listItem.textContent = parking;
        element.appendChild(listItem);
    }
}

window.addEventListener("load", showParkAndRideList);


//OEFENING 4: Ga hiervoor naar mapScript.js


/* OEFENING 5 (BONUS-VRAAG): Schrijf een script om de h1-titel op de startpagina (= index.html) te zetten naar een titel met
 * “small-caps”. 
 */

function styleHeading(e) {
    //Hier komt jouw code.
    e.preventDefault();
    let text = "Antwerpen en de rest is parking";
    let smallCaps = text.toLowerCase();
    showText(smallCaps,"home");
    document.getElementsByTagName("h1")[0].style.fontVariant = "small-caps"; //is de juist manier 
}
window.addEventListener("load", styleHeading);