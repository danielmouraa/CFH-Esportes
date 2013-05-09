$(function()
{
	js.init();
});

var js =
{
	init: function()
	{

	},

	/**
	* Modal em AJAX
	*
	* @return	false
	* @author	Daniel Moura
	*/
	engatilhaModal: function(){
		$(".abrir-modal").click(function(){
			js.abrirModal($(this).data("modal")); // ID da modal
		});
	},

	abrirModal: function(modal){
		var $modalID = $("#"+modal+"");

		$modalID.length
			? $("#fundo").add($modalID).fadeIn()
			: $.ajax({
				url:"modais/modal_"+modal+".php",
				beforeSend: function(){
					$('<div id="fundo"></div>').appendTo($("body")).fadeIn();
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log("ERROR: ", jqXHR, textStatus, errorThrown);
					$("#fundo").fadeOut();
				},
				success: function(response){
					var $resp = $(response);
					var alturaFundo = $(window).height();
					var larguraFundo = $(window).width();

					$resp.appendTo($("body"));

					var alturaModal = $resp.outerHeight();
					var larguraModal = $resp.outerWidth();

					$resp.css({
						marginTop: "-"+ alturaModal / 2 +"px",
						marginLeft: "-"+ larguraModal / 2 +"px"
					}).fadeIn();

					// Verifica se a modal é menor do que a tela, se for a modal deixa de ser fixa
					if ( alturaFundo <= alturaModal || larguraFundo <= larguraModal ) {

						js.reajustarModal($resp);

						// Ajusta a posicao da modal quando a tela é redimensionada
						$(window).resize(function()
						{
							js.reajustarModal($resp);
						});

					}

					// Fecha a modal
					$(".fechar-modal", $resp).add("#fundo").click(function(){
						$("#fundo").fadeOut();
						$resp.fadeOut();
					});

					$('html').keyup(function(e){
						if (e.keyCode == 27) {
							$("#fundo").fadeOut();
							$resp.fadeOut();
						}
					});
				}
			});
	},

	reajustarModal: function(alvo) {
		alturaFundo = $(window).height();
		larguraFundo = $(window).width();

		// Calcula altura
		var distanciaTopo = alturaFundo / 2 - alvo.outerHeight() / 2;
		if ( distanciaTopo <= 0 ) { distanciaTopo = "0" };

		// Calcula largura
		var distanciaEsquerda = larguraFundo / 2 - alvo.outerWidth() / 2;
		if ( distanciaEsquerda <= 0 ) { distanciaEsquerda = "0" };

		$(".modal:visible").css({
			position: "absolute",
			top: distanciaTopo,
			left: distanciaEsquerda,
			margin: 0
		});
	}


}