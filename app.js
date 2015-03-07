var hello = function() {
    var videoHeight = $("#bgvideo").height();
    var videoWidgth = $("#bgvideo").width();
    
   $("#hello").offset({
            top: .447 * videoHeight,
            left: .6667 * videoWidgth
    });
};

$(window).resize(hello);
$(document).ready(hello);