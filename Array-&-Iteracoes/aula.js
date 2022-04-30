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
// .map sempre vai retornar uma array

const newCarros = carros.map((item) => {
  return 'Carro ' + item;
})
console.log(newCarros);