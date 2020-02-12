class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  template() {
    throw new Error(
      'Método template deve ser implementado nas classes filhas.'
    );
  }

  _update(model) {
    this._elemento.innerHTML = this.template(model);
  }
}
