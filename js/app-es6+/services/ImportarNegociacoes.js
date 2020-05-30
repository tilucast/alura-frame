import HttpService from './HttpService.js'
import Negociacao from '../models/Negociacao.js'

export default class ImportarNegociacoes {
  constructor() {
    this._http = new HttpService();
  }

  async importNegociacoesSemana() {
    try {
      const negociacoes = await this._http.get('negociacoes/semana');
      return negociacoes.map(
        objeto =>
        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
      );
    } catch (erro) {
      console.log(erro);
      throw new Error('Não foi possível obter as negociações da semana');
    }
  }

  async importNegociacoesAnterior() {
    try {
      const negociacoes = await this._http.get('negociacoes/anterior');
      return negociacoes.map(
        objeto =>
        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
      );
    } catch (erro) {
      console.log(erro);
      throw new Error(
        'Não foi possível obter as negociações da semana anterior'
      );
    }
  }

  async importNegociacoesRetrasada() {
    try {
      const negociacoes = await this._http.get('negociacoes/retrasada');
      return negociacoes.map(
        objeto =>
        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
      );
    } catch (erro) {
      console.log(erro);
      throw new Error(
        'Não foi possível obter as negociações da semana retrasada'
      );
    }
  }

  async obterNegociacoes() {
    try {
      const negociacoes = await Promise.all([
        this.importNegociacoesSemana(),
        this.importNegociacoesAnterior(),
        this.importNegociacoesRetrasada(),
      ]);
      const negociacao = negociacoes.reduce(
        (flatArr, arr) => flatArr.concat(arr),
        []
      );
      return negociacao;
    } catch (erro) {
      throw new Error(erro);
    }
  }
}