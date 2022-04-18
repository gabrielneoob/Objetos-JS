// Constructor Function

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  this.marca = marca;
  this.precoFinal = precoInicial * taxa;
}

const mazda = new Carro("Mazda", 5000);
console.log(mazda);

