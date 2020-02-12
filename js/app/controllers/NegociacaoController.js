class NegociacaoController {
  constructor() {
    /* let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor'); */

    const form = (this._form = document.querySelector('.form'));
    this._dataFocus = document.querySelector('#data');
    this._data = form.data;
    this._quantidade = form.quantidade;
    this._valor = form.valor;
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView(
      document.querySelector('#negociacoesView')
    );
    this._negociacoesView._update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView(
      document.querySelector('#mensagemView')
    );
  }

  adiciona() {
    this._form.addEventListener('submit', event => {
      event.preventDefault();

      this._listaNegociacoes.adicionaNegociacoes(this._criarNegociacao());

      this._mensagem.text = 'Negociação adicionada com sucesso!';

      this._mensagemView._update(this._mensagem);

      this._negociacoesView._update(this._listaNegociacoes);

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
}
const negociacaoController = new NegociacaoController();
negociacaoController.adiciona();
