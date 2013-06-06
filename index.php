<?php 
	$data_page = 'home';
	include("inc/header.php");
?>

		<main>
			<section id="destaque-home">
				<ul>
					<li><a href="#this"><img src="images/dtq/destaque-01.png" alt="" /></a></li>
					<li><a href="#this"><img src="images/dtq/destaque-01.png" alt="" /></a></li>
				</ul>
				<nav class="setas">
					<a href="#this" class="anterior image-replace">Anterior</a>
					<a href="#this" class="proximo image-replace">Próximo</a>
				</nav>
				<nav class="paginacao">
					<div class="alinhamento">
						<ul>
							<li class="ativo"><a href="#this">1</a></li>
							<li><a href="#this">2</a></li>
							<li><a href="#this">3</a></li>
							<li><a href="#this">4</a></li>
						</ul>
					</div>
				</nav>
			</section>
			<section class="conteudo">
				<section>
					<div class="destaque">
						<div class="bola"></div>
						<h2>Campeonato de futsal 2013</h2>
						<div class="thumb">
							<img src="images/fke/1.jpg" height="224" width="354" alt="" />
							<a href="#this" class="botao_a">Inscrições aqui!</a>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu arcu ac erat fermentum luctus in in turpis. </p>
					</div>
					<h3>Outros eventos</h3>
					<ul class="listagem-posts">
						<li>
							<div class="thumb">
								<a href="#this"><img src="images/fke/2.jpg" height="84" width="115" alt="" /></a>
							</div>
							<h4><a href="#this">Apresentaçao do jardim 1</a></h4>
							<p>Lorem ipsum dolor sit amet</p>
						</li>
						<li>
							<div class="thumb">
								<a href="#this"><img src="images/fke/3.jpg" height="84" width="115" alt="" /></a>
							</div>
							<h4><a href="#this">Campeonato de Basquete 2012</a></h4>
							<p>Lorem ipsum dolor sit amet</p>
						</li>
						<li>
							<div class="thumb">
								<a href="#this"><img src="images/fke/4.jpg" height="84" width="115" alt="" /></a>
							</div>
							<h4><a href="#this">Street dance</a></h4>
							<p>Lorem ipsum dolor sit amet</p>
						</li>
					</ul>
					<a href="#this" class="todos-eventos">Lista completa de eventos</a>
				</section>
				<aside>
					<h2>Próximos eventos:</h2>
					<section id="agenda">
						<a href="#this" class="seta anterior">Anterior</a>
						<ul>
							<li class="anterior">
								<span class="data"><strong>23</strong>/12/2012</span>
								<span>Campeonato lorem ipsum</span>
							</li>
							<li class="ativo">
								<span class="data"><strong>23</strong>/12/2012</span>
								<span class="title">Campeonato lorem ipsum</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu arcu ac.</p>
								<a href="#this" class="botao_a">Inscreva-se já!</a>
							</li>
							<li class="proximo">
								<span class="data"><strong>05</strong>/02/2013</span>
								<span>Campeonato lorem ipsum</span>
							</li>
						</ul>
						<a href="#this" class="seta proximo">Próximo</a>
					</section>
					<div class="post">
						<div class="post-destaque">
							<figure>
								<img src="images/fke/8.jpg" alt="" />
							</figure>
							<div>
								<strong>Os benefícios da caoeira na formação</strong>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu arcu ac erat fermentum luctus in in turpis. </p>
							</div>
						</div>
						<ul class="listagem-posts">
							<li>
								<div class="thumb">
									<a href="#this"><img src="images/fke/4.jpg" height="84" width="115" alt="" /></a>
								</div>
								<h4><a href="#this">Street dance</a></h4>
								<p>Lorem ipsum dolor sit amet</p>
							</li>
							<li>
								<div class="thumb">
									<a href="#this"><img src="images/fke/4.jpg" height="84" width="115" alt="" /></a>
								</div>
								<h4><a href="#this">Street dance</a></h4>
								<p>Lorem ipsum dolor sit amet</p>
							</li>
							<li>
								<div class="thumb">
									<a href="#this"><img src="images/fke/4.jpg" height="84" width="115" alt="" /></a>
								</div>
								<h4><a href="#this">Street dance</a></h4>
								<p>Lorem ipsum dolor sit amet</p>
							</li>
						</ul>
						<div class="banner">
							<a href="#this"><img src="images/fke/banner.png" height="205" width="224" alt="" /></a>
						</div>
					</div>
				</aside>
			</section>
			<!-- <a href="#this" class="abrir-modal" data-modal="exemplo">Abrir Modal Regulamento</a> -->
		</main>

<?php include("inc/footer.php"); ?>