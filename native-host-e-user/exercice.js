// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}
Pessoa.prototype.completeName = function () {
  return `${this.name} ${this.lastname}`;
}
// Liste os métodos acessados por 
// dados criados com NodeList,
NodeList.prototype
// HTMLCollection, Document
HTMLAllCollection.prototype

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // boolean