var hello = function() {
   $("#hello").offset({
            top: .447 * $("#bgvideo").height(),
            left: .6667 * $("#bgvideo").width()
    });
};

$(window).resize(hello);
$(document).ready(hello);