var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").on("click", reiniciaJogo);
});

function inicializaMarcadores() {

    var frase = $(".frase").text();

    campo.on("input", function () {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("campo-correto");
            campo.removeClass("campo-incorreto");
        } else {
            campo.addClass("campo-incorreto");
            campo.removeClass("campo-correto");
        }

    });
}


function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(/\S+/).length - 1;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function () {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        console.log(qtdPalavras);

        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(conteudo.length);
    });
}


function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function () {
        var cronometroID = setInterval(function () {
            tempoRestante--;
            console.log(tempoRestante);
            $("#tempo-digitacao").text(tempoRestante);

            if (tempoRestante <= 0) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#tempo-digitacao").text(tempoInicial);
    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    inicializaCronometro();
    inicializaMarcadores();
    campo.toggleClass("campo-desativado");
    campo.removeClass("campo-correto");
    campo.removeClass("campo-incorreto");
}
