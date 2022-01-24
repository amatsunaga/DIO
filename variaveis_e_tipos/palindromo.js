let palavra = "radar";
let palavra2;
let palavra3 = null;
let fraseTeste0 = "Ontem tomei café.";
let fraseTeste1 = "A cara rajada da jararaca.";
let fraseTeste2 = "A Daniela ama a lei? Nada!";
let fraseTeste3 = "Aí, Lima falou: “Olá, família!”.";

function ePalindromo(frase) {
  if (!frase) {
    return "Insira uma frase, por favor.";
  }

  let novaFrase = frase
    .normalize("NFD")
    .replace(/[^\p{L}]/gu, "")
    .toLowerCase();

  let i = 0;
  let j = novaFrase.length - 1;

  for (i = 0; i < j / 2; i++) {
    if (novaFrase[i] !== novaFrase[j - i]) {
      return `A frase "${frase}" não é palíndromo.`;
    } else {
      return `A frase "${frase}" é palíndromo!`;
    }
  }
}

console.log(ePalindromo(palavra));
console.log(ePalindromo(palavra2));
console.log(ePalindromo(palavra3));
console.log(ePalindromo(fraseTeste0));
console.log(ePalindromo(fraseTeste1));
console.log(ePalindromo(fraseTeste2));
console.log(ePalindromo(fraseTeste3));
