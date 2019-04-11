var initialCoordinates = [-24.240781, -51.674019]; // HERE
var initialZoomLevel = 14;

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Mark
var brconnect = L.marker([-24.244110, -51.676321]).addTo(map);
brconnect.bindPopup("<b>BRConnect</b>.").openPopup();
var home = L.marker([-24.2429876, -51.6696204]).addTo(map);
home.bindPopup("<b>ME</b>.").openPopup();

//routes
var latlngs = [
    [-24.244110, -51.676321],
    [-24.2429876, -51.6696204]
   
];
//var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
// zoom the map to the polyline
//map.fitBounds(polyline.getBounds());