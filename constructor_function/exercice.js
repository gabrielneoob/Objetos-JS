// Transforme o objeto abaixo em uma Constructor Function
const h11 = document.querySelectorAll('h1');
h11[0].classList.add
//Objeto normal ->
const pessoa2 = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

// Constructor function ->
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(`${nome} andou`);
  }
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(element) {
  this.element = document.querySelectorAll(element);
  this.addClass = function (classe) {
    this.element.forEach((item) => {
      item.classList.add(classe);
    })
  }

  this.removeClass = function (classe) {
    this.element.forEach((item) => {
      item.classList.remove(classe);
    })
  }
}

const h1 = new Dom('h1', 'ativo');