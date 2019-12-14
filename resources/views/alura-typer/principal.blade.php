<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Alura Typer</title>
    <!--Import Google Icon Font-->
    <link rel="stylesheet" href="{{asset('alura-typer/css/libs/materialize.min.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('alura-typer/css/libs/google-fonts.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('alura-typer/css/estilos.css')}}" media="all">
</head>
<body>
<div class="container">
    <h1 class="center">Alura Typer</h1>
    <p class="frase center">Esta frase tem oito belas e grandiosas palavras.</p>

    <div class="center">
        <img src="{{asset('alura-typer/img/spinner.gif')}}" alt="Carregando..." id="spinner">
        <p id="erro">Ocorreu um erro, por favor tente novamente.</p>
    </div>

    <ul class="informacoes center">
        <li><i class="small material-icons icones">description</i><span id="tamanho-frase">5</span> palavras</li>
        <li><i class="small material-icons icones">query_builder</i><span id="tempo-digitacao">3</span> segundos</li>
    </ul>

    <textarea class="campo-digitacao" rows="8" cols="40"></textarea>

    <div class="botoes">
        <a id="botao-reiniciar" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">restore</i></a>
        <a id="botao-placar" class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">assignment</i></a>
        <a id="botao-frase" class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">shuffle</i></a>
        <a id="botao-frase-id" class="btn-floating btn-large waves-effect waves-light cyan"><i class="material-icons">repeat_one</i></a>
        <input type="number" id="frase-id" min="0">
        <a id="botao-sync" class="btn-floating btn-large waves-effect waves-light yellow right"><i class="material-icons">swap_vert</i></a>

    </div>

    <ul class="center">
        <li><span id="contador-caracteres">0</span> caracteres</li>
        <li><span id="contador-palavras">0</span> palavras</li>
    </ul>

    <section class="placar">
            <h3 class="center">Placar</h3>
        <table class="centered bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>No. de palavras</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </section>

    <div id="app">
        <!-- Aplicativos ve.js vão aqui -->
    </div>

</div>


<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('alura-typer/js/main.js')}}"></script>
<script src="{{asset('alura-typer/js/placar.js')}}"></script>
<script src="{{asset('alura-typer/js/frase.js')}}"></script>

</body>
</html>
