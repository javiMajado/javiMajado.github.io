$(document).ready(function(){
    // Menu hamburguesa
    $(".burguer").click(function(){
        $(".menu-plegable").animate({width : "toggle"}, 500);
        $("#hamburguesa").toggleClass("fas fa-bars");
        $("#hamburguesa").toggleClass("fas fa-times");
    });

    // Cambio estilo header
    $(window).on("scroll", function(){
        var posicion = $("#primera").offset();

        if($(window).scrollTop() > posicion.top) {
            $("header").addClass("contraste");
        } else {
            $("header").removeClass("contraste");
        }
    });

    // Scroll suave
    $(".hero a").on("click", function(){
        // HASH = Contenido href de <a>
        if(this.hash !== ""){
            var hash = this.hash;         
            $("html, body").animate({
                scrollTop: ($(hash).offset().top) + 5
            }, 800);
            $("header").addClass("contraste");
        }
    });

    // Ventana modal
    $("button.open").click(function(){
        $(".modal, .overlay").addClass("visible");
    });

    $("button.close, .overlay").click(function(){
        $(".modal, .overlay").removeClass("visible");
    });

    // Animacion links
    $(window).on("scroll", function(){
        var posicion = $("#animate").offset();

        console.log(posicion.top + " " + $(window).scrollTop());
        if($(window).scrollTop() > (posicion.top - 300)) {
            $(".links").addClass("visible");
            // $(".links").animate({width: "100%", opacity:"1"}, 3000);
            
            $(".links").css("left","0");
            
        } else {
            $(".links").removeClass("visible");
            $(".links").css("left","-100%");
            // $(".links").animate({width: "0%"}, 3500);
        }
    });
});