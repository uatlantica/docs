$(document).ready(function() {
	$('.fa-github').text(' Contribuir no GitHub');

	var searchInput = document.getElementsByName('q');
	searchInput[0].placeholder = "Pesquisar Documentação";

	$('[rel="prev"]').html('<span class="fa fa-arrow-circle-left"></span> Anterior');
	$('[rel="next"]').html('Próximo <span class="fa fa-arrow-circle-right"></span>');

	var text = $('footer').html();
	$('footer').html(text.replace('Built with', 'Construído com'));
	var text = $('footer').html();
	$('footer').html(text.replace('using a', 'utilizando um'));
	var text = $('footer').html();
	$('footer').html(text.replace('theme', 'tema'));
	var text = $('footer').html();
	$('footer').html(text.replace('provided by', 'fornecido por'));
});