// Metódos e propiedades de String

const comida = "Pizza";
const loguido = new String('Água');

comida.length // Retorna o total de caracteres que a string tem
console.log(comida.length);
comida[0]; // P
comida[comida.length - 1] // a


comida.charAt(0); // P


//str.concat
//concatenar strings

const frase = 'A melhor linguagem é ';
const linguagem = ['JavaScript', 'Python', 'C#', 'Java'];

const fraseCompleta = frase.concat(linguagem[0], '!!');
console.log('\n\n' + fraseCompleta);


//str.includes
// procura pela string exata dentro de outra string. A procura é case sensitive

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false


//str.startWith
// Comeã com 

//str.endsWith
// Termina com
// Não alteram a string



//str.slice(start, end)
// é bastante utilizado
// Corta a string de acordo com os valores de start e end
// Não alteram a string original

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3) // Dep
transacao2.slice(0, 3) // Dep
transacao3.slice(0, 3) // Tax

transacao1.slice(12) // cliente
transacao1.slice(-4) // ente;




//str.indexOf()
// retorna o primeiro INDEX do valor selecionado na string

const nome = 'Gabraiel';
nome.indexOf('a'); // 1;


//str.padStart()
//str.padEnd()
//cria um espaçamento do tamanho escolhido
nome.padStart(20, '.'); // ............Gabraiel
nome.padEnd(20, '.'); // Gabraiel............


//str.repeat(n)
// Repete a string (n) vezes

const frase2 = 'Ta';
fraseRepetir = frase2.repeat(5); //Tatatatata



//str.split(padrao)
// Divide a string de acordo com o padrão passado e RETORNA UMA ARRAY

const listaItens = 'Camisas Bonés Calças Bermudas Vestiddos Saias';
const arrayListaItens = listaItens.split(' ');
console.log(arrayListaItens);
console.log(listaItens.split('')); // quebra tudo dentro de uma Array



//str.trim()
//Removes espaços do inicio e do final da string

const preco = '   R$ 25.00    ';
const precoAjustado = preco.trim(); // 'R$ 25.00'
