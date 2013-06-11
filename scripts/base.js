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
		var descricao = '',
			monthNames = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];

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
					data: { titulo: 'Campeonato de Lorem Ipsum', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi mi, bibendum non facilisis sit amet, malesuada nec nibh. Vestibulum elementum urna a magna dignissim rhoncus' },
					repeatMonth: true
				},
				{
					date: new Date(0, 5, 10),
					data: { titulo: 'Campeonato de Judo', descricao: 'Lorem ipsum' },
					repeatYear: true
				},
				{
					date: new Date(2013, 6, 12),
					data: { titulo: 'Campeonato de Karate', descricao: 'Lorem ipsum' },
				},
			],

			// Exibe a descrição do evento, em baixo da calendario.
			onClick: function(target, cell, date, data) {
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
		});

		$('#calendario .special').click()
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

	/**
	 * Faz o efeito de carrossel no destaque principal da home
	 *
	 * @return	false
	 * @author	Daniel Moura
	*/
	carroselHome: function() {


	}


}