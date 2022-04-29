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


// [].unshift e [].push()
// unshift adiciona ao começo da array
// push() adiciona ao final da array


// [].shift() e [].pop()
// shift() remove o primeiro item da array
// pop() remove o último item da array



// [].reverse()
// modifica a ordem da array


// [].splice(index, remover, item1, item2, ...)
// Adiciona valores na array a partid do index. Remove a quantidade de itens que for passada no segundo parâmetro(retornar esses itens).
const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros2.splice(1, 0, 'Kia', 'Mustang')
carros2; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']
console.log(carros2);
carros2.splice(3, 2, 'Ferrari');
console.log(carros2);


//copyWithin(alvo, inicio, final)
// A partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2);


//[].fill(valor, inicio, final)
// preenche a array com o valor, do início até o fim
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana'));
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana', 0, 2));
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana', 3));




// Métodos de acesso
// Não modificam a array original, apenas retornam uma array modificada.


// [].concat()
// irá concatenar a array com o valor passado

const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
console.log(transportes);
const maisTransportes = [].concat(transporte1, transporte2, ['Van', 'Bicicleta'], 'Helicoptero');
console.log(maisTransportes);



const linguagens = ['html', 'css', 'js', 'pyhton', 'php', 'js', 'c++'];
//[].includes(valor);
// Verifica se a array possui o valor e retorna boolean
linguagens.includes('c++'); // true;
linguagens.includes('ruby'); //false


//[].indexOf(valor);
// Verifica se a array possui o valor e retorna o index dela
linguagens.indexOf('js'); //2
linguagens.indexOf('ruby'); // -1

//[].lastIndexOf(valor);
linguagens.lastIndexOf('js'); //2


//[].join(separador)
// junta todos os valores da array e retorna uma string com o separador
console.log(linguagens.join(''));
console.log(linguagens.join(' '));
console.log(linguagens.join(' <--> '));
let htmlString = '<h2>Título Principal<h2>';
htmlString = htmlString.split('h2');



//[].slice(inicio, final)
// retorna os itens da array começando pelo início e indo até o valor final
const linguagens2 = ['html', 'css', 'js', 'pyhton', 'php', 'js', 'c++'];

const linguagensSlice1 = linguagens.slice(3); // ['pyhton', 'php', 'js', 'c++']
console.log(linguagensSlice1);

const linguagensSlice2 = linguagens.slice(0, 3);
console.log(linguagensSlice2); //['html', 'css', 'js'];

const copiaLinguagens = linguagens.slice(); //['html', 'css', 'js', 'pyhton', 'php', 'js', 'c++'];
