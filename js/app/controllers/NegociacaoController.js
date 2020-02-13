class NegociacaoController {
  constructor() {
    this._$ = document.querySelector.bind(document);
    /* this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor'); */

    const form = (this._form = this._$('.form'));
    this._dataFocus = this._$('#data');
    this._data = form.data;
    this._quantidade = form.quantidade;
    this._valor = form.valor;
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView(this._$('#negociacoesView'));
    this._negociacoesView._update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView(this._$('#mensagemView'));
  }

  adiciona() {
    this._form.addEventListener('submit', event => {
      event.preventDefault();

      this._listaNegociacoes.adicionaNegociacoes(this._criarNegociacao());

      this._mensagem.text = 'Negociação adicionada com sucesso!';

      this._mensagemView._update(this._mensagem);
      this._negociacoesView._update(this._listaNegociacoes);

      setTimeout(() => this._retirarMensagem(), 2000);

      this._limparForm();
    });
  }

  _criarNegociacao() {
    return new Negociacao(
      DateHelper.textToDate(this._data.value),
      this._quantidade.value,
      this._valor.value
    );
  }

  _limparForm() {
    this._form.reset();
    this._dataFocus.focus();
  }

  _retirarMensagem() {
    this._$('#mensagemView').innerHTML = '';
  }
}
const negociacaoController = new NegociacaoController();
negociacaoController.adiciona();
