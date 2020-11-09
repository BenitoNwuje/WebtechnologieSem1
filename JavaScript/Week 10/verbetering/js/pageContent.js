//Data arrays en objecten

let openingHourArr = [
    "Maandag 10-16u",
    "Dinsdag 11-17u",
    "Woensdag 8-12u",
    "Donderdag 13-18u",
    "Vrijdag 14-20u",
    "Zaterdag gesloten",
    "Zondag gesloten"
];

let destinationArr = [
    {
        "name": "Budapest",
        "price": 50
    },
    {
        "name": "Parijs",
        "price": 30
    },
    {
        "name": "Praag",
        "price": 40
    },
    {
        "name": "Berlijn",
        "price": 60
    }
];

let busTypes = [
    {
        "type": "Lijnbus",
        "description": "Een lijnbus is een bus die wordt ingezet voor openbaar vervoer. Er kan onderscheid gemaakt worden tussen stads-, streek- en langeafstandsbussen. Lijnbussen zijn vaak voorzien van apparatuur voor verkeerslichtbeïnvloeding, zoals VETAG. "
    },
    {
        "type": "Stadsbus",
        "description": "Een stadsbus is een bus geschikt voor personenvervoer binnen een stad of binnen een stedelijke agglomeratie. Een stadsbus heeft tegenwoordig altijd een automatische transmissie, brede in- en uitstapdeuren en veel staanplaatsen. De nieuwste generatie bussen zijn lagevloerbussen zonder verhoogde instap. De in- en uitstap is dan circa 34 cm vanaf het wegdek. Dit wordt minder bij haltes met verhoogde trottoirs. Sommige bussen beschikken over een knielfunctie. Stadsbussen komen voor in verschillende lengtes: de midibus (9-12 meter), standaard (12 meter), stretched (15 meter, 3 assen waarvan 1 sleepas), de gelede bussen (18 meter, 3 assen) en de dubbelgelede (25,25 meter 4 assen). In sommige steden rijden elektrische stadsbussen zoals trolleybussen. "
    },
    {
        "type": "Streekbus",
        "description": "Een streekbus is een bus geschikt voor vervoer tussen steden en dorpen met meer zitplaatsen dan een stadsbus. De meeste streekbussen zijn 12 meter lang, hoewel ook gelede bussen en bussen met sleepassen worden ingezet. "
    },
    {
        "type": "Langeafstandsbus",
        "description": "Langeafstandsbussen zijn soms 15 meter lang (in plaats van de voor andere bussen gebruikelijke 12 meter), en voorzien van 44 zitplaatsen. Bij de achteras is dan een extra as bijgeplaatst (sleepas) om het draagvermogen per wiel binnen de wettelijke grenzen te houden. Deze zogenaamde derde as welke bij bochten meesturend is, wordt bij een snelheid van 20 km/u of meer weer geblokkeerd om de stabiliteit van de bus bij hogere snelheden te waarborgen. "
    }
];

//Functies voor algemeen gebruik
function showText(text, id) {
    let element = document.getElementById(id);
    element.textContent = text;
}

//Oefening 70

function addPersonalMessage(e) { //Een functie die een persoonlijk bericht toont aan de hand van de info ingevuld in een form;
    e.preventDefault(); //Zorg dat de action van de form niet wordt uitgevoerd.
    let loginFormData = new FormData(e.target); //Haal de data uit de form die je uit het event haalt
    let name = loginFormData.get("userName"); //Haal de value op van het element met name="userName"
    let personalMessage = "Dag " + name + " welkom op onze website"; //Stel bericht op
    showText(personalMessage, "welcomeMessage"); //Toon op scherm
}

document.getElementById("loginForm").addEventListener("submit", addPersonalMessage); //Voeg addPersonalMessage() toe als listener op het submit event

//Oefening 71

function showOpeningHours(e) { //Een functie om de openingsuren te tonen
    let openingHoursList = document.getElementById("openingHoursList"); //Haal de lijst op
    for (let entry of openingHourArr) { //Voor alle elementen in onze array
        let listElement = document.createElement("li"); //Maak een nieuw li element aan
        listElement.textContent = entry; //Verander de tekst naar hetgeen in onze array staat
        openingHoursList.appendChild(listElement); //Voeg het li element toe aan de lijst
    }
}

window.addEventListener("load", showOpeningHours); //Voeg showOpeningsHours toe als een listener op het load event. 


//Oefening 72

function showDestinations(e) { //Een functie om de bestemingen op het scherm te tonen
    let destinationList = document.getElementById("destinationList");
    while (destinationList.firstChild) { //Zolang er een kind object is 
        destinationList.removeChild(destinationList.firstChild); //verwijder dit object 
    } // Zo beginnen we terug met een lege lijst. 
    for (let entry of destinationArr) { // identiek aan 71
        let listElement = document.createElement("li");
        listElement.textContent = entry.name;
        destinationList.appendChild(listElement);
    }
}

document.getElementById("destinationBtn").addEventListener("click", showDestinations); //Voeg showDestinations toe als listener op het click event van de button

//Oefening 72 tweede manier
/*
function showDestinations(e) { //Een functie om de bestemingen op het scherm te tonen
    let destinationList = document.getElementById("destinationList");
    for (let entry of destinationArr) { // identiek aan 71
        let listElement = document.createElement("li");
        listElement.textContent = entry.name;
        destinationList.appendChild(listElement);
    }
    document.getElementById("destinationBtn").removeEventListener("click", showDestinations);
}

document.getElementById("destinationBtn").addEventListener("click", showDestinations); //Voeg showDestinations toe als listener op het click event van de button
*/

//Oefening 73

function showBusses(e) { // Een functie die de verschilende types bussen op het scherm toont
    let busSection = document.getElementById("busses"); // Haal de section van de bussen op 
    for (let bus of busTypes){// Voor alle bussen in busTypes
        let busArticle = document.createElement("article");// Maak een article aan
        let articleHeading = document.createElement("h3");// Maak een h3 element aan
        articleHeading.textContent = bus.type; // Steek het type in dit h3 element 
        let articleText = document.createElement("p"); // Maak een p element aan
        articleText.textContent = bus.description; // Steek de beschrijving in dit p element
        busArticle.appendChild(articleHeading); // Voeg het h3 element toe aan het article element 
        busArticle.appendChild(articleText); // Voeg het p element toe aan het article element
        busSection.appendChild(busArticle); // Voeg het article element toe aan het section element
    }
}


window.addEventListener("load", showBusses); // Zorg dat de functie wordt uitgevoerd als de pagina geladen is


//Oefening 74

function changeColor(color){ //Een functie om de achtergrondkleur te veranderen
    let bodyEl = document.getElementsByTagName("body")[0]; //Zoek alle body elementen en neem het 1ste
    bodyEl.style.backgroundColor = color; //Verander de achtergrondkleur naar de opgegeven kleur
}

function changeListStyle(style){ //Een functie om de stijl van alle lijsten te wijzigen (buiten van de nav lijst)
    let lists = document.getElementsByTagName("ul"); //Haal alle lijst elementen op
    for (list of lists){ //Voor elk lijst element:
        if (list.id != "nav"){ //Als het niet het id "nav" draagt:
            list.style.listStyleType = style; //Verander de stijl naar de opgegeven stijl
        }
    }
}

function applySettings(e) {
    e.preventDefault(); //Zorg dat de standaard form actie niet wordt uitgevoerd
    let settingsFormData = new FormData(e.target); //Haal de data uit de form die je uit het event haalt
    changeColor(settingsFormData.get("backgroundColor")); //Haal de gekozen kleur uit de data en voer changeColor uit
    changeListStyle(settingsFormData.get("listStyleType")); //Haal de gekozen lijstStijl uit de data en voer changeListStyle uit
}


document.getElementById("settingsForm").addEventListener("submit", applySettings); //Voeg applySettings toe als listener op het submit event van de settingsForm



//Oefening 75

function showPriceTable(e) {
    let priceTableBody = document.getElementById("priceTableBody");
    for (let dest of destinationArr){
        let row = document.createElement("tr");
        let nameCell = row.insertCell();
        nameCell.textContent = dest.name;
        let priceCell = row.insertCell();
        priceCell.textContent = dest.price;
        priceTableBody.appendChild(row);
    }
}

window.addEventListener("load", showPriceTable);


/*
 * Labo 10 uitbreiding invullen opties ticketForm
 * Deze functie voert de bestemmingen toe als opties van destinationSelect
 * Deze functie werkt identiek aan showDestinations() met als enig verschil:
 * Deze functie toont de bestemmingen als opties in een select ipv bestemmingen in een lijst.
*/

function addDestinationOptions(e) {
    let destinationSelect = document.getElementById("destinationSelect");
    for (let dest of destinationArr){
        let newOptionEl = document.createElement("option");
        newOptionEl.value = dest.name;
        newOptionEl.textContent = dest.name;
        destinationSelect.appendChild(newOptionEl);
    }
}

window.addEventListener("load", addDestinationOptions);


