
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


});



function setCarouselSize() {
    $("#carousel").css("width", $(window).width());
    $(".carousel-item").css("width", $(window).width());
    $(".carousel-image").css("width", $(window).width());
}

function boton() {
    swal("Tu mensaje ha sido enviado, Muchas gracias por tu colaboración");
}


