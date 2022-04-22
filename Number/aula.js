// Number
// É a construtora de números, todo número em JS possui as propiedades e métodos do prototype de Number. Number também possuin alguns métodos

// métodos e propiedades de Number

//Number.isNaN() e Number.isinteger();
const ano = 1997;

Number.isInteger(ano); // true
Number.isInteger(3.14); // false
Number.isNaN(ano); // false

//Number.paseFloat() e Number.parseInt()
// parseFloat() seve para retornarmos um número a partir de uma string. A string deve começar com um número.
// paserInt() recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

console.log(Number.parseFloat('99.50')) // Mesma função sem NUmber
console.log(Number.parseInt('99.50')); // 99


//n.toFixed(decimais)
// Arredonda o número com base no total de casas deciamis do argumento
// transforma em uma string
const preco = 2.99;
preco.toFixed(); // 3;

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499;

const preco3 = 1499.59;
preco3.toFixed(); // 1500;


//n.toString()

//n.toLocaleString(lang, options)
// Formata o número de acordo com a língua e opções passadas
const preco4 = 59.49;
console.log(preco4.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' }));
console.log(preco4.toLocaleString('en-Us', { style: 'currency', currency: 'USD' }));



//Math.max(), Math.min() e Math.random();
// max() retornar o maior número de uma lista de argumentos
// min() retornar o menor número
// random() gera um númeor aleatório entre 0 e 1;

const numeros = [5, 1, 100, 500, 8, 900, 15];
Math.max(...numeros); // 900
Math.min(...numeros); // 1;

Math.floor(Math.random() * 100); // entre 0 e 100;