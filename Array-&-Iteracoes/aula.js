// Array & Iteração

// [].forEach(itemAtual, index, array)
// a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function (item, index, array) {
  // console.log(item, '\n', index, '\n', array, '\n');
});

// com arrow function
carros.forEach((item) => {
  // console.log(item.toUpperCase());
})

const li = document.querySelectorAll('li');
li.forEach((item) => { item.classList.add('ativa') });


//[].map(callback((itemAtual, index, array))
// funciona da mesma forma que o forEach(), porém ao ínves de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração
// .map sempre vai retornar uma array(return)
// se não retornamos nenhum valor durante a iteração com o MAP, o valor retornado sera undefined, como qualquer função que não tenha return
const newCarros = carros.map((item) => {
  return 'Carro ' + item;
})

const carrosUpperCase = carros.map((item) => {
  return item.toUpperCase();
})

const numeros = [2, 4, 6, 8, 10, 20];
const numerosx2 = numeros.map((item) => {
  return item * 2;
})
// Arraow function
const numerosx3 = numeros.map(item => item * 3).concat(numerosx2).sort((a, b) => a - b);
// console.log(newCarros);

// [].map() vs [].forEach()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.


// [].map() com objetos
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAula = aulas.map(item => item.min); // [15, 10, 20, 25]
const puxarNomes = aulas.map(item => item.nome.toLowerCase());




// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
// executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas2 = [10, 25, 30];
const totalAulas = aulas2.reduce((acumulador, atual) => {
  return acumulador + atual;
}, 0);

totalAulas; // 65

const totalAulas2 = aulas2.reduce((acc, cur) => {
  return acc + cur;
}, 100/*ACUMULADOR*/)


// Maior valor com [].reducde()

const numeros2 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros2.reduce((anterior, cur) => {
  // if(anterior > cur) {
  //   return anterior;
  // } else {
  //   return cur;
  // }
  return anterior < cur ? cur : anterior;
}, 0);
maiorValor; // 60


// some()
// [].some(), se pelo menos um return da iteração for truthy(||), ele retorna true.
const cores = ['azul', 'preto', 'roxo', 'rosa'];
const temVermelho = cores.some((item) => item === 'vermelho'); // false
const temAzul = cores.some((item) => {
  return item === 'azul';
}); // true

const temMaiorQue100 = numeros2.some((item) => item > 100); // false

const frutas = ['Banana', 'Pera', 'Uva'];
const temUva = frutas.some((frutas) => frutas === 'Uva'); // true


// [].every()
// se todos os returns das iterações forem truthy(&&), o método retornará true.
const frutas2 = ['Banana', 'Pêra', 'Uva', ''];
const arraysCheias = frutas2.every((frutas) => frutas); // false, pq '' string vazia é um valor falsy

const numeroos = [6, 43, 22, 88, 101, 29].sort((a, b) => a - b);
const todosMaiorQue5 = numeroos.every((numero) => numero > 5); // true



// [].FIND() E [].FINDINDEX()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy.
// [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
const frutas3 = ['Banana', 'Pera', 'Uva', 'Maçã', 'Kiwi'];
const buscaUva = frutas3.find((fruta) => fruta === 'Uva');
const indexOfUva = frutas3.findIndex((fruta) => fruta === 'Uva');

const numeros4 = [6, 43, 22, 88, 101, 29, 66];
const buscarMaior90 = numeros4.find((num) => num > 90); // 101, retorna o primeiro valor que for maior que 90;



// [].filter()
// retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
const maioresQue50 = numeros4.filter((num) => num > 50).sort((a, b) => a - b);

// Filter em OBJETOS
const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaioresQue15 = aulas3.filter((aula) => aula.min >= 15)