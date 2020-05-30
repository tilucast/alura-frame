import Negociacao from '../models/Negociacao.js'
import ListaNegociacoes from '../models/ListaNegociacoes.js'
import Mensagem from '../models/Mensagem.js'
import MensagemView from '../views/MensagemView.js'
import NegociacoesView from '../views/NegociacoesView.js'
import ConnectionFactory from '../services/ConnectionFactory.js'
import FiltrarNegociacoes from '../services/FiltrarNegociacoes.js'
import Bind from '../helpers/Bind.js'
import DateHelper from '../helpers/DateHelper.js'
import NegociacaoDao from '../dao/NegociacaoDao.js'

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

    this._init()
}

  async _init(){

    try{
      const getConnection = await ConnectionFactory.getConnection()
      const negociacaoDao = await new NegociacaoDao(getConnection).listaNegociacoes()
      return negociacaoDao.forEach(negociacao => this._listaNegociacoes.adicionaNegociacoes(negociacao))
    }catch(err){
      this._mensagem.text = err
      throw new Error(err)
    }

  }

  adicionarNegociacao() {
    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();
      try{
        const negociacao = this._criarNegociacao()

        const getConnection = await ConnectionFactory.getConnection()
        let negociacaoDao = new NegociacaoDao(getConnection).adiciona(negociacao)

        this._listaNegociacoes.adicionaNegociacoes(negociacao);
        this._mensagem.text = 'Negociação adicionada com sucesso!';
        console.log(negociacao)
        this._limparForm()

        return negociacaoDao

      } catch(err){
        console.log(err)
        throw new Error('Não foi possível adicionar a negociação!')
      }
    });
  }

  importarNegociacoes() {

    this._$('#importbtn').addEventListener('click', async () =>{
      try{
        const getConnection = await ConnectionFactory.getConnection()
        let resultado = await new FiltrarNegociacoes().filtrar(this._listaNegociacoes)
        
        if(resultado.length > 0){
          let retorno = resultado.forEach(negociacao => {
            console.log(negociacao)
            new NegociacaoDao(getConnection).adiciona(negociacao)
            this._listaNegociacoes.adicionaNegociacoes(negociacao)
            this._mensagem.text = 'Negociações importadas com sucesso!'
          })
    
          return retorno
        } else{
          console.log('Negociacoes já importadas')
          this._mensagem.text = 'Negociações já importadas.'
        }

      }catch(err){
        this._mensagem.text = err
        console.log(err)
      }
    })
  }

  _criarNegociacao() {
    return new Negociacao(
      DateHelper.textToDate(this._data.value),
      parseInt(this._quantidade.value),
      parseFloat(this._valor.value)
    );
  }

  retirarNegociacoes() {
    this._$('#apagar').addEventListener('click', async () => {
      
      const opcao = prompt("Excluir a lista de negociações? 1- sim, 2- não")

      if (this._listaNegociacoes.negociacoes.length === 0 || opcao == '2' || opcao == null || opcao == '') {
        return;
      }

      if(opcao == '1'){
        try{
          this._listaNegociacoes.esvaziaNegociacoes();

          const getConnection = await ConnectionFactory.getConnection()
          const negociacaoDao = await new NegociacaoDao(getConnection).apagarNegociacoes()
          this._mensagem.text = 'Lista de negociações apagada!';
          return negociacaoDao

        }catch(err){
          console.log(err)
          this._mensagem.text = err
        }
      }
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

  /*removerNegociacao(td) {
    if (td >= 0) {
      this._listaNegociacoes.removeNegociacao(td)

      ConnectionFactory.getConnection().then(connection => {
        let indexInt = parseInt(td)
        new NegociacaoDao(connection).apagarNegociacao("1100")
      })
        .catch(err => console.log(err)) 

    } 
    this._mensagem.text = 'Negociação apagada com sucesso.'
  } */

  _limparForm() {
    this._form.reset();
    this._dataFocus.focus();
  }
}
const negociacaoController = new NegociacaoController();
negociacaoController.adicionarNegociacao();
negociacaoController.retirarNegociacoes();
negociacaoController.importarNegociacoes();

export function currentInstance(){
  return negociacaoController
}