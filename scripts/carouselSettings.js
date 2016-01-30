// JavaScript Document this script controls the settings on the carousel-- word

$(document).ready(function() {
    // Using default configuration
    $('#carousel').carouFredSel();

    // Using custom configuration
    $('#carousel').carouFredSel({
        items               : 1,
        direction           : "up",
        scroll : {
            items           : 1,
            easing          : "linear",
			fx				:"crossfade",
            duration        : 1000,                         
            pauseOnHover    : true
        }                   
    });
});
