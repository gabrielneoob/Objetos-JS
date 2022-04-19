//Prototype 
// Núcleo do jovaScript
// A propiedade prototype é um objeto adicionado a uma função quando a mesma é criada.
// é uma propiedade das funções
// toda função tem um prototype

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const arthur = new Pessoa('Arthur', 7);

console.log(Pessoa.prototype); //retorna o objeto
console.log(arthur.prototype); // undefined, porque é um objeto e não uma function;


//funcao.prototype
// É possível adicionar novas propiedades e métodos ao objeto prototype.

Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
}

Pessoa.prototype.nadou = function () {
  return `${this.nome} nadou`;
}

const gabriel = new Pessoa('Gabriel', 24);


// É possível acessar a função do protótipo
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array

const lista = document.querySelectorAll('li');

// transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
//Mesa coisa que Array.from()


// Entenda o que está sendo retornado
// Os métodos e propiedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Objetc
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

// Verifique o nome do construtor com .constructor.name