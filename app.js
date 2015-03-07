var hello = function() {
    var videoHeight = $("#bgvideo").height();
    var videoWidgth = $("#bgvideo").width();
    
    if (videoWidgth < 768) {
        ("#hello").addClass("hidden");
    } else {
        if ($("#hello").hasClass("hidden")) {
            $("#hello").removeClass("hidden");
        }
        $("#hello").offset({
            top: .447 * videoHeight,
            left: .6667 * videoWidgth
        });
    }
}

$(window).resize(hello);
$(document).ready(hello);