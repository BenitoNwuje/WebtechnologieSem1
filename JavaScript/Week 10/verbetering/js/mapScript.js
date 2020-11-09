/* 
 * In dit script plaats je de code om de kaart in de zijbalk te tekenen.
 */

let stationMap = L.map('stationMap').setView([51.2301, 4.41774], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibGVjdG9yd291dGVyIiwiYSI6ImNrM25qZWs1dTB4NHgza240bW0zOG1qZngifQ.1uF5JjJA8l5SpTW3NVQJJQ'
}).addTo(stationMap);


// define rectangle geographical bounds
let bounds = [[51.23041, 4.41731], [51.22991, 4.41825]];
// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(stationMap);

let stationMarker = L.marker([51.2301, 4.41774]).addTo(stationMap);
stationMarker.bindPopup("<b>Busstation</b><br>Ellermanstraat").openPopup();