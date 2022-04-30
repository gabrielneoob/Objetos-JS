const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidasFirstItem = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
const comidasLastItem = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Pexie', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')); // true
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')); // false

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.replace(/section/g, 'ul');
html = html.replace(/div/g, 'li');
// html = html.split('section');
// html = html.join('ul');
// html = html.split('div');
// html = html.join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosCopia = carros.slice();
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
carros.pop();