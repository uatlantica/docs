$(document).ready(function() {
	var searchInput = document.getElementsByName('q');
	searchInput[0].placeholder = "Pesquisar Documentação";

	$('[rel="prev"]').html('<span class="fa fa-arrow-circle-left"></span> Anterior');
	$('[rel="next"]').html('Próximo <span class="fa fa-arrow-circle-right"></span>');
});