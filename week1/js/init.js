const map = L.map('map').setView([34.21271, -99.63243], 4);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


        
fetch("map.geojson")
	.then(response => {
		return response.json();
		})
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
            // the leaflet method for adding a geojson
            L.geoJSON(data).bindPopup(function (layer) {
                return layer.feature.properties.places;
            }).addTo(map);
        });

