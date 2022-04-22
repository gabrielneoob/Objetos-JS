// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 38, 9';
const arrayNumeros = numeros.split(',');
console.log(Math.max(...arrayNumeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'];
// const listaPrecos2 = [];
// listaPrecos.forEach((item) => {
//   listaPrecos2.push(+Number.parseFloat(item.trim().slice(3).replace(/,/g, '.')).toFixed(2));
// });
// let somaPrecos = 0;
// listaPrecos2.forEach((item) => {
//   somaPrecos += item;
// })

function limparNumeros(...array) {
  // console.log(array[0]);
  const precos = []
  array.forEach((item) => {
    item.forEach((item2) => {
      item2 = +item2.toUpperCase().replace('R$', '').trim().replace(',', '.')
      precos.push(item2.toFixed(2));
    })
  })
  return precos;
}
let somaPrecos = 0;
limparNumeros(listaPrecos).forEach((item) => {
  somaPrecos += +item;
})

console.log(somaPrecos);