// Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.                     
        
var DentroIntervalo = 0;
var ForaIntervalo = 0;

for (var i = 1; i <= 10; i++) {
    var valor = parseFloat(prompt("Digite o valor"));

    if (valor >= 24 && valor <= 42) {
        DentroIntervalo++;
    } else {
        ForaIntervalo++;
    }
}

document.write("Numeros dentro do intervalo 24 a 42, " + DentroIntervalo+"<br>");
document.write(" Numeros fora do intervalo 24 a 42, " + ForaIntervalo);
