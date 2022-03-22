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


  

  

const videoContainerCollection = document.getElementsByClassName('video_block'),
videoContainerArray = [...videoContainerCollection];
videoContainerArray.forEach(function(e) {
  const video = e.querySelector('video'),
  button = e.querySelector('button');
  video.muted = true;
  button.addEventListener('click', function() {
    button.classList.toggle('muted');
    if (video.muted === true) {
      video.muted = false;
    }
    else if (video.muted === false) {
      video.muted = true;
    }
  });
});





  