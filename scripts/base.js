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
	navAbas: function()
	{
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
	}


}