const tilesProvider = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`

let myMap = L.map('myMap').setView([4.92, -74.13], 13)

L.tileLayer(tilesProvider, {
	maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([4.92, -74.13]).addTo(myMap)

let iconMarker = L.icon({
    iconUrl: 'marker.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})

let marker2 = L.marker([51.51, -0.09], { icon: iconMarker }).addTo(myMap)

myMap.doubleClickZoom.disable()
myMap.on('dblclick', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);

  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap)
})

navigator.geolocation.getCurrentPosition(
  (pos) => {
    const { coords } = pos
    const { latitude, longitude } = coords
    L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap)

    setTimeout(() => {
      myMap.panTo(new L.LatLng(latitude, longitude))
    }, 5000)
  },
  (error) => {
    console.log(error)
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
