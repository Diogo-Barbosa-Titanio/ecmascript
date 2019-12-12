<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Alura Typer</title>
    <link rel="stylesheet" href="{{asset('storage/alura-typer/css/libs/materialize.min.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('storage/alura-typer/css/estilos.css')}}" media="all">
</head>
<body>
<div class="container">
    <h1 class="center">Alura Typer</h1>
    <p class="frase center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque felis id justo varius, at tincidunt
        odio
        egestas. Etiam sagittis lectus vel ante consequat tristique. Mauris in lacus vel massa mattis vestibulum id vel
        nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur auctor
        dapibus tortor, ac interdum sem. Pellentesque at nibh magna. Phasellus laoreet placerat blandit. Ut arcu odio,
        viverra et dui non, eleifend laoreet ligula.
    </p>

    <ul class="informacoes center">
        <li><span id="tamanho-frase">5</span> palavras</li>
        <li><span id="tempo-digitacao">10</span> segundos</li>
    </ul>

    <textarea class="campo-digitacao" rows="8" cols="40"></textarea>
    <button id="botao-reiniciar">Reiniciar jogo</button>

    <ul class="center">
        <li><span id="contador-caracteres">0</span> caracteres</li>
        <li><span id="contador-palavras">0</span> palavras</li>
    </ul>

    <div id="app">
        <!-- Aplicativos ve.js vão aqui -->
    </div>

</div>


<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('storage/alura-typer/js/main.js')}}"></script>

</body>
</html>
