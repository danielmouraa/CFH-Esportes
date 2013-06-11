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

	}


}