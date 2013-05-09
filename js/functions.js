/**
* Arquivo responsavel pela chamada de todas as funcionalidades do site CFH
*
* @author: Mateus Moura mateus[at]tark[dot]com[dot]br
* @date: 01/05/2013
* @profile: http://migre.me/3WFRy
* 
* Copyright(c) Todos os direitos reservados a TARK
*/

if (window.console == null) window.console = { log: function (p) { }, error: function (p) { } };

var oTark = "";

var Actions = function () {
    oTark = this;
	
	oTark.init();
}

Actions.fn = Actions.prototype;
Actions.fn.extend = jQuery.extend;
Actions.fn.extend({
    init: function (){
        this.header = $("header");
        this.main = $("main");
        this.footer = $("footer");
        this.loading = $("#loading");
		
        //$("#highlights", oTark.main).length && oTark.highlights($("#highlights", oTark.main));
        //$("#slider", oTark.main).length && oTark.slider($("#slider", oTark.main));

        //$("select.change").customSelect();
        //oTark.modal();
	},

    highlights: function(section){
        var $ul = $("div.scroll ul", section),
            $index = $("ul.index", section),
            changeImg = function($bt, $ind){
                var $act = $("li.active", $ul),
                    $inAct = $("li.active", $index);

                $act.fadeOut(function(){
                    $(this).add($inAct).removeClass("active");

                    if($bt == undefined || typeof $bt == "object"){
                        $bt == undefined || $bt.hasClass("bt_next")
                            ? $act.next("li").length ? $act.next("li").fadeIn(callShow) : $("li:first", $ul).fadeIn(callShow)
                            : $act.prev("li").length ? $act.prev("li").fadeIn(callShow) : $("li:last", $ul).fadeIn(callShow);

                        $bt == undefined || $bt.hasClass("bt_next")
                            ? $inAct.next("li").length ? $inAct.next("li").addClass("active") : $("li:first", $index).addClass("active")
                            : $inAct.prev("li").length ? $inAct.prev("li").addClass("active") : $("li:last", $index).addClass("active");
                    }else{
                        console.log("else")
                        $( $("li", $index)[$bt] ).addClass("active")
                        $( $("li", $ul)[$bt] ).fadeIn(callShow);
                    }
                });
            }
            callShow = function(){
                $(this).addClass("active");
            },
            idSetInterval = "";

        idSetInterval = setInterval(function(){
            changeImg();
        }, 6000 );
        
        $(".bt_prev, .bt_next", section).unbind().click(function(){
            var $bt = $(this);

            clearInterval( idSetInterval );
            changeImg($bt);
            setTimeout(function(){
                idSetInterval = setInterval(function(){
                    changeImg();
                }, 6000 );
            }, 1000 );

            return false;
        });

        $("a", $index).unbind().click(function(){
            if($(this).parent().hasClass("active")){
                return false;
            }

            clearInterval( idSetInterval );
            changeImg(Number($(this).text()) - 1);
            setTimeout(function(){
                idSetInterval = setInterval(function(){
                    changeImg();
                }, 6000 );
            }, 1000 );

            return false;
        });
    },

    slider: function(section){
        var pxMv = section.parents("aside").length ? 0 : 60,
            tpMv = section.parents("aside").length ? 120 : 58;

        $(".bt_prev, .bt_next", section).unbind().click(function(){
            var $bt = $(this),
                $left = $("li.left", section),
                $right = $("li.right", section),
                $active = $("li.active", section);

            if($bt.hasClass("bt_next")){
                $left.animate({
                    left: -300
                }, 2000, function(){
                    $left.removeClass("left");
                    $left.css("left", "auto").hide();
                });

                $active.css({
                    right: "auto",
                    left: "50%",
                    marginLeft: -147
                }).animate({
                    width: 180,
                    left: pxMv,
                    margin: "0",
                    top: tpMv
                }, 2000, function(){
                    $active.removeClass("active").addClass("left");
                });

                if($.browser.chrome){
                    section.parents("aside")
                        ? $right.css("left", 240)
                        : $right.css("left", 700);
                }

                $right.animate({
                    width: 294,
                    left: "50%",
                    marginLeft: -147,
                    top: 0
                }, 2000, function(){
                    $right.removeClass("right").addClass("active");
                });

                $right.next("li").length ? $right.next("li").show().css({
                    left: "auto",
                    right: -300
                }).animate({
                    right:pxMv,
                    width:180,
                    top:tpMv
                },2000 , function(){
                    $(this).addClass("right");
                }) : $("li:first", section).show().css({
                    left: "auto",
                    right: -300
                }).animate({
                    right:pxMv,
                    width:180,
                    top:tpMv
                },2000 , function(){
                    $(this).addClass("right");
                });
            }else{
                $right.animate({
                    right: -500
                }, 2000, function(){
                    $right.removeClass("right");
                    $right.css("right", "auto").hide();
                });

                $active.css({
                    left: "auto",
                    right: "50%",
                    marginRight: -147
                }).animate({
                    width: 180,
                    right: pxMv,
                    margin: "0",
                    top: tpMv
                }, 2000, function(){
                    $active.removeClass("active").addClass("right");
                });

                $left.animate({
                    width: 294,
                    left: "50%",
                    marginLeft: -147,
                    top: 0
                }, 2000, function(){
                    $left.removeClass("left").addClass("active");
                });

                $left.prev("li").length ? $left.prev("li").show().css({
                    right: "auto",
                    left: -300
                }).animate({
                    left:pxMv,
                    width:180,
                    top:tpMv
                },2000 , function(){
                    $(this).addClass("left");
                }) : $("li:last", section).show().css({
                    right: "auto",
                    left: -300
                }).animate({
                    left:pxMv,
                    width:180,
                    top:tpMv
                },2000 , function(){
                    $(this).addClass("left");
                });
            }

            return false;
        });
    },

    modal: function(){
        $(".bt_openModal", oTark.main).click(function(){
            var $bt = $(this),
                url = $bt.attr("href");

            $.ajax({
                url: url,
                data: "",
                type: "GET",
                cache: true,
                beforeSend: function(){
                    oTark.loading.addClass( "loading" );
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log( "ERROR: ", jqXHR, textStatus, errorThrown );
                    //oThis.loading.fadeOut();
                    oTark.loading.removeClass( "loading" );
                },
                success: function( response ){
                    var $response = $(response);

                    console.log( "SUCCESS:  ", $(response) );

                    oTark.modal = $("#modal", $response);
                    oTark.overlay = $("#overlay", $response);

                    oTark.overlay.appendTo($("body")).show();
                    oTark.modal.appendTo($("body")).fadeIn();

                    $("html, body").css("overflow-y", "hidden");

                    $("select.change", oTark.modal).customSelect();

                    $(".bt_close", oTark.modal).add(oTark.overlay).unbind().click(function(){
                        oTark.modal.fadeOut();
                        oTark.overlay.hide();

                        $("html, body").css("overflow-y", "auto");

                        return false;
                    });

                    oTark.loading.removeClass( "loading" );
                }
            });

            return false;
        }); 

        $(".bt_openGalley", oTark.main).click(function(){
            var $bt = $(this),
                url = "inc/modal_gallery.php";

            $.ajax({
                url: url,
                data: "",
                type: "GET",
                cache: true,
                beforeSend: function(){
                    oTark.loading.addClass( "loading" );
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log( "ERROR: ", jqXHR, textStatus, errorThrown );
                    //oThis.loading.fadeOut();
                    oTark.loading.removeClass( "loading" );
                },
                success: function( response ){
                    var $response = $(response);

                    console.log( "SUCCESS:  ", $(response) );

                    oTark.modal = $("#modal", $response);
                    oTark.overlay = $("#overlay", $response);

                    oTark.overlay.appendTo($("body")).show();
                    oTark.modal.appendTo($("body")).fadeIn();

                    $("html, body").css("overflow-y", "hidden");

                    $(".bt_close", oTark.modal).add(oTark.overlay).unbind().click(function(){
                        oTark.modal.fadeOut();
                        oTark.overlay.hide();

                        $("html, body").css("overflow-y", "auto");

                        return false;
                    });

                    oTark.loading.removeClass( "loading" );
                }
            });

            return false;
        }); 
    }

});

$( function(){
    var tarkactions = new Actions();
});

jQuery.fn.resetDefaultValue = function () {
    function _clearDefaultValue() {
        var _$ = $(this);
        if (_$.val() == this.defaultValue) { _$.val(''); }
    };
    function _resetDefaultValue() {
        var _$ = $(this);
        if (_$.val() == '') { _$.val(this.defaultValue); }
    };
    return this.click(_clearDefaultValue).focus(_clearDefaultValue).blur(_resetDefaultValue);
}