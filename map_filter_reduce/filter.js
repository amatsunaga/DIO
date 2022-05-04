let myArr = [];

for (let i = 0; i < 20; i++) {
  let number = Math.ceil(Math.random() * (100 - 1) + 1);
  myArr.push(number);
}

console.log("Array a ser filtrado: ", myArr);

function filterEvenNums(arr) {
  return arr.filter(item => item % 2 === 0)
}

console.log("Array filtrado somente com números pares: ", filterEvenNums(myArr))
