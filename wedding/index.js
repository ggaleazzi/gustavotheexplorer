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


  

    function toggleMute() 

    {

        var video = document.getElementById("myvideo");

        if (video.muted) 

        {

            video.muted = false;

        } 

        else 

        {

            debugger;

            video.muted = true;

            video.play()

        }

    }

    $(document).ready(function () 

    {

        setTimeout(toggleMute, 10);

    }

    )



  