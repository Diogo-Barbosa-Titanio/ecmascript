$("#botao-frase").on("click", fraseAleatoria);
$("#botao-frase-id").on("click", buscaFrase);


function buscaFrase() {

    var fraseId = $("#frase-id").val();

    $.ajax({
        url: "http://localhost:3000/frases",
        dataType: "JSON",
        type: "GET",
        data: {
            id: fraseId
        },
        beforeSend: function () {
            $("#spinner").show();
        },
        complete: function () {
            $("#spinner").hide();
        },
        success: function (data) {
            trocaFrase(data);
        },
        error: function (xhr, er) {

            $("#erro").show();
            setTimeout(function () {
                $("#erro").hide();
            }, 1500);

        }
    });
}

function fraseAleatoria() {
    /* $.get("http://localhost:3000/frases",function (data) {
             trocaFraseAleatoria(data);
     });*/

    $.ajax({
        url: "http://localhost:3001/frases",
        dataType: "JSON",
        type: "GET",
        beforeSend: function () {
            $("#spinner").show();
        },
        complete: function () {
            $("#spinner").hide();
        },
        success: function (data) {
            trocaFraseAleatoria(data);
        },
        error: function (xhr, er) {

            $("#erro").show();
            setTimeout(function () {
                $("#erro").hide();
            }, 1500);
        }
    });
}


function trocaFraseAleatoria(data) {
    console.log("Fiz a requisição e retornei");
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}


function trocaFrase(data) {
  //  var fraseId = $("#frase-id").val();
    var frase = $(".frase");

    frase.text(data.texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}
