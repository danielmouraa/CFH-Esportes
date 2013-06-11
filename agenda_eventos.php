<?php 
	$data_page = 'agenda_eventos';
	include("inc/header.php");
?>

		<main>
			<section class="conteudo">
				<section class="post single">
					<article>
						<div class="titulo">
							<h1>Agenda de Eventos</h1>
							<?php include("inc/share.php"); ?>
						</div>
						<div id="calendario"><!-- Adicionado por Javascript --></div>
					</article>
					<?php include("inc/sidebar.php"); ?>
				</section>
			</section>
		</main>

<?php include("inc/footer.php"); ?>