// Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
        //Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.        

        var nota1=11
        var nota2=11
        var nota3=11
        var nota4=11
        var nota5=11
        var nota6=11

        
        while (nota1 > 10 && nota1 < 0) {
             nota1 = parseFloat(prompt("Insira a primeira nota"));
        }
        while (nota2 > 10 && nota2 < 0) {
             nota2 = parseFloat(prompt("Insira a segunda nota"));
        }
        while (nota3 > 10 && nota3 < 0){
             nota3 = parseFloat(prompt("Insira a terceira nota"));
        }
        while (nota4 > 10 && nota4 < 0){
             nota4 = parseFloat(prompt("Insira a quarta nota"));
            }
        while (nota5 > 10 && nota5 < 0){
              nota5 = parseFloat(prompt("Insira a quinta nota"));
                }
        while (nota6 > 10 && nota6 < 0){
             nota6 = parseFloat(prompt("Insira a sexta nota"));
                    }
     

        var resultado = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6
        if (resultado >= 0 && resultado <= 10) {
            document.write(resultado);
        }

        