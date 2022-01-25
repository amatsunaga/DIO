let pessoa1 = {
  nome: "André",
  idade: 37,
  cidade: "Goiânia"
};

let animal1 = { nome: "Brownie", idade: 4, raça: "Shih-tzu" };

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 23));
console.log(calculaIdade.apply(animal1, [5]));
