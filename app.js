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