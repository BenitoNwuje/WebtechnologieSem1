/* 
 * In dit script plaats je de code om de kaart in de zijbalk te tekenen.
 */
 
let map = L.map('stationMap').setView([51.505, -0.09], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom:18,
}).addTo(map);

L.marker([51.2301, 4.41774]).addTo(map)
    .bindPopup('<b>Busstation</b><br>Ellermanstraat').openPopup();

let bounds = [[51.23041, 4.41731], [51.22991, 4.41825]]
L.rectangle(bounds,{color:"#ff7800", weight:1}).addTo(map);
map.fitBounds(bounds);