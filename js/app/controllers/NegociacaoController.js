class NegociacaoController {
  constructor() {
    this._$ = document.querySelector.bind(document);

    const form = (this._form = this._$('.form'));
    this._dataFocus = this._$('#data');
    this._data = form.data;
    this._quantidade = form.quantidade;
    this._valor = form.valor;

    this._ordem = '';

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView(this._$('#negociacoesView')),
      'adicionaNegociacoes',
      'esvaziaNegociacoes',
      'ordenarLista',
      'inverterLista',
      'removeNegociacao'
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView(this._$('#mensagemView')),
      'text'
    );
  }

  adicionarNegociacao() {
    this._form.addEventListener('submit', event => {
      event.preventDefault();

      try {
        this._listaNegociacoes.adicionaNegociacoes(this._criarNegociacao());
        this._mensagem.text = 'Negociação adicionada com sucesso!';
      } catch (err) {
        this._mensagem.text = err
      }

      this._limparForm();
    });
  }

  importarNegociacoes() {
    const importbtn = this._$('#importbtn');
    importbtn.addEventListener('click', () => {
      const importarNegociacoes = new ImportarNegociacoes();
      importarNegociacoes
        .obterNegociacoes()
        .then(negociacoes => {
          //console.log(negociacoes);
          negociacoes.forEach(negociacao =>
            this._listaNegociacoes.adicionaNegociacoes(negociacao)
          );
          this._mensagem.text = 'Negociações importadas com sucesso!';
        })
        .catch(error => (this._mensagem.text = error));
    });
  }

  _criarNegociacao() {
    return new Negociacao(
      DateHelper.textToDate(this._data.value),
      this._quantidade.value,
      this._valor.value
    );
  }

  retirarNegociacoes() {
    this._$('#apagar').addEventListener('click', () => {
      if (this._listaNegociacoes.negociacoes.length === 0) {
        return;
      }
      this._listaNegociacoes.esvaziaNegociacoes();
      this._mensagem.text = 'Lista de negociações apagada!';
    });
  }

  ordenarNegociacoes(column) {
    if (this._ordem === column) {
      this._listaNegociacoes.inverterLista();
    } else {
      this._listaNegociacoes.ordenarLista((a, b) => a[column] - b[column]);
    }
    this._ordem = column;
  }

  removerNegociacao(td) {
    const index = td.dataset.index
    if (index >= 0) {
      this._listaNegociacoes.removeNegociacao(index)
    }
  }

  _limparForm() {
    this._form.reset();
    this._dataFocus.focus();
  }
}
const negociacaoController = new NegociacaoController();
negociacaoController.adicionarNegociacao();
negociacaoController.retirarNegociacoes();
negociacaoController.importarNegociacoes();