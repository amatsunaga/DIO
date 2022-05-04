// Gerando o array a ser analisado
let myArr = [];

for (let i = 0; i < 5; i++) {
  let number = Math.ceil(Math.random() * (100 - 1) + 1);
  myArr.push(number);
}

// Reduce sem valor inicial
function somarNums(arr) {
  return arr.reduce((acumulador, valorAtual) => acumulador + valorAtual);
}

console.log("Meu array: ", myArr);
console.log("Soma dos itens do arrray: ", somarNums(myArr));

// Reduce com valor inicial
function calcularSaldo(lista, saldoDisponivel) {
  return lista.reduce((acumulador, valorAtual) => acumulador - valorAtual.valor, saldoDisponivel);
}

const lista = [
  {
    name: "tomate",
    valor: 5
  },
  {
    name: "abacaxi",
    valor: 8
  },
  { name: "carne", valor: 50 }
];

console.log("Minha lista: ", lista);
console.log(`O saldo final é de ${calcularSaldo(lista, 100)}.`);
