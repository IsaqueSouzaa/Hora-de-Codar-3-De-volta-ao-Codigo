//Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.//


var num1 = parseInt(prompt("insira um numero por favor:"));
var num2 = 0

while (num2 <= 0) {
     num2 = parseInt(prompt("insira o segundo numero por favor:"));
}

var resul = num1 / num2;

document.write("A divinição desses dois numeros é " + resul)

