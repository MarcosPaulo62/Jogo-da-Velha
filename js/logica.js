var c = 0
var terminado = false

function jogada(posicao) {
    if(c < 9 && terminado == false){ 
        if (c % 2 == 0){
            document.getElementById(posicao).innerHTML = 'X'
            document.getElementById('jogador').innerHTML = 'O'
        } else {
            document.getElementById(posicao).innerHTML = 'O'
            document.getElementById('jogador').innerHTML = 'X'
        }
        c++
        terminado = verificaJogo()
    }
    if (c == 9 && terminado == false) {
            document.getElementById('legenda').innerHTML = 'Empatou!'
            document.getElementById('reiniciar').style.display = 'block'
            
            terminado = true        
    }
}

function verificaJogo(){ 
    var a1 = document.getElementById('a1').textContent
    var a2 = document.getElementById('a2').textContent
    var a3 = document.getElementById('a3').textContent
    var b1 = document.getElementById('b1').textContent
    var b2 = document.getElementById('b2').textContent
    var b3 = document.getElementById('b3').textContent
    var c1 = document.getElementById('c1').textContent
    var c2 = document.getElementById('c2').textContent
    var c3 = document.getElementById('c3').textContent

    if((a1 == 'X' && a2 == 'X' && a3 == 'X')
    || (a1 == 'X' && b2 == 'X' && c3 == 'X')
    || (a1 == 'X' && b1 == 'X' && c1 == 'X')
    || (a2 == 'X' && b2 == 'X' && c2 == 'X')
    || (a3 == 'X' && b3 == 'X' && c3 == 'X')
    || (a3 == 'X' && b2 == 'X' && c1 == 'X')
    || (b1 == 'X' && b2 == 'X' && b3 == 'X')
    || (c1 == 'X' && c2 == 'X' && c3 == 'X')) {
        document.getElementById('legenda').innerHTML = 'Jogador <span class="fw-bold">X</span> venceu!'
        document.getElementById('reiniciar').style.display = 'block'

        return true

    } else if((a1 == 'O' && a2 == 'O' && a3 == 'O')
    || (a1 == 'O' && b2 == 'O' && c3 == 'O')
    || (a1 == 'O' && b1 == 'O' && c1 == 'O')
    || (a2 == 'O' && b2 == 'O' && c2 == 'O')
    || (a3 == 'O' && b3 == 'O' && c3 == 'O')
    || (a3 == 'O' && b2 == 'O' && c1 == 'O')
    || (b1 == 'O' && b2 == 'O' && b3 == 'O')
    || (c1 == 'O' && c2 == 'O' && c3 == 'O')) {
        document.getElementById('legenda').innerHTML = 'Jogador <span class="fw-bold">O</span> venceu!'
        document.getElementById('reiniciar').style.display = 'block'
        
        return true

    } else {
        return false
    }
}

function reiniciar() {
    var a1 = document.getElementById('a1').textContent = ''
    var a2 = document.getElementById('a2').textContent = ''
    var a3 = document.getElementById('a3').textContent = ''
    var b1 = document.getElementById('b1').textContent = ''
    var b2 = document.getElementById('b2').textContent = ''
    var b3 = document.getElementById('b3').textContent = ''
    var c1 = document.getElementById('c1').textContent = ''
    var c2 = document.getElementById('c2').textContent = ''
    var c3 = document.getElementById('c3').textContent = ''

    terminado = false

    c = 0

    document.getElementById('reiniciar').style.display = 'none'

    document.getElementById('legenda').innerHTML = 'Vez do jogador <span class="fw-bold" id="jogador">X</span>'
}