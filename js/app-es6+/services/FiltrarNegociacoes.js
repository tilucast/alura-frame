import ImportarNegociacoes from './ImportarNegociacoes.js'
import Negociacao from '../models/Negociacao.js'

export default class FiltrarNegociacoes{
    constructor(){
        this._importarNegociacoes = new ImportarNegociacoes()
    }

    async filtrar(listaNegociacao){
        try{
            const obterNegociacoes = await this._importarNegociacoes.obterNegociacoes()

            let resultado = obterNegociacoes.filter(negociacao => {
            return !listaNegociacao.negociacoes.some(negociacaoExistente => 
                Negociacao.isEquals(negociacaoExistente, negociacao))
            })

            return resultado
        }catch(err){
            throw new Error("Erro ao filtrar as negociações")
        }
    }
}