//função construtora e fábrica retorna objetos
//Construtora -> Sempre inciar com letra maiúscula

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome; 
}

const p1 = new Pessoa ('Fabio', 'Henrique');
const p2 = new Pessoa ('Lucas', 'Oliveira');

console.log(p1,p2);