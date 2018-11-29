// Variables

// Main activity
$(document).ready(function () {
    setCarouselSize();
    setContainer();
    $(window).resize(function () {
        setCarouselSize();
        setContainer();
    })
});

// Functions

function setCarouselSize() {
    $("#carousel").css("width", $(window).width());
    $(".carousel-item").css("width", $(window).width());
    $(".carousel-image").css("width", $(window).width());
}

function setContainer() {
    $(".principal").css("max-width", $(window).width());
}