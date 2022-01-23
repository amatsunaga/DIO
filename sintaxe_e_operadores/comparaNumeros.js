function comparaNumeros(numA, numB) {
  let saoIguais;
  const soma = numA + numB;
  let maiorQue10;
  let menorQue20;

  // Verifica se os números são iguais
  numA === numB ? (saoIguais = "são") : (saoIguais = "não são");

  // Verifica se a soma é maior que 10
  soma > 10
    ? (maiorQue10 = "maior que")
    : soma === 10
    ? (maiorQue10 = "igual a")
    : (maiorQue10 = "menor que");

  // Verifica se a soma é menor que 20
  soma < 20
    ? (menorQue20 = "menor que")
    : soma === 20
    ? (menorQue20 = "igual a")
    : (menorQue20 = "maior que");

  console.log(
    `Os números ${numA} e ${numB} ${saoIguais} iguais. Sua soma é ${soma}, que é ${maiorQue10} 10 e ${menorQue20} 20.`
  );
}

comparaNumeros(8, 1);
