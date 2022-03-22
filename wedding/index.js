// Initialize and add the map
function initMap() {
    // The location of Uluru
    const Finca = { lat: 4.929324264187976, lng: -74.13521732188201 };
    // The map, centered at Finca
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: Finca,
    });
    // The marker, positioned at Finca
    const marker = new google.maps.Marker({
      position: Finca,
      map: map,
    });
  }


    $("video").prop('muted', true);

    $(".mute-video").click(function () {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        $(this).addClass('unmute-video'); // changing icon for button

    } else {
        $("video").prop('muted', true);
        $(this).removeClass('unmute-video'); // changing icon for button
    }
        console.log($("video").prop('muted'))
    });

