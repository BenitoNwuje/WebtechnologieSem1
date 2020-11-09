//add destination + price to "prijzen"
function addDestinationtable(e){
    e.preventDefault;
    let infotable = document.getElementById('priceTableBody')
    while (destinationList.firstChild){
        destinationList.removeChild(destinationList.firstChild);
    }
    for(let entry of destinationArr){
         let newRow = infotable.insertRow(-1);
         let newCell = newRow.insertCell(0);
         newCell.textContent = entry.name;// +" "+ entry.price;

         infotable.appendChild(newRow);
         console.log('loaded destination')}}
    
window.addEventListener('load', addDestinationtable);
