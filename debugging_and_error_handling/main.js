function validateArray(arr, num) {
  try {
    if (!arr || !num) {
      throw new ReferenceError('Envie os parâmetros');
    } else if (typeof arr !== 'object') {
      throw new TypeError('Array precisa ser do tipo object');
    } else if (typeof num !== 'number') {
      throw new TypeError('Número precisa ser do tipo number');
    } else if (arr.length !== num) {
      throw new RangeError('Tamanho inválido!');
    } else if (arr.length === num) {
      return arr;
    }
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log(e.name);
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log(e.name);
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log(e.name);
      console.log(e.message);
    } else {
      console.log('Tipo de erro não esperado: ' + e);
    }
  }
}

console.log(validateArray([], 2));
