$( document ).ready(function() {
  $("#valProdu").mask("999.999.990,00", {reverse: true});
});


$(document).on("click", "#cadastrar", function(){
  window.open("cadastrarUsuario.html");
});
$(document).on("click", "#entrar", function(){
  window.open("Opts_Produto.html");
});