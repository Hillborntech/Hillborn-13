/*1663734650000*/
AUI().ready(function(){});Liferay.Portlet.ready(function(_portletId,_node){});
Liferay.on("allPortletsReady",function(){if(!window.timerFlag);removeModal();hreflang();acordeon();galeriaMultimedia();noTitles();glosario();newsletterCheck();owl_actualidad();sennaPanel();buscador_filters();buscador_menu();canal_empleo();shapes();if($("body.has-control-menu.signed-in.live-view .control-menu-nav .staging-bar").length>0)setTimeout(()=>{$("body.has-control-menu.signed-in.live-view .control-menu-nav .staging-bar").addClass("fade")},4E3)});
function shapes(){if($("#decContentShapes").length>0){$("#senna_surface1-default").append('\x3cdiv class\x3d"container-fluid container-fluid-shapes" id\x3d"wrapper"\x3e\x3cdiv id\x3d"fondoCapaModal"\x3e\x3c/div\x3e\x3c/div\x3e');$("body").addClass("shapes-page");$("#suscribeteSection a").attr("onclick","")}}function canal_empleo(){$("document").ready(function(){if($("#canalEmpleoForm").length>0)$("body").addClass("canal-empleo")})}
function buscador_filters(){$(".contenedor-menu .buscador-input-campo .input-group-btn").on("click",function(){$(".buscador_mini_wrapper .buscador-input").removeClass("show");$("div#buscador-input-green").removeClass("show");$("#navbar-inferior").removeClass("buscando")});$(".buscador-lupa-btn").on("click",function(){$(".buscador_mini_wrapper .buscador-input").addClass("show")});if($(".filterItems .field.filtroBuscador").length>0){$(".filterItems .field.filtroBuscador").each(function(){if($(this).is(":checked"))$(this).parent().addClass("checked-input");
else $(this).parent().removeClass("checked-input")});$(".filterItems .field.filtroBuscador").click(function(){if($(this).is(":checked"))$(this).parent().addClass("checked-input");else $(this).parent().removeClass("checked-input")})}$(".input-group.buscador-input-campo input.ui-autocomplete-input").on("keypress",function(){$(".ui-autocomplete").css("max-width",$(".buscador-input input.ui-autocomplete-input").innerWidth()+2+"px");$("#ui-id-1").addClass("buscador-superior");if($("#decCotizacionBolsa").length>
0)$("#ui-id-1").addClass("tiene-cotizacion")});if($("input#_com_iberdrola_wcorp_buscador_BuscadorPortlet_txtBuscador").length>0)$("input#_com_iberdrola_wcorp_buscador_BuscadorPortlet_txtBuscador").keypress(function(){$(".ui-autocomplete").css("max-width",$("input#_com_iberdrola_wcorp_buscador_BuscadorPortlet_txtBuscador").innerWidth()+2+"px")});$("body").on("click","button.mostarFiltros",function(){if(!$("button.mostarFiltros").hasClass("executing")){$("body").toggleClass("mostrar-filtros");setTimeout(function(){$("button.mostarFiltros").removeClass("executing")},
1E3);$("button.mostarFiltros").addClass("executing")}});$("body").on("click",".buscador_wrapper .cabeceraBuscador h2.Thin",function(){$("body").removeClass("mostrar-filtros")});if($("form#_com_iberdrola_wcorp_buscador_BuscadorPortlet_formBusqueda\x3e.row+.row\x3e.col-md-4 .form-group.input-select-wrapper").length<1&&$("form#_com_iberdrola_wcorp_buscador_BuscadorPortlet_formBusqueda\x3e.row+.row\x3e.col-md-8\x3e.row\x3e.col-md-4 .form-group.input-select-wrapper").length>0)$("form#_com_iberdrola_wcorp_buscador_BuscadorPortlet_formBusqueda\x3e.row+.row\x3e.col-md-8\x3e.row\x3e.col-md-4 .form-group.input-select-wrapper").clone().prependTo(" form#_com_iberdrola_wcorp_buscador_BuscadorPortlet_formBusqueda\x3e.row+.row\x3e.col-md-4")}
function buscador_menu(){$(".buscadorIcon").on("click",function(){$("#menuPrincipal").hide();$(".nuevoBuscador").removeClass("d-none");$("#foco").focus();$(".menu").hide()});$(".aspa-cerrar-btn").on("click",function(){$(".nuevoBuscador").addClass("d-none");$("#menuPrincipal").show();$(".menu").show()})}
function sennaPanel(){if($(".product-menu.sidebar.sidenav-menu").length>0)$(".product-menu.sidebar.sidenav-menu a").attr("data-senna-off","true");if($("#detalleInteriorNP").length>0)$("body").addClass("detalleNoticia")}
function owl_actualidad(){if($("#carrusel-imagenes-actualidad .carousel-inner").length>0){var owl=$("#carrusel-imagenes-actualidad .carousel-inner");owl.owlCarousel({items:1,autoWidth:false,nav:true,loop:false,rewind:true,autoHeight:true})}if($(".videos-noticia .carousel-inner").length>0){var owl2=$(".videos-noticia .carousel-inner");owl2.owlCarousel({items:1,autoWidth:false,nav:true,loop:false,rewind:true,autoHeight:true})}}
function newsletterCheck(){$(".form-group.form-inline.input-checkbox-wrapper+label.checkform2.labelCheck \x3e span").click(function(){if($(this).parent().prev().find(".field.viewCheck").is(":checked"))$(this).attr("aria-checked","true");else $(this).attr("aria-checked","false")})}
function glosario(){if($("div#terminos").length>0){var cont=0;var statusFirst="";var statusSecond="";var firstElement;var secondelement;$("div#terminos").addClass("show-letters");$(".letras li").each(function(){cont++;if(cont==2){secondElement=$(this);cont=0;long($(this),$(this),"");long($(this),$(this).prev(),"second-");$(this).addClass("segundo");$("\x3cdiv class\x3d'separation'\x3e\x3c/div\x3e").insertAfter($(this))}else{firstElement=$(this);$(this).addClass("primero");long($(this),$(this).next(),
"first-");long($(this),$(this),"")}})}}function long(element,destino,type){if(element.find("p").length>0)if(element.find("p").html().length>350)destino.addClass(type+"long-text");else if(element.find("p").html().length<200)destino.addClass(type+"small-text");else destino.addClass(type+"medium-text")}function removeModal(){$(".modal-backdrop").remove();$(".modal-backdrop").hide();$(".scroll-nivel-uno a").click(function(){$(".modal-backdrop").remove();$(".modal-backdrop").hide()})}
function hreflang(){$("a").on("click",function(){$(this).attr("data-senna-off","true")})}function owl(){if($(".owl-carousel").length>0)$("head").append('\x3cscript type\x3d"text/javascript" src\x3d"/o/iberdrola-corporativo-theme/js/HuellaDigital/owl.carousel.js" async\x3e\x3c/script\x3e')}
function galeriaMultimedia(){if($(".listado-galeria").length>0)$("head").append('\x3cscript type\x3d"text/javascript" src\x3d"/o/iberdrola-corporativo-theme/js/interiores/galeriaImgDoc.js" async\x3e\x3c/script\x3e');$(".start-video-externo.item-video-play-externo").click(function(){var element=$(this);if(element.hasClass("btn-vimeo")){if(element.parent().find("iframe").length==0){var source=element.parent().find(".source-video").val();var id=element.parent().find(".id-video").val();element.parent().append('\x3ciframe id\x3d"'+
id+'" allow\x3d"autoplay" class\x3d"vimeo" src\x3d"'+source+'?autoplay\x3d1" frameborder\x3d"0" allowfullscreen\x3d"allowfullscreen"\x3e\x3c/iframe\x3e');element.parent().addClass("vimeo-playing")}}else{var video=element.parent().find("video").get(0);element.parent().addClass("playing");element.parent().removeClass("pause");video.play()}});$(".start-video-externo.item-audio-play-externo").click(function(){var element=$(this);if(!element.hasClass("btn-vimeo"))if(element.hasClass("mode2")){var video=
element.parent().find("video").get(0);element.removeClass("mode2");video.pause()}else{var video=element.parent().find("video").get(0);element.addClass("mode2");element.parent().addClass("playing");element.parent().removeClass("pause");video.play()}});$(".video-externo video").bind("pause ended",function(){var element=$(this);element.parent().addClass("pause")});$(".video-externo video").bind("play",function(){var element=$(this);var id=element.attr("id");var video=document.getElementById(id);video.play();
element.parent().removeClass("pause")});var owl=$(".owl-carousel");owl.on("changed.owl.carousel",function(event){$(".owl-item.active .video-externo video").each(function(index,item){if($(item)!==undefined&&!$(item).paused)$(item)[0].pause()})})}
function acordeon(){var acor=false;if($(".bloque-acordeones").length>0){var loc=new String(window.location);if(loc.indexOf("#acor_")!==-1){var acor=loc.substring(loc.indexOf("#")+1,loc.length);setTimeout(function(){$("#"+loc.substring(loc.indexOf("#")+1,loc.length)).click();var location=$("#"+loc.substring(loc.indexOf("#")+1,loc.length));$("html, body").animate({scrollTop:location.offset().top-150},1E3)},5)}$(".bloque-acordeones li\x3eh3").on("click",function(){$(this).addClass("acordeon-trick");
setTimeout(function(element){$("html, body").animate({scrollTop:$(".acordeon-trick").offset().top-150},1E3);$(".acordeon-trick").removeClass()},2E3)})}}function goTop(){$(".scrollTop").click(function(){$("html, body").animate({scrollTop:0},"slow",function(){})})}function noTitles(){if($("#decContenedorPantallaCompleta title").length>0)$("title").remove()};