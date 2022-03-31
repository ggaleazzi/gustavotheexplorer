const tilesProvider = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`

let myMap = L.map('myMap').setView([4.929324264187976, -74.13521732188201], 11)

L.tileLayer(tilesProvider, {
	maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([4.929324264187976, -74.13521732188201]).addTo(myMap)



