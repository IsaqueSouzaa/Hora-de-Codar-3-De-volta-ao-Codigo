//Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. 
         
var numero1 = parseInt(prompt("Informe um numero"));
var numero2 = parseInt(prompt("Informe um numero maior"));
var soma =((numero1-numero2) *(numero1 + numero2))/2;

var media = soma / (numero1 - numero2)

document.write ("A media entre os numeros "+ numero1 +" e "+ numero2 +" é " + media)
