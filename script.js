//Cronometro que para,reseta e começa
//botão de começar irar startar o tempo
//botão de resetar irar zerar o tempo e parar
//botão de para vai parar o tempo aonde ele terminou
var seconds = 0;
var mile = 0;
var interval = 10;
var crono

function start(){
    crono = setInterval(() => {
        timer()
    }, interval);
}

function stop(){
    clearInterval(crono)
}

function reset(){
    clearInterval(crono)
    var seconds = 0;
    var mile = 0;
    document.getElementById("cronovdc").innerText = "00:00"

}

function timer (){
    mile++
    if(mile == 100){
        mile = 0
        seconds++
    }
    var format = `${seconds}:${mile}`
    document.getElementById("cronovdc").innerText = format
}

