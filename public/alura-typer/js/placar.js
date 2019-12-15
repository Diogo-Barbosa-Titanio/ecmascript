$("#botao-placar").on("click",function () {
    mostraPlacar();
});

$("#botao-sync").on("click",function () {
    sicronizaPlacar();
});

function sicronizaPlacar() {
    var placar = [];
    var linhas = $("tbody > tr");

    linhas.each(function () {
        var usuario = $(this).find("td:nth-child(1)");
        var palavras = $(this).find("td:nth-child(2)");

        var score = {
            usuario: usuario.text(),
            pontos: palavras.text()
        };

        placar.push(score);

    });


    var dados = {
      placar: placar
    };

    $.ajax({
        url: 'http://localhost:3000/placar',
        type: 'POST',
        data: dados,
        success: function () {
            console.log("Salvou o placar no servidor")
        }
    });
}

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

function atualizarPlacar() {
    $.ajax({
       url: "http://localhost:3000/placar",
       type: "GET",
       dataType: "JSON",
       success: function (data) {
            $(data).each(function () {
                var linha = novaLinha(this.usuario, this.pontos);

                linha.find(".botao-remover").click(removerLinha);
                $("tbody").append(linha);
            });
       },
       error: function (xhr, er) {
            console.log("Problemas ocorreram ao tentar trazer os dados.");
       }
    });
}
