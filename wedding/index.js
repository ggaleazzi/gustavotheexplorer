function initMap() {
  const Finca = { lat: 4.929324264187976, lng: -74.13521732188201 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: Finca,
  });
  const marker = new google.maps.Marker({
    position: Finca,
    map: map,
  });
}

const Heading = document.querySelector('.header');
Heading.innerHTML = sparanWrap(Heading.textContent);

function sparanWrap(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}
