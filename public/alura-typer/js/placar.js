$("#botao-placar").on("click",function () {
    mostraPlacar();
});


function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Diogo";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario,numPalavras);
    linha.find(".botao-remover").click(removerLinha);

    corpoTabela.append(linha);
    $(".placar").slideDown(400);
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;
    console.log(posicaoPlacar);

    $("html, body").animate(
    {
      scrollTop:posicaoPlacar
    },1000);
}

function novaLinha(usuario,numPalavras) {
    var linha = $("<tr>");
    var  colunaUsuario = $("<td>").text(usuario);
    var  colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass(["small","material-icons"]).text("delete");


    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras)
    linha.append(colunaRemover);

    return linha;
}

function removerLinha() {
    event.preventDefault();

    var linha = $(this).parent().parent();

    linha.fadeOut();

    setTimeout(function () {
        linha.remove();
    },1000);

}

function mostraPlacar() {
      $(".placar").stop().slideToggle(600);
}
