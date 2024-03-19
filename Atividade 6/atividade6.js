//Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados. */
    
var i = 1;
        
while(i == 1) {
   var nota1= parseFloat(prompt("Insira a primeira nota"));
   var nota2= parseFloat(prompt("Insira a segunda nota"));


   var resultado=(nota1 + nota2)/2
  if (resultado >= 9.5) {
  document.write("O aluno foi aprovado");
}

else {
   document.write("O aluno não foi aprovado");
}

 i= parseInt(prompt("Calcular a média de outro aluno 1.Sim 2.Não?"));

}