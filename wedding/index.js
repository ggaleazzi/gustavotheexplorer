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

$(document).delegate("div", "click", function() {
    window.location = $(this).find("a").attr("href");
});

const heading = document.querySelector('.heading');
heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}
