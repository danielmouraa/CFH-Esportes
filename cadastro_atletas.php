<?php 
	$data_page = 'cadastro_atletas';
	include("inc/header.php");
?>

		<main>
			<section class="conteudo">
				<section class="post">
					<article>
						<h1>Cadastro de Atletas</h1>
						<div id="abas-topicos">
							<nav>
								<ul>
									<li><a href="#topico-1">Dados Pessoais</a></li>
									<li><a href="#topico-2">Endereço</a></li>
									<li><a href="#topico-3">Modalidade</a></li>
									<li><a href="#topico-4">Forma de Pagamento</a></li>
								</ul>
							</nav>
							<div id="topico-1" class="topicos">
								<form action="#">
									<div>
										<label for="nome">Nome:</label>
										<input name="nome" type="text"/>
									</div>
									<div>
										<label for="sexo">Sexo:</label>
										<input name="sexto" type="text"/>
									</div>
									<input type="submit" value="Savar e prosseguir" />
								</form>
							</div>
							<div id="topico-2" class="topicos">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi mi, bibendum non facilisis sit amet, malesuada nec nibh. Vestibulum elementum urna a magna dignissim rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
							</div>
							<div id="topico-3" class="topicos">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi mi, bibendum non facilisis sit amet, malesuada nec nibh. Vestibulum elementum urna a magna dignissim rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
							</div>
							<div id="topico-4" class="topicos">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi mi, bibendum non facilisis sit amet, malesuada nec nibh. Vestibulum elementum urna a magna dignissim rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
							</div>
						</div>
					</article>
					<?php include("inc/sidebar.php"); ?>
				</section>
			</section>
		</main>

<?php include("inc/footer.php"); ?>