/* OEFENING 4: Zet met behulp van de bibliotheek Leaflet de marker ‘geenParking.png‘ op de map met de volgende coördinaten
 * [51.2153, 4.4185] en met een grootte van 100 op 100px.
 */

let myMap = L.map("adresMap", {
    center: [51.2153, 4.4185],
    zoom: 14
});
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(myMap);

let parkIcon = L.icon({
    iconUrl: './images/geenParking.png'
})
L.marker([51.2153, 4.4185], {icon: parkIcon}).addTo(myMap);
