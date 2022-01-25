function Aluno(nome, nota, turma) {
  this.nome = nome;
  this.nota = nota;
  this.turma = turma;
}

let aluno1 = new Aluno("José", 8, "7A");
let aluno2 = new Aluno("Maria", 10, "7B");
let aluno3 = new Aluno("Alfredo", 6, "7A");
let aluno4 = new Aluno("Antônio", 5, "7C");
let aluno5 = new Aluno("Ana", 9, "7C");

let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (aluno of arr) {
    const { nome, nota } = aluno;
    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 7));
