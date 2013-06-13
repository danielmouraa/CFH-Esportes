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
	* Mostra o submenu com o efeito slide
	*
	* @ return void
	* @ Daniel Moura
	*/
	dropdownMenu: function(){
		$('#menu .submenu').hover( function(){
			$(this).find("ul").stop(true, true).fadeIn(300);
		}, function(){
			$(this).find("ul").stop(true, true).fadeOut(300);
		});
	},


	/**
	 * Ativa navegação das abas de topicos
	 *
	 * @return	false
	 * @author	Daniel Moura
	*/
	navAbas: function()	{
		var abas = '#abas-topicos li a',
			conteudos = '#abas-topicos .topicos';

		$(conteudos).hide();
		$(abas + ':first').addClass('ativo');
		$(conteudos + ':first').show();
		$(abas).click(function()
		{
			$(abas).removeClass('ativo');
			$(this).addClass('ativo');
			$(conteudos).hide();
			$(conteudos + $(this).attr('href')).show();
			return false;
		})
	},

	/**
	 * Ativa o plugin da calendario, e configura datas especiais
	 *
	 * @return	false
	 * @author	Daniel Moura
	*/
	calendarioEventos: function() {
		var $descricao = '',
			monthNames = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
			firstClick = "true";

		$('#calendario').glDatePicker(
		{
			showAlways: true,
			cssName: 'flatwhite',
			prevArrow: '',
			nextArrow: '',

			// Adiciona os eventos
			specialDates: [
				{
					date: new Date(2013, 0, 20),
					data: { titulo: 'Campeonato de Lorem Ipsum', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu arcu ac.', link_inscricao: '#this' },
					repeatMonth: true
				},
				{
					date: new Date(0, 5, 10),
					data: { titulo: 'Campeonato de Judo', descricao: 'Lorem ipsum', link_inscricao: '#this' },
					repeatYear: true
				},
				{
					date: new Date(2013, 6, 12),
					data: { titulo: 'Campeonato de Karate', descricao: 'Lorem ipsum', link_inscricao: '#this' },
				},
			],

			// Exibe a descrição do evento, em baixo da calendario.
			onClick: function(target, cell, date, data) {
				if ( firstClick == 'true' ) {
						descricao = '\
							<div>\
								<span class="data"><strong>'+date.getDate()+'</strong>/'+date.getMonth()+'/'+date.getFullYear()+'</span>\
								<span class="title">'+data.titulo+'</span>\
								<p>'+data.descricao+'</p>\
								<a href="'+data.link_inscricao+'" class="botao_a">Inscreva-se já!</a>\
							</div>';
						$('#sidebar .evento-proximo').append(descricao).fadeIn();
					firstClick = 'false';
				} else {
					if(data != null ) {
						$('#calendario #descricao-evento').fadeOut( function() {
							$(this).remove();
						});
						descricao = '\
							<div id="descricao-evento">\
								<span class="data">'+date.getDate()+' de '+monthNames[date.getMonth()]+' de '+date.getFullYear()+'</span>\
								<strong class="titulo">'+data.titulo+'</strong>\
								<p>'+data.descricao+'</p>\
							</div>';
							$('#calendario').append(descricao);
							$('#calendario #descricao-evento').hide().fadeIn();
					} else {
						$('#calendario #descricao-evento').fadeOut( function() {
							$(this).remove();
						});
					}
				}
			}

		});

		var $proximoEvento = $('#calendario').find('.today').nextAll('.core.special');

		if ($proximoEvento.length) {
			$proximoEvento.click();
		} else {
			$firstClick = "false";
		}
	},

	/**
	 * Faz o efeito de fade e troca no bloco de proximos eventos
	 *
	 * @return	false
	 * @author	Daniel Moura
	*/
	carroselEventos: function() {
		var $agenda = $('#agenda');

		if( !$agenda.find('li.ativo').length ) {
			$agenda.find('ul li').first().addClass('ativo');
			$agenda.find('.seta.anterior').fadeOut();
		}

		var $eventoAtivo = $agenda.find('li.ativo'),
			$proximoEvento = $eventoAtivo.next(),
			$eventoAnterior = $eventoAtivo.prev(),
			$setaAnterior = $agenda.find('.seta.anterior'),
			$setaProximo = $agenda.find('.seta.proximo')

		$eventoAnterior.addClass('anterior');
		$proximoEvento.addClass('proximo');
		$agenda.find('ul li').first().before('<li class="vazio primeiro"></li>')
		$agenda.find('ul').append('<li class="vazio ultimo"></li>');

		$setaAnterior.click( function(){
			$eventoAnterior = $eventoAtivo.prev();

			$agenda.find('ul').fadeOut( function(){
				$eventoAnterior.addClass('ativo').removeClass('anterior');
				$eventoAtivo.removeClass('ativo').addClass('proximo');
				$eventoAtivo.siblings('.proximo').removeClass('proximo');
				$eventoAtivo = $eventoAnterior;
				$eventoAtivo.prev().addClass('anterior');

				$setaProximo.fadeIn();
				if ($eventoAnterior.prev().hasClass('vazio')) {
					$setaAnterior.fadeOut();
				}
				$(this).fadeIn();
			});
		});

		$setaProximo.click( function(){
			$proximoEvento = $eventoAtivo.next();

			$agenda.find('ul').fadeOut( function(){
				$proximoEvento.addClass('ativo').removeClass('proximo');
				$eventoAtivo.siblings('.anterior').removeClass('anterior');
				$eventoAtivo.removeClass('ativo').addClass('anterior');
				$eventoAtivo = $proximoEvento;
				$eventoAtivo.next().addClass('proximo');

				$setaAnterior.fadeIn();
				if ($proximoEvento.next().hasClass('vazio')) {
					$setaProximo.fadeOut();
				}
				$(this).fadeIn();
			});
		});
	},

	carrosselHome: function() {
		console.log('carrosse');
		if ( $("#destaque-home").size() ) {
			js.paginacaoCarrossel($("#destaque-home"));

			$("#destaque-home > ul").cycle({
				fx: "scrollHorz",
				speed: 600,
				timeout: 0,
				next: '#destaque-home .proximo',
				prev: '#destaque-home .anterior',
				pager: "#destaque-home .paginacao ul",
				pagerAnchorBuilder: function(idx, slide) { 
					return '<li><a href="#">'+ idx +'</a></li>';
				},
				activePagerClass: "ativo"
			});
		}
	},

	paginacaoCarrossel: function(alvo, adicional)
	{
		var paginacao = '\
			<nav class="setas">\
				<a href="#this" class="anterior image-replace">Anterior</a>\
				<a href="#this" class="proximo image-replace">Próximo</a>\
			</nav>\
			<nav class="paginacao">\
				<div class="alinhamento">\
					<ul>\
					</ul>\
				</div>\
			</nav>';
		$(alvo).append(paginacao);
	},

	/**
	* Modal em AJAX
	*
	* @return	false
	* @author	Daniel Moura
	*/
	engatilhaModal: function(){
		$(".abrir-modal").click(function(event){
			event.preventDefault();
			js.abrirModal($(this).attr("href")); // ID da modal
		});
	},

	abrirModal: function(modalUrl){

		var $modalID = $("#exemplo");

		$modalID.length
			? $("#fundo").add($modalID).fadeIn()
			: $.ajax({
				url: modalUrl,
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