// DATA ARRAY

let contactHourArr = [
    "Maandag 10-16u",
    "Dinsdag 11-17u",
    "Woensdag 8-12u",
    "Donderdag 13-18u",
    "Vrijdag 14-20u",
    "Zaterdag gesloten",
    "Zondag gesloten"
];



// OEFENING 8: Maak een overzicht van de openingsuren en plaats deze op het scherm rechts. Deze zijn te vinden in de array ‘contactHourArr’.Voor deze data is er op index.html reeds een leeg ul-element voorzien met id ‘hourList’. Om de data in het ul-element te plaatsen maak je gebruik van JavaScript. 
function showContact(){
    for(let hours of contactHourArr){
        let ulElement = document.getElementById("hourList");
        let list = document.createElement("li");
        list.textContent = hours;
        ulElement.appendChild(list);
    }
}
window.addEventListener("load",showContact);



//OEFENING 9: Maak een rekentool voor de "Chicken prize calculator" (index.html) waarmee je de prijs van het aantal kippen kan berekenen, afhankelijk van de grootte (groot= 8€, klein= 6€) en waarbij gekozen kan worden uit volgende types via een dropdown: "unborn chicken= 2€", "whicken chicken= 2,5€", "black chicken= 2,8€", "useless chicken= 2,8€", "usefuln chicken= 2€" en "dead chicken= 3,2€".
// Tip: Maak gebruik van switch.

function rekenTool(e){
    e.preventDefault();
    let totaal = 0;
    let sizePrice = 0;
    let typePrice = 0;
    let myform = document.getElementById("priceForm");
    let vormData = new FormData(e.target);
    let amountKeuze = vormData.get('amount');
    let keuze2 = vormData.get('size');
    let keuze3 = vormData.get('type');
    if(keuze2 == "big"){
        sizePrice = 8;
    } else{
        pricePrice = 6;
    }
    switch (keuze3) {
        case "unborn":
        price = 2;
        totaal = amountKeuze*(sizePrice + typePrice)
        document.getElementById("priceSpan").textContent = totaal;
            break;
        case "whicken":
            price = 2.5;
            totaal = amountKeuze*(sizePrice + typePrice)
            document.getElementById("priceSpan").textContent = totaal;
            break;
        case "black":
            price = 2.5;
            totaal = amountKeuze*(sizePrice + typePrice)
            document.getElementById("priceSpan").textContent = totaal;
            break;
        case "useless":
            price = 2.8;
            totaal = amountKeuze*(sizePrice + typePrice)
            document.getElementById("priceSpan").textContent = totaal;
            break;
        case "useful":
            price = 2;
            totaal = amountKeuze*(sizePrice + typePrice)
            document.getElementById("priceSpan").textContent = totaal;
            break;   
        case "dead":
            price = 3.2;
            totaal = amountKeuze*(sizePrice + typePrice)
            document.getElementById("priceSpan").textContent = totaal;
            break;               
        default:
            break;
    }

}

document.getElementById("priceForm").addEventListener("submit",rekenTool);













//OEFENING 10: Verander het icoon van de marker naar "Egg.png". Let hierbij op de afmetingen ([70, 93]).

let mymap = L.map('mapContainer').setView([51.22992, 4.41612], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibGVjdG9yd291dGVyIiwiYSI6ImNrNTJrbXVraDB6cWwzbHFuZmFpN3lrM3MifQ.hNfZWRybtm-L49c9TPZ-dQ'
}).addTo(mymap);

L.marker([51.22992, 4.41612]).addTo(mymap);

let icon = L.icon({
    iconUrl: "./images/egg.png",
    iconSize: [70,93]
})
L.marker([51.22992, 4.41612], {icon: icon}).addTo(mymap);
