//Responsive behavior of video background HTML overlay
var hello = function() {
   $("#hello").offset({
            top: .447 * $("#bgvideo").height(),
            left: .6667 * $("#bgvideo").width()
    });
};

$(window).resize(hello);
$(document).ready(hello);

//Conceals email address in HTML for contact form
/*$(document).ready(function() {
    var base64_email = 'emNicmlkZ2VzQGdtYWlsLmNvbQ==';
    var base_url = '//forms.brace.io/';
    var action = base_url + atob(base64_email);
    $('#contact-form').attr('action', action);
}); */

$(".htmlCSS").animate({width:"95%"}, 2100);
$(".jsjqaj").animate({width:"70%"}, 2100);
$(".bootstrap").animate({width:"65%"}, 2100);
$(".rwd").animate({width:"50%"}, 2100);
$(".phpMSQL").animate({width:"20%"}, 2100);
$(".angular").animate({width:"14%"}, 2100);