import { currentInstance } from '../controllers/NegociacaoController.js';
export default class View {
  constructor(elemento) {
    this._elemento = elemento;

    elemento.addEventListener('click', e =>{
      if(e.target.nodeName == 'TH')
        currentInstance().ordenarNegociacoes(e.target.textContent.toLowerCase)

      let x = document.querySelector('.x')
      if(e.target.className == 'x'){
        const target = e.target.dataset.index
        currentInstance().removerNegociacao(target)
      }
    })
  }

  template() {
    throw new Error(
      'Método template deve ser implementado nas classes filhas.'
    );
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }
}
