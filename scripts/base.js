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
	 * Ativa o plugin da agenda, e configura datas especiais
	 *
	 * @return	false
	 * @author	Daniel Moura
	*/
	agendaEventos: function() {
		$('#agenda').glDatePicker(
		{
			showAlways: true,
			cssName: 'flatwhite',
			prevArrow: '',
			nextArrow: '',
			specialDates: [
				{
					date: new Date(2013, 0, 8),
					data: { message: 'Meeting every day 8 of the month' },
					repeatMonth: true
				},
				{
					date: new Date(0, 0, 1),
					data: { message: 'Happy New Year!' },
					repeatYear: true
				},
			],
			onClick: function(target, cell, date, data) {
				target.val(date.getFullYear() + ' - ' +
							date.getMonth() + ' - ' +
							date.getDate());

				if(data != null) {
					alert(data.message + '\n' + date);
				}
			}
		});
	}


}