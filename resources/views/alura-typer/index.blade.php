<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Alura Typer</title>
    <link rel="stylesheet" href="{{asset('alura-typer/css/libs/materialize.min.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('alura-typer/css/libs/google-fonts.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('alura-typer/css/estilos.css')}}" media="all">
    <link rel="stylesheet" href="{{asset('alura-typer/css/index.css')}}" media="all">
</head>
<body>
    <section class="container">
        <h1 class="center titulo header">Alura typer</h1>
        <div class="">
            <img src="{{asset('alura-typer/img/slide1.png')}}" class="imagem-jogo">
            <img src="{{asset('alura-typer/img/slide2.png')}}" class="imagem-jogo">
            <img src="{{asset('alura-typer/img/slide3.png')}}" class="imagem-jogo">
        </div>
        <hr>
        <p class="flow-text center">Teste sua velocidade competindo contra seus amigos!</p>
        <div class="card">
           <div class="card-image">
             <!-- <img src="images/sample-1.jpg"> -->
           </div>
           <div class="card-content">
             <p>Placar dinâmico! Sincronizando com o servidor!</p>
           </div>
           <div class="card-action">
             <a href="principal.html">Experimente agora!</a>
           </div>
         </div>
         <div class="card">
           <div class="card-image">
             <!-- <img src="img/sl.jpg"> -->
           </div>
           <div class="card-content">
             <p>Frases aleatórias ou escolha diretamente em qual delas você quer competir!</p>
           </div>
           <div class="card-action">
             <a href="principal.html">Experimente agora!</a>
           </div>
         </div>

         <a class="waves-effect waves-light btn-large orange" id="botao-jogue" href="principal.html">Jogue agora!</a>

    </section>

    <script src="js/jquery.js"></script>
    <script src="slick/slick.min.js"></script>
    <script src="js/slider.js"></script>


</body>
</html>
