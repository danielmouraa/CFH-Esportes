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
	}


}