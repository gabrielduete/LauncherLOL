var manterLogin = document.getElementById('manterLogin')

var icone1 = document.getElementsByClassName('icone')[0]
var icone2 = document.getElementsByClassName('icone')[1]
var span1 = document.getElementsByClassName('icone')[2]

var clicou = true

var texto = document.getElementById('texto')
var senha = document.getElementById('senha')

var setinha = document.getElementById('setinha')

var link1 = document.getElementById('link1')

function clicouBotao(){
    if (clicou == true){
        icone1.style.display = 'none'
        icone2.style.display = 'initial'
        span1.style.color = 'black'
        
        clicou = false

    }else{
        icone1.style.display = 'initial'
        icone2.style.display = 'none'
        span1.style.color = '#999999'

        clicou = true
    }
}

function verificaLogin(){
    if (texto.value.length > 0 && senha.value.length > 0){
            setinha.style.backgroundColor = '#d13639'
            setinha.style.color = '#e8e8e8'
            setinha.style.cursor = 'pointer'
            link1.setAttribute("href", "pagePlay.html")
    }else{
        setinha.style.backgroundColor = '#f9f9f9'
        setinha.style.color = '#e8e8e8;'
        setinha.style.cursor = 'initial'
        setinha.style.borderColor = '#999999'
        link1.removeAttribute("href")
    }
}
