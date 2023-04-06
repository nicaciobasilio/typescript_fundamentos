"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-end', 'UX/UI'],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['Front-end', 'UX/UI'],
        idade: 23,
    },
];
alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
});
const novoAluno = {
    nome: 'Pepe',
    idade: 34,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
