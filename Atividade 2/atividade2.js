//Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO". //


var i = 30;
var EXPLOSÃO = 0;

while (i > EXPLOSÃO) {
    document.write(" Vai explotir em... " + i + "<br>");
    i--
}

document.write("EXPLODIU");