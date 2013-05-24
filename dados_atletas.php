<?php 
	$data_page = 'dados_atletas';
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
									<li><a href="#topico-5">Histórico</a></li>
								</ul>
							</nav>
							<article>
								<div id="topico-1" class="topicos">
									<form action="#">
										<div>
											<label for="nome">Nome:</label>
											<input name="nome" type="text" value="Miroslav da Silva" />
										</div>
										<div>
											<label for="sexo">Sexo:</label>
											<input name="sexto" type="text" value="Masculino" />
										</div>
										<input type="submit" value="Alterar Dados" class="botao_a" />
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
								<div id="topico-5" class="topicos">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi mi, bibendum non facilisis sit amet, malesuada nec nibh. Vestibulum elementum urna a magna dignissim rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
								</div>
							</article>
						</div>
					</article>
				</section>
			</section>
		</main>

<?php include("inc/footer.php"); ?>