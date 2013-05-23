<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title>CFH Esportes</title>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="author" content="http://www.talk2.com.br" />
		<link rel="shortcut icon" href="images/ico/favicon.ico" type="image/x-icon" />
		<link type="text/css" rel="stylesheet" href="styles/comum.css" media="screen" />
		<link type="text/css" rel="stylesheet" href="styles/estrutura.css" media="screen" />
		<link type="text/css" rel="stylesheet" href="styles/paginas.css" media="screen" />
		<link type="text/css" rel="stylesheet" href="styles/lightbox.css" media="screen" />
		<link type="text/css" rel="stylesheet" href="styles/fonts.css" media="screen" />
		<!--[if lt IE 9]><script type="text/javascript" src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<!--[if IE 7]><link type="text/css" rel="stylesheet" href="styles/ie7.css" media="screen" /><![endif]-->
	</head>

		<body data-role="<?php if( isset($data_page) && $data_page == "home" ) { echo "home"; } else { echo "internas"; } ?>" data-page="<?php if(isset($data_page)) { echo $data_page; } ?>">
		<header>
			<div class="logo">
				<?php if( isset($data_page) && $data_page == "home" ) { ?>
				<h1><a href="index.php"><img src="images/lgo/cfh_esportes.png" alt="CFH Esportes" /></a></h1>
				<?php } else { ?>
				<div><a href="index.php"><img src="images/lgo/cfh_esportes.png" alt="CFH Esportes" /></a></div>
				<?php } ?>
				<span class="slogan">Este clube também é seu... Faça dele o melhor!</span>
			</div>
			<div class="contato">
				<a href="#this">Fale com a gente</a>
				<a href="#this">Trabalhe conosco</a>
			</div>
			<nav id="menu">
				<ul>
					<li><a href="quem_somos.php">Quem Somos</a></li>
					<li><a href="modalidades.php">Modalidades</a></li>
					<li><a href="agenda_eventos.php">Agenda de eventos</a></li>
					<li><a href="cadastro_atletas.php">Cadastro de atletas</a></li>
				</ul>
			</nav>
		</header>