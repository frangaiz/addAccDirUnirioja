(function($) {
    // Hide or display the "back to top" button based on scroll position
    $( window ).scroll( function(){
        if ($(this).scrollTop() > 1000) {
            $('#button-to-top').fadeIn();
        } else {
            $('#button-to-top').fadeOut();
        }
    });

    // Smoothly scroll back to top when button is clicked
    $(document).ready(function(){
        $('#button-to-top').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
            return false;
        });
    });

})(jQuery);


jQuery(document).ready(function ($) {
    /* SCROOL UP */

    /* Filtros lista de servicios*/

    if (jQuery("body").hasClass("page-id-268038")) {
        $('#c-hijo__primario').css('display', 'none');
        $('#c-hijo__secundario').css('display', 'none');

        $('#c-raiz__primario a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('dentro primario');
            $('#c-hijo__primario').addClass('c-servicios__visible');
            $('#c-raiz__primario a').addClass('c-active');
            $('#c-raiz__secundario a').removeClass('c-active');
            $('#c-hijo__secundario').removeClass('c-servicios__visible');
            $('.c-servicios-item').css('display', 'none');
            $('.c-item__primario').css('display', 'flex');
        });

        $('#c-raiz__secundario a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('dentro secundario');
            $('#c-hijo__secundario').addClass('c-servicios__visible');
            $('#c-raiz__secundario a').addClass('c-active');
            $('#c-raiz__primario a').removeClass('c-active');
            $('#c-hijo__primario').removeClass('c-servicios__visible');
            $('.c-servicios-item').css('display', 'none');
            $('.c-item__secundario').css('display', 'flex');
        });

        $('#c-pas a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-pas').css('display', 'flex');
            $('#c-raiz__primario a').addClass('c-active');
            $('#c-pas a').addClass('c-active');
            $('#c-pdi a').removeClass('c-active');
            $('#c-alumnado a').removeClass('c-active');
            $('#c-colectivos a').removeClass('c-active');
        });

        $('#c-pdi a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-pdi').css('display', 'flex');
            $('#c-raiz__primario a').addClass('c-active');
            $('#c-pdi a').addClass('c-active');
            $('#c-pas a').removeClass('c-active');
            $('#c-alumnado a').removeClass('c-active');
            $('#c-colectivos a').removeClass('c-active');
        });
        $('#c-alumnado a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-alumnado').css('display', 'flex');
            $('#c-raiz__primario a').addClass('c-active');
            $('#c-pdi a').removeClass('c-active');
            $('#c-pas a').removeClass('c-active');
            $('#c-alumnado a').addClass('c-active');
            $('#c-colectivos a').removeClass('c-active');
        });

        $('#c-colectivos a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-colectivos').css('display', 'flex');
            $('#c-raiz__primario a').addClass('c-active');
            $('#c-pdi a').removeClass('c-active');
            $('#c-pas a').removeClass('c-active');
            $('#c-alumnado a').removeClass('c-active');
            $('#c-colectivos a').addClass('c-active');
        });

        $('#c-gestion a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-gestion').css('display', 'flex');
            $('#c-raiz__secundario a').addClass('c-active');
            $('#c-gestion a').addClass('c-active');
            $('#c-docencia a').removeClass('c-active');
            $('#c-software a').removeClass('c-active');
            $('#c-infrastructuras a').removeClass('c-active');
            $('#c-servicios a').removeClass('c-active');
        });

        $('#c-docencia a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-docencia').css('display', 'flex');
            $('#c-raiz__secundario a').addClass('c-active');
            $('#c-gestion a').removeClass('c-active');
            $('#c-docencia a').addClass('c-active');
            $('#c-software a').removeClass('c-active');
            $('#c-infrastructuras a').removeClass('c-active');
            $('#c-servicios a').removeClass('c-active');
        });

        $('#c-software a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-software').css('display', 'flex');
            $('#c-raiz__secundario a').addClass('c-active');
            $('#c-gestion a').removeClass('c-active');
            $('#c-docencia a').removeClass('c-active');
            $('#c-software a').addClass('c-active');
            $('#c-infrastructuras a').removeClass('c-active');
            $('#c-servicios a').removeClass('c-active');
        });

        $('#c-infrastructuras a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-infrastructuras').css('display', 'flex');
            $('#c-raiz__secundario a').addClass('c-active');
            $('#c-gestion a').removeClass('c-active');
            $('#c-docencia a').removeClass('c-active');
            $('#c-software a').removeClass('c-active');
            $('#c-infrastructuras a').addClass('c-active');
            $('#c-servicios a').removeClass('c-active');
        });

        $('#c-servicios a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.c-servicios-item').css('display', 'none');
            $('.c-servicios').css('display', 'flex');
            $('#c-raiz__secundario a').addClass('c-active');
            $('#c-gestion a').removeClass('c-active');
            $('#c-docencia a').removeClass('c-active');
            $('#c-software a').removeClass('c-active');
            $('#c-infrastructuras a').removeClass('c-active');
            $('#c-servicios a').addClass('c-active');
        });
    }
    /*NOTICIAS RELACIONADAS, si coincide con la entrada actual, se oculta, si no coincide se oculta la ultima*/
    if (jQuery("body").hasClass("single-post")) {

        if (jQuery("body").find(".single-post .box-noticias-actividades")) {
            var existe = false;
            jQuery(".box-noticias-actividades .entry-title a").each(function () {
                if (jQuery(".c-post__title").text().trim() === jQuery(this).text()) {
                    existe = true;
                    jQuery(this).closest('.jet-posts__item').remove();
                }
            });
            if (!existe) {
                jQuery(".box-noticias-actividades .jet-posts__item:last-child").remove();
            }
        }
    }


    /* ACTIVIDADES RELACIONADAS, si coincide con la ctividad actual, se oculta, si no coincide se oculta la ultima*/
    if (jQuery("body").hasClass("single-event")) {
        console.log('dentro post');
        if (jQuery("body").find(".single-event .c-actividades-interno")) {
            var existe_relacionadas = false;
            jQuery(".c-actividades-interno .elementor-heading-title a").each(function () {
                if (jQuery(".c-post-actividades__title").text().trim() === jQuery(this).text()) {
                    existe_relacionadas = true;
                    jQuery(this).closest('article').remove();
                }
            });
            if (!existe_relacionadas) {
                jQuery(".c-actividades-interno article:last-child").remove();
            }
        }
    }
    /*clickar en un iframe y que lo abra en la página y no dentro del frame*/

    $('#c-iframe__actividades').on('load', function () {
        $('#c-iframe__actividades').contents().find('a').each(
            function (e) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var link = $(this).attr('href');
                    window.location = link;
                });

            }
        );
    });

    $('#c-iframe__calendario').on('load', function () {
        $('#c-iframe__calendario').contents().find('.em-cal-day-date a').each(
            function (e) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var link = $(this).attr('href');
                    window.location = link;
                });

            }
        );
    });

    /*fin clickar en un iframe y que lo abra en la página y no dentro del iframe*/
    setTimeout(function () {
        $('.elementor-tab-title').removeClass('elementor-active');
        $('.elementor-tab-content').css('display', 'none');
    }, 100);

    if (jQuery("body").hasClass("single-event")) {
        if (jQuery(".elementor-element").hasClass("listado-etiquetas")) {
            let d = document.querySelector('.single-event .listado-etiquetas .elementor-post-info__terms-list').innerHTML
            d = d.replaceAll(',', ' / ', d)
            document.querySelector('.single-event .listado-etiquetas .elementor-post-info__terms-list').innerHTML = d
        }
    }

    /*MOD CIMA si cambian el slug de cat portada dejará de funcionar y se quedará visible*/
    $(".elementor-post-info__terms-list-item").each(function () {

        if ($(this).attr("href") == 'https://www.unirioja.es/actividades/categorias/portada/') {
            $(this).remove();
            $(this).attr("style", "display: none !important");
        } else if ($(this).attr("href") == 'https://www.unirioja.es/category/portada/') {
            $(this).remove();
            $(this).attr("style", "display: none !important");
        }

    });

    /*************************BUSCADOR MOD CimaDigital*****************************/
    var lastClicked = null;
    //Cegoer el primer elemento del selector y ponerlo como predeterminado
    if ($(".prosettings").length) {
        lastClicked = $("input[name='customset[]']").parent().first();
        setSearchButton();
    }
    //cuando se modifique el valor del selector entonces guardar la etiqueta correspondiente
    $(document).on("change", "input[name='customset[]']", function () {
        console.log("clicked on asp_label");
        lastClicked = $(this).parent();
        setSearchButton();
        //este codigo sirve para volver a cerrar el selector
        $("#ajaxsearchprosettings1_1").css('visibility', 'hidden');
        $("#ajaxsearchprosettings1_1").css('opacity', '0');
        $("#ajaxsearchprosettings1_1").css('display', 'none');
        var nuevo = 0;
        $(".prosettings").attr('data-opened', nuevo);
        //selector cerrado
    });
    //cuando se rellene el campo de buscar quitar acentos y caracteres no validos
    $(document).on("change", ".proinput form input[type='search']", function () {
        console.log("encoding value");
        var curValue = $(this).val();
        var encoded = replaceChars(curValue);
        $(this).val(encoded);
    });

    //.post-type-archive .c-actividades-interno-home .ecs-link-wrapper .c-cat__actividades .elementor-post-info__terms-list
    //*******************COMMON FUNCTIONS********************//
    //Cambiar el titulo del selctor
    function setSearchButton() {
        var selected = $(lastClicked).text();
        var myspan = $(".prosettings").find("span");
        if ($(myspan).length) {
            console.log("myspan exist", selected);
            $(myspan).html(selected);
            //este codigo sirve para volver a cerrar el selector
            $('#ajaxsearchprosettings1_2').css('display', 'none');
            $('#ajaxsearchprosettings1_2').css('visibility', 'hidden');
            $('#ajaxsearchprosettings1_2').css('opacity', '0');
            console.log("IKER",);
        } else {
            $(".prosettings").prepend("<span>" + selected + "</span>");
        }
    }

    function replaceChars(curValue) {
        curValue = curValue.replaceAll("á", "a");
        curValue = curValue.replaceAll("é", "e");
        curValue = curValue.replaceAll("í", "i");
        curValue = curValue.replaceAll("ó", "o");
        curValue = curValue.replaceAll("ú", "u");

        curValue = curValue.replaceAll("Á", "A");
        curValue = curValue.replaceAll("É", "E");
        curValue = curValue.replaceAll("Í", "I");
        curValue = curValue.replaceAll("Ó", "O");
        curValue = curValue.replaceAll("Ú", "U");

        return curValue;
    }
});
