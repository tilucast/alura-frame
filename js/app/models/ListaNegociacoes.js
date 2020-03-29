class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adicionaNegociacoes(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  esvaziaNegociacoes() {
    this._negociacoes = [];
  }

  ordenarLista(criterio) {
    this._negociacoes.sort(criterio);
  }

  inverterLista() {
    this._negociacoes.reverse();
  }

  get volumeTotal() {
    return this._negociacoes.reduce((total, n) => total + n.volume, 0);
  }
}