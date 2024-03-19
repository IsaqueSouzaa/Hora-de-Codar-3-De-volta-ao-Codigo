// Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. 

var i = 1
var n = parseInt(prompt("Insira o valor"));

while (n >= 1)
{
var media = n * i
document.write (n + " * " + i + " = " + media + "<BR>")
i++
if (i >= 11)
{
n--
i -=10
}
}