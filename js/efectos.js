$(document).ready(function(){
    // efectos menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        },2000 + (index * 500));
    });


// efectos header
    if ($(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        },1500);
    }

    
    // scroll elementos menu
        var acercaDe = $('#acerca-de').offset().top,
            menu = $('#platillos').offset().top,
            galeria = $('#galeria').offset().top,
            ubicacion = $('#ubicacion').offset().top;
    
    // acerca de boton
        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 380
            }, 500);
        });
    // boton menu
        $('#btn-menu').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: menu - 40
            });
        });
    //boton galeria
        $('#btn-galeria').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: galeria - 40
            });
        });
    //boton ubicacion
        $('#btn-ubicacion').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ubicacion - 40
            });
        });
    

    });