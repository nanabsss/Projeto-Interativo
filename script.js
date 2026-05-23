let vidaPlayer = 100;
let vidaEnemy = 100;

function atacar(tipo){

    let dano = 0;

    if(tipo === 'fraco'){
        dano = 10;
    }
    else if(tipo === 'medio'){
        dano = 20;
    }
    else if(tipo === 'forte'){
        dano = 30;
    }

    vidaEnemy = vidaEnemy - dano;

    if(vidaEnemy < 0){
        vidaEnemy = 0;
    }

    let danoInimigo = Math.floor(Math.random() * 20) + 5;

    vidaPlayer = vidaPlayer - danoInimigo;

    if(vidaPlayer < 0){
        vidaPlayer = 0;
    }

    atualizarTela(dano, danoInimigo);

    verificarVencedor();
}

function atualizarTela(dano, danoInimigo){

    document.getElementById('vidaEnemy').style.width = vidaEnemy + '%';
    document.getElementById('vidaPlayer').style.width = vidaPlayer + '%';

    document.getElementById('hpEnemy').innerHTML = vidaEnemy + ' HP';
    document.getElementById('hpPlayer').innerHTML = vidaPlayer + ' HP';

    document.getElementById('mensagem').innerHTML =
    'Você causou ' + dano + ' de dano! O inimigo causou ' + danoInimigo + ' de dano!';

    if(vidaEnemy <= 0){
        document.getElementById('enemySprite').src = 'Assets/enemyLose.png';
    }

    if(vidaPlayer <= 0){
        document.getElementById('playerSprite').src = 'Assets/playerLose.jpg';
    }
}

function verificarVencedor(){

    if(vidaEnemy <= 0){
        document.getElementById('mensagem').innerHTML = 'Você venceu a batalha!';
    }
    else if(vidaPlayer <= 0){
        document.getElementById('mensagem').innerHTML = 'Você perdeu a batalha!';
    }
}