const array1 = [1, 2, 3, 4, 5];

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

const person1 = new Person("Andrea", 36);
const person2 = new Person("Morgana", 33);
const person3 = new Person("Laura", 3);

// Map sem this
function mapSemThis(arr) {
  return arr.map(item => item * 2);
}

console.log(mapSemThis(array1));

// Map com this
function mapComThis(array, thisArg) {
  return array.map(function (item) {
    return item * this.age;
  }, thisArg);
}

console.log(
  `Múltiplos da idade de ${person1.name}: `,
  mapComThis(array1, person1)
);
console.log(
  `Múltiplos da idade de ${person2.name}: `,
  mapComThis(array1, person2)
);
console.log(
  `Múltiplos da idade de ${person3.name}: `,
  mapComThis(array1, person3)
);
