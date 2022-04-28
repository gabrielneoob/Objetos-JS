// Arrays
// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const precos = '49, 99, 69, 89';
const splitPrecos = precos.split(', ');
const arrayPrecos = [];
splitPrecos.forEach((item) => {
  arrayPrecos.push(+item);
})

const dados = [new String('tipo 1'), ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }], function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda');


// Array.from()
// Transforma em uma array

// Criando uma Array like
const obj = {
  0: 'Gabriel',
  1: 'Arthur',
  2: 'Maria',
  length: 3,
}
const objArray = Array.from(obj);


// isArray()
// Verifica se é uma array
Array.isArray(objArray); // true
Array.isArray(obj); // false


// IMPORTANTE
// Métodos modificadores de Array

// 1- [].sort()
// organiza a array pelo unicode
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); // ['Baixo', 'Guitarra', 'Violão'];
const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8];
idades.sort((a, b) => a - b);