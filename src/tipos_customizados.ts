type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
});

const novoAluno: aluno = {
    nome: 'Pepe',
    idade: 34,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}