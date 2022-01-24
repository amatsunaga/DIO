let array1 = [1, 3, 4, 6, 80, 33, 23, 90];
let array2 = [];
let array3;
let array4 = null;
let array5 = "olá, tudo bem?";

function substituiPares(vetor) {
  if (!Array.isArray(vetor) || !vetor.length) return -1;
  else {
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === 0 || vetor[i] % 2 != 0) {
        continue;
      } else {
        console.log(`Substituindo ${vetor[i]} por 0...`);
        vetor[i] = 0;
      }
    }
    return `O novo array é [${vetor}].`;
  }
}

console.log(substituiPares(array1));
console.log(substituiPares(array2));
console.log(substituiPares(array3));
console.log(substituiPares(array4));
console.log(substituiPares(array5));
console.log(substituiPares());
