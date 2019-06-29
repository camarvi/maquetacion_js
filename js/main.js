'use strict'

$(document).ready(function(){

	// SLIDER

	$('.galeria').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200
	  });

	//POSTS
 
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

	// SELECTOR DE TEMAS
	var theme = $("#theme");


	$("#to-green").click(function(){

		theme.attr("href","css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href","css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");
	});

	// SCROLL PARA SUBIR AL PRINCIPIO DE LA PAGINA
	$(".subir").click(function(e){
		
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop:0
		}, 600);

		return false;
	});



});