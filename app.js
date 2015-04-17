//Responsive behavior of video and image background HTML overlay
var hello = function() {
    //Checks to see if the video is displayed
    if ($("#video").css("display") == "none") {
        //If video is not displayed, set the top and left of the HTML on the image.
        $(".hello-small").offset({
            top: .447 * $("#bgimage").height(),
            left: .6667 * $("#bgimage").width()
        });
    } else {
        //Otherwise, set the top and left of the HTML on the video
        $("#hello").offset({
            top: .447 * $("#bgvideo").height(),
            left: .6667 * $("#bgvideo").width()
    });
    }
};

$(window).resize(hello);
$(document).ready(hello);

//Conceals email address in HTML for contact form
$(document).ready(function() {
    var base64_email = 'emNicmlkZ2VzQGdtYWlsLmNvbQ==';
    var base_url = 'http://formspree.io/';
    var action = base_url + atob(base64_email);
    $('#contact-form').attr('action', action);
});

//Animation for #tech-skills bars
$(".htmlCSS").animate({width:"95%"}, 2100);
$(".jsjqaj").animate({width:"70%"}, 2100);
$(".bootstrap").animate({width:"65%"}, 2100);
$(".rwd").animate({width:"50%"}, 2100);
$(".phpMSQL").animate({width:"20%"}, 2100);
$(".angular").animate({width:"14%"}, 2100);

//Collapses navbar in mobile after links are clicked
//Since links are anchor links and don't trigger new page load
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});