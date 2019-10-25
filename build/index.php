<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Todos</title>
	<style>
		div {
			width: 128px;
		}
		
		h2 {
			font: 400 24px/1.5 Helvetica, Verdana, sans-serif;
			margin: 0;
			padding: 0;
		}
		
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
		
		li {
			font: 200 14px/1.5 Helvetica, Verdana, sans-serif;
			border-bottom: 1px solid #ccc;
		}
		
		li:last-child {
			border: none;
		}
		
		li a {
			text-decoration: none;
			color: #000;
			display: block;
			width: 128px;
			
			-webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
			-moz-transition: font-size 0.3s ease, background-color 0.3s ease;
			-o-transition: font-size 0.3s ease, background-color 0.3s ease;
			-ms-transition: font-size 0.3s ease, background-color 0.3s ease;
			transition: font-size 0.3s ease, background-color 0.3s ease;
		}
		
		li a:hover {
			font-size: 18px;
			background: #f6f6f6;
		}
	</style>
</head>
<body>
	<div>
	<h2>Todos</h2>
		<ul>
			<li><a href="vanilla/">Vanilla</a></li>
			<li><a href="backbone/">Backbone</a></li>
			<li><a href="hyperapp/">Hyperapp</a></li>
			<li><a href="react/">React</a></li>
			<li><a href="vue/">Vue</a></li>
		</ul>
	</div>
</body>
</html>