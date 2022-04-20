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
let taxa = 0;
let recebimento = 0;
transacoes.forEach((item) => {
  item.valor = item.valor.slice(3);
  if (item.descricao.includes('Taxa')) {
    taxa += +item.valor;
  } else {
    recebimento += +item.valor;
  }
})
console.log(`Taxa -> R$ ${taxa}`);
console.log(`Recebimento -> R$ ${recebimento}`);

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

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let taxas = 0;
transacoes2.forEach((item) => {
  if (item.toLocaleLowerCase().includes('taxa')) {
    taxas += 1;
  }
})
