// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let somaTaxa = 0;
let somaRecebimento = 0;
transacoes.forEach((item) => {
  const valorModificado = item.valor.slice(3);
  if (item.descricao.includes('Taxa')) {
    somaTaxa += +valorModificado;
  } else {
    somaRecebimento += +valorModificado;
  }
})
console.log(somaTaxa);
console.log(somaRecebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';');
console.log(transportesArray);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlA = html.replace(/span/g, 'a');
console.log(htmlA);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const lastCharacterer = frase[frase.length - 1];
// Retorne o total de taxas
let totalTaxas = 0;
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
transacoes2.forEach((item) => {
  if (item.toLocaleLowerCase().includes('taxa')) {
    totalTaxas += 1;
  }
})
console.log(totalTaxas);
