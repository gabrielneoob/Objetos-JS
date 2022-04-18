// Exemplo Real

// objeto normal
const Dom2 = {
  seletor: 'li',
  element() {
    console.log(this.seletor);
    return document.querySelector(this.seletor);
  },
  ativar() {
    return this.element().classList.add('ativar');
  }
}

// Constructor Function
function Dom(seletor) {
  this.seletor = seletor;
  this.element = function () {
    return document.querySelector(seletor);
  },

    this.ativar = function () {
      this.element().classList.add('ativar');
    }
}

const ul = new Dom('ul');
ul.ativar();

const li = new Dom('li');