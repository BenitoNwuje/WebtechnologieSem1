function getPriceFromName(name){
    for (let dest of destinationArr){
        if (dest.name == name){
            return dest.price;
        }
    }
    return NaN;
}

function showPrice(e){
    let price = getPriceFromName(e.target.value);
    document.getElementById("priceSpan").textContent = price + " Euro";
}

document.getElementById("destinationSelect").addEventListener("change", showPrice);

function showTickets(e){
    e.preventDefault();
    let ticketList = document.getElementById("ticketList");
    let ticketFormData = new FormData(e.target);
    let newTicketItem = document.createElement("li");
    newTicketItem.textContent = "Bestemming: " + ticketFormData.get("destination") + " Datum: " + ticketFormData.get("date");
    ticketList.appendChild(newTicketItem);
}

document.getElementById("ticketForm").addEventListener("submit", showTickets);