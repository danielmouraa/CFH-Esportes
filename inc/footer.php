		<footer>
			<div>
				<div class="logo">
					<img src="images/lgo/cfh_esportes_footer.png" alt="CFH Esportes" />
				</div>
				<div class="info">
					<p>Fale com a gente: 61.3242-0933 / 61.9965-2891</p>
					<p><a href="mailto:contato@cfhesportes.com.br">contato@cfhesportes.com.br</a></p>
					<p>SGAN 914 Conjunto I, colégio Leonardo da Vinci</p>
					<p>CFH esportes Copyright © 2008</p>
					<a href="http://www.tark.com.br/" class="logo-tark" target="_blank"><img src="images/lgo/tark.png" alt="Tark" /></a>
				</div>
			</div>
		</footer>

		<script type="text/javascript" src="scripts/plugins/jquery-1.7.2.min.js"></script>
		<script type="text/javascript" src="scripts/plugins/lightbox.js"></script>
		<script type="text/javascript" src="scripts/plugins/glDatePicker.js"></script>
		<script type="text/javascript" src="scripts/plugins/jquery.cycle.js"></script>
		<script type="text/javascript" src="scripts/base.js"></script>
		<script type="text/javascript">
			$(window).load(function(){
				js.engatilhaModal();
				js.dropdownMenu();
				js.navAbas();
				<?php if ($data_page == 'agenda_eventos') { ?>
				js.calendarioEventos();
				<?php } ?>
				js.carroselEventos();
				<?php if ($data_page == 'home') { ?>
				js.carrosselHome();
				<?php } ?>
			})
		</script>
	</body>
</html>