 // Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. 


 function LerValor(){
    return parseInt(prompt("Digite um valor maior que zero:"))
}

function ImprimirValoresAteN(n) {
    for (var i = 1;i <=n; i++ ) {
        document.write(i)
    }
}

function main() {
    var n= LerValor();
    ImprimirValoresAteN(n)
}

main()