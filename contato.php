<?php 
	$data_page = 'contato';
	include("inc/header.php");
?>

		<main>
			<section class="conteudo">
				<section class="post single">
					<article>
						<h1>Fale Conosco</h1>

						<form action="#" id="contato">
							<div>
								<label>Nome:</label>
								<input type="text" />
							</div>
							<div>
								<label>Sexo:</label>
								<input type="text" />
							</div>
							<div>
								<label>Mensagem:</label>
								<textarea></textarea>
							</div>
							<input type="submit" value="Enviar" class="botao_a" />
						</form>

					</article>
					<?php include("inc/sidebar.php"); ?>
				</section>
			</section>
		</main>

<?php include("inc/footer.php"); ?>