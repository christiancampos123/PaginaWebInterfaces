// Variables

// Main activity
$(document).ready(function () {
    setCarouselSize();
    setContainer();
    $(window).resize(function () {
        setCarouselSize();
        setContainer();
    })

    function setContainer() {
        $(".principal").css("max-width", $(window).width());
    }

    $(".accordion-titulo").click(function () {

        var contenido = $(this).next(".accordion-content");

        if (contenido.css("display") == "none") { //open		
            contenido.slideDown(250);
            $(this).addClass("open");
        }
        else { //close		
            contenido.slideUp(250);
            $(this).removeClass("open");
        }

    });


});

// Functions

function setCarouselSize() {
    $("#carousel").css("width", $(window).width());
    $(".carousel-item").css("width", $(window).width());
    $(".carousel-image").css("width", $(window).width());
}
