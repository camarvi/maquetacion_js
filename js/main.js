'use strict'

$(document).ready(function(){


	// SLIDER
    if (window.location.href.indexOf('index') > -1){
		$('.galeria').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200
		  });
	}

	//POSTS
 
    if (window.location.href.indexOf('index') > -1){
		var post = [
			{
				title: 'Prueba titulo 1',
				date: 'Publicado el ' + moment().format("D")  + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
				content:'Sed tempus turpis ex, sit amet hendrerit mi accumsan a. Ut diam lorem, pulvinar sed erat quis, tristique mattis magna. Nulla eros ex, imperdiet nec justo id, volutpat commodo sapien. Cras lectus erat, consectetur vitae porta quis, gravida faucibus nulla. Fusce hendrerit, augue id vestibulum feugiat, magna eros gravida metus, eu faucibus ante justo ac diam. Donec fringilla lacus faucibus bibendum vulputate. In id nisi ornare, tempus augue sit amet, ultrices felis. Praesent sed nulla diam. Aliquam mollis velit vel purus mollis, at condimentum leo euismod. Nam quis erat vulputate sem condimentum venenatis a at diam. Donec fermentum molestie elit vitae tincidunt. Quisque facilisis, eros eu placerat pellentesque, nisi quam congue urna, nec consequat libero odio nec erat.'
			},
			{
				title: 'Prueba titulo 2',
				date: 'Publicado el ' + moment().format("D")  + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
				content:'Morbi mollis pretium nibh ut luctus. Nulla facilisi. Ut mollis massa non eros gravida, vel bibendum sapien vehicula. Curabitur mollis, turpis vel pellentesque fermentum, nisl nunc ullamcorper erat, ut commodo tellus velit at metus. Pellentesque ultricies sem mi, quis laoreet nisi hendrerit eu. Vestibulum at suscipit erat. Fusce cursus egestas sem, at interdum erat fringilla non. Vivamus quis justo eu nulla faucibus viverra. Integer ut ex sit amet nulla placerat tincidunt sed ac erat. Curabitur dignissim elit cursus auctor pretium.'
			},
			{
				title: 'Prueba titulo 3',
				date: 'Publicado el ' + moment().format("D")  + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
				content:'Donec pretium eros eu urna ultrices, at sollicitudin dui tempor. Donec gravida pretium lacus, non scelerisque leo consequat quis. Proin a vestibulum ipsum, ut consectetur quam. Vestibulum finibus malesuada leo a scelerisque. Donec non leo ut nulla mattis finibus nec a nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue sodales, varius tellus vulputate, cursus tellus. Morbi elementum lorem eu fermentum laoreet. Quisque dictum ullamcorper lorem, at tincidunt augue convallis non. Mauris eu magna nisl. Curabitur rhoncus cursus nulla, vel dignissim est vehicula vel. Vivamus eget tristique nulla.'
			},
			{
				title: 'Prueba titulo 4',
				date: 'Publicado el ' + moment().format("D")  + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
				content:'Donec pretium eros eu urna ultrices, at sollicitudin dui tempor. Donec gravida pretium lacus, non scelerisque leo consequat quis. Proin a vestibulum ipsum, ut consectetur quam. Vestibulum finibus malesuada leo a scelerisque. Donec non leo ut nulla mattis finibus nec a nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue sodales, varius tellus vulputate, cursus tellus. Morbi elementum lorem eu fermentum laoreet. Quisque dictum ullamcorper lorem, at tincidunt augue convallis non. Mauris eu magna nisl. Curabitur rhoncus cursus nulla, vel dignissim est vehicula vel. Vivamus eget tristique nulla.'
			},
			{
				title: 'Prueba titulo 5',
				date: 'Publicado el ' + moment().format("D")  + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
				content:'Morbi mollis pretium nibh ut luctus. Nulla facilisi. Ut mollis massa non eros gravida, vel bibendum sapien vehicula. Curabitur mollis, turpis vel pellentesque fermentum, nisl nunc ullamcorper erat, ut commodo tellus velit at metus. Pellentesque ultricies sem mi, quis laoreet nisi hendrerit eu. Vestibulum at suscipit erat. Fusce cursus egestas sem, at interdum erat fringilla non. Vivamus quis justo eu nulla faucibus viverra. Integer ut ex sit amet nulla placerat tincidunt sed ac erat. Curabitur dignissim elit cursus auctor pretium.'
			}

		];

		post.forEach((item,index)=>{
			var post=`
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
					${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>	
			`;

			$("#posts").append(post);

		});

	}

	// SELECTOR DE TEMAS
	var theme = $("#theme");


	$("#to-green").click(function(){
		theme.attr("href","css/green.css");
		localStorage.setItem("form_tema","green");
	});

	$("#to-red").click(function(){
		theme.attr("href","css/red.css");
		localStorage.setItem("form_tema","red");
	});

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");
		localStorage.setItem("form_tema","blue");
	});

	// SCROLL PARA SUBIR AL PRINCIPIO DE LA PAGINA
	$(".subir").click(function(e){
		
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop:0
		}, 600);

		return false;
	});

	// CARGAR TEMA POR DEFECTO

	var form_tema = localStorage.getItem("form_tema");

	if (form_tema != null && form_tema != "undefined"){
		switch (form_tema) {
			case "green":
				theme.attr("href","css/green.css");
				break;
			case "red":
				theme.attr("href","css/red.css");
				break;
			case "blue":
				theme.attr("href","css/blue.css");
				break;
			default:
				theme.attr("href","css/green.css");
				break;
		}	
	}




	// FORMULARIO DE LOGIN FALSO

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name" ,form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if (form_name != null && form_name != "undefined"){
		var about = $("#about p");
		
		console.log(form_name);
		about.html("<strong>Bienvenido " + form_name + "</strong>");	
		about.append("<a href='#' id='logout'> Cerrar Sesion</a>");
		$("#login").hide();

		$("#logout").click(function(){
			localStorage.removeItem("form_name");
			location.reload();
		});

	}
	
	// ACORDEON PAGINA ABOUT
	if (window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();

	}


});