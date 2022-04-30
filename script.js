var calcMedia = function(){
       return (this.notas[0] + this.notas[1]);
}

var aluno1 = {
              nome:"João",
              turma:"6-A",
              notas: [5,5],
              media: calcMedia
}

var aluno2 = {
              nome:"Leonardo",
              turma:"6-A",
              notas:[5,3],
              media: calcMedia
}

var aluno3 = {
              nome:"Julia",
              turma:"6-A",
              notas: [3,1],
              media: calcMedia
}
//Aluno1
console.log(`Aluno: ${aluno1.nome} - Turma: ${aluno1.turma} - Nota final: ${aluno1.media()}`);

//Aluno2
console.log(`Aluno: ${aluno2.nome} - Turma: ${aluno2.turma} - Nota final: ${aluno2.media()} `);

//Aluno3
console.log(`Aluno: ${aluno3.nome} - Turma: ${aluno3.turma} - Nota final: ${aluno3.media()}`);
