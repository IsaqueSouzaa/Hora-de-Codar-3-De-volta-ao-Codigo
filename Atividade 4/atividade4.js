//Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
         

var i= 15;       
var valor= 0;

while( i <= 100 ) {
    document.write (  i +"<br>");
    i++;
}

num1 = 100
num2 = 15
soma = ((num1 - num2) * (num1 + num2)) /2

media = soma / (num1 - num2)

document.write ( "A media aritmética desses valores é " + media)
