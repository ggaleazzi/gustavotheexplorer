

  $(document).ready(function () {
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
});

