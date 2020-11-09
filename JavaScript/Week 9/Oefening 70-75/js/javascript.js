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


function showText(id, text){
    let element = document.getElementById(id);
    element.textContent = text;
}
//oefening 70
//deze functie gaat bekijken of addEventListner werkt en dat de pagina niet opnieuw gaat laden als we op login gaat
function addPersonalMessage(e){
    e.preventDefault();
    console.log("Gelukt");
    let myForm = document.getElementById("loginForm");//haalt form uit de html
    let formData = new FormData(myForm); //haalt de data uit de form
    let name = formData.get("userName"); //haal de waarde met de naam name uit de formdata
    let loginMessage = "Dag " + name + " welkom op onze website";
    showText("welcomeMessage", loginMessage);
}
//deze lijn van code zegt dat wij een element gaan hallen met het id genaamd "loginform" en gaat luisteren als er op de 
//submit knopt werdt gedrukt als dat gedaan werd dan wordt de functie addPersonalMessage geaciveerd
document.getElementById("loginForm").addEventListener("submit", addPersonalMessage);

//oefening 71

function showOpening(){
    for(let hours of openingHourArr){
        let ulElement = document.getElementById("openingHoursList");
        let list = document.createElement("li");
        list.textContent = hours;
        ulElement.appendChild(list);
    }
}
window.addEventListener("load", showOpening);


//oefening 72
function showDestination(){
    for (let destination of destinationArr) {
        let list = document.createElement('li');
        list.textContent = destination.name;
        document.getElementById("destinationList").appendChild(list);    
    }
    document.getElementById("destinations").removeEventListener("click",showDestination);
}
document.getElementById("destinations").addEventListener("click",showDestination);


//oefening 73
function showBus(){
    for (let bus of busTypes) {
        let article = document.createElement("article");
        let head3 = document.createElement("h3");
        article.appendChild(head3);
        head3.textContent = bus.type;
        let paragraaf = document.createElement("p");
        paragraaf.textContent = bus.description;
        article.appendChild(paragraaf);
        document.getElementById("busses").appendChild(article);
    }
}

window.addEventListener("load", showBus);

//oefening 74
function changeColor(color){
    let element = document.getElementsByTagName("body")[0];
    element.style.backgroundColor = color;
}
function changeListStyle(style){
    let element = document.getElementsByTagName("ul");
    for (let list of element) {
        if(list.id != "nav"){
            list.style.listStyleType = style;
        }
    }
}

function applySettings(e){
    e.preventDefault();
    let settingsFormData = new FormData(e.target);
    changeColor(settingsFormData.get("backgroundColor"));
    changeListStyle(settingsFormData.get("listStyleType"));
}

window.addEventListener("submit",applySettings);

  
//oefening 75
function showPrice(){
    let element = document.getElementById("priceTableBody");
    for(let price of destinationArr){
        let row = document.createElement("tr");
        let nameCell = row.insertCell();
        nameCell.textContent = price.name;
        let priceCell = row.insertCell();
        priceCell.textContent = price.price;
        element.appendChild(row); 
    }
}
window.addEventListener("load", showPrice);
