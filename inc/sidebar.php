					<aside id="sidebar">

					<?php if ( $data_page == "noticias" || $data_page == "modalidades" ) { ?>
						<div class="bloco modalidade">
							<a href="#this" title="Link para Lorem Ipsum" class="botao_a modalidades">Tabela completa de modalidades e horários</a>
							<h3>Escolha uma modalidade</h3>
							<div class="escolha">
								<div>
									<label>Região:</label>
									<select name="regiao">
										<option value="0">Selecione a região</option>
										<option value="ac">Acre</option>
										<option value="al">Alagoas</option>
										<option value="ap">Amapá</option>
										<option value="am">Amazonas</option>
										<option value="ba">Bahia</option>
										<option value="ce">Ceará</option>
										<option value="df">Distrito Federal</option>
										<option value="es">Espirito Santo</option>
										<option value="go">Goiás</option>
										<option value="ma">Maranhão</option>
										<option value="ms">Mato Grosso do Sul</option>
										<option value="mt">Mato Grosso</option>
										<option value="mg">Minas Gerais</option>
										<option value="pa">Pará</option>
										<option value="pb">Paraíba</option>
										<option value="pr">Paraná</option>
										<option value="pe">Pernambuco</option>
										<option value="pi">Piauí</option>
										<option value="rj">Rio de Janeiro</option>
										<option value="rn">Rio Grande do Norte</option>
										<option value="rs">Rio Grande do Sul</option>
										<option value="ro">Rondônia</option>
										<option value="rr">Roraima</option>
										<option value="sc">Santa Catarina</option>
										<option value="sp">São Paulo</option>
										<option value="se">Sergipe</option>
										<option value="to">Tocantins</option>
									</select>
								</div>
								<div>
									<label>Modalidade:</label>
									<select name="modalidade">
										<option value="0">Selecione a modalidade</option>
										<option value="lorem">Lorem</option>
										<option value="ipsum">Ipsum</option>
									</select>
								</div>
							</div>
						</div>
					<?php } ?>

					<?php if ( $data_page == "modalidades_interna" || $data_page == "noticias_interna" ) { ?>
						<div class="bloco galeria-fotos">
							<h3>Galeria de Fotos</h3>
							<ul>
								<li><a href="images/fke/06.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 1 de 9"></a></li>
								<li><a href="images/fke/06_2.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 2 de 9"></a></li>
								<li class="ultimo"><a href="images/fke/06.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 3 de 9"></a></li>
								<li><a href="images/fke/06.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 4 de 9"></a></li>
								<li><a href="images/fke/06.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 5 de 9"></a></li>
								<li class="ultimo"><a href="images/fke/06.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 6 de 9"></a></li>
								<li><a href="images/fke/06.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 7 de 9"></a></li>
								<li><a href="images/fke/06.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 8 de 9"></a></li>
								<li class="ultimo"><a href="images/fke/06.jpg" rel="lightbox[judo]" title="Legenda Imagem"><img src="images/fke/06-thumb.jpg" alt="Imagem 9 de 9"></a></li>
							</ul>
						</div>
					<?php } ?>

					<?php if ( $data_page == "noticias" || $data_page == "noticias_interna") { ?>
						<div class="bloco outras-noticias">
							<h3>Outras Notícias</h3>
							<ul>
								<li>
									<figure class="thumb">
										<a href="#this" title="Link para Lorem Ipsum"><img src="images/fke/5.jpg" alt="" /></a>
									</figure>
									<h4><a href="#this" title="Link para Lorem Ipsum">Street dance</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</li>
								<li>
									<figure class="thumb">
										<a href="#this" title="Link para Lorem Ipsum"><img src="images/fke/5.jpg" alt="" /></a>
									</figure>
									<h4><a href="#this" title="Link para Lorem Ipsum">Street dance</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</li>
								<li>
									<figure class="thumb">
										<a href="#this" title="Link para Lorem Ipsum"><img src="images/fke/5.jpg" alt="" /></a>
									</figure>
									<h4><a href="#this" title="Link para Lorem Ipsum">Street dance</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</li>
								<li>
									<figure class="thumb">
										<a href="#this" title="Link para Lorem Ipsum"><img src="images/fke/5.jpg" alt="" /></a>
									</figure>
									<h4><a href="#this" title="Link para Lorem Ipsum">Street dance</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</li>
							</ul>
						</div>
					<?php } ?>

					<?php if ( $data_page == "modalidades_interna" ) { ?>
					<div id="agenda" class="bloco proximos-eventos">
						<h3>Próximos eventos de Judô</h3>
						<ul>
							<li class="anterior">
								<span class="data"><strong>23</strong>/12/2012</span>
								<span>Campeonato lorem ipsum</span>
							</li>
							<li class="ativo">
								<span class="data"><strong>23</strong>/12/2012</span>
								<span><strong>Campeonato lorem ipsum</strong></span>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu arcu ac.</p>
								<a href="#this" class="botao_a">Inscreva-se já!</a>
							</li>
							<li class="proximo">
								<span class="data"><strong>05</strong>/02/2013</span>
								<span>Campeonato lorem ipsum</span>
							</li>
						</ul>
					</div>
					<?php } ?>

					</aside>