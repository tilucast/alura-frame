class ListaNegociacoes {
  constructor(trap) {
    this._negociacoes = [];
    this._armadilha = trap;
  }

  adicionaNegociacoes(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  esvaziaNegociacoes() {
    this._negociacoes = [];
    this._armadilha(this);
  }
}
