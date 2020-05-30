export default class Mensagem {
  constructor(text = '') {
    this._text = text;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this._setTimeOutMsg();
  }

  _retirarMensagem() {
    document.querySelector('#mensagemView').innerHTML = '';
  }

  _setTimeOutMsg() {
    setTimeout(() => this._retirarMensagem(), 2000);
  }
}
