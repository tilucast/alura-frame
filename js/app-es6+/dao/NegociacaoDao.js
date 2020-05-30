import Negociacao from '../models/Negociacao.js'

export default class NegociacaoDao{
    constructor(connection){
         this._connection = connection
         this._store = 'negociacoes'
    }

    adiciona(negociacao){
        return new Promise((resolve, reject) =>{
            let request = this._connection.transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao)

            request.onsuccess = e =>{
                resolve()
            }

            request.onerror = e =>{
                console.log(e.target.error.name)
                reject('Não foi possível adicionar a negociação.')
            }
        })
    }

    listaNegociacoes(){
        return new Promise((resolve, reject) =>{
            let cursor = this._connection.transaction(this._store, 'readonly')
                .objectStore(this._store)
                .openCursor()

            let negociacoes = []

            cursor.onsuccess = e =>{
                const atual = e.target.result

                if(atual){
                    const dado = atual.value
                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor))

                    atual.continue()
                } else{
                    resolve(negociacoes)
                }
            }

            cursor.onerror = e =>{
                console.log(e.target.error.name)
                reject('Não foi possível listar as negociações.')
            }
        })
    }

    apagarNegociacoes(){
        return new Promise((resolve, reject) =>{
            let request = this._connection.transaction(this._store, 'readwrite')
                .objectStore(this._store)
                .clear()

            request.onsuccess = e =>{
                resolve('Negociações apagadas.')
            }

            request.onerror = e =>{
                console.log(e.target.error.name)
                reject('Não foi possível apagar as negociações.')
            }
        })
    }

    /*apagarNegociacao(negociacao){
        return new Promise((resolve, reject) =>{
            let request = this._connection.transaction(this._store, 'readwrite')
            .objectStore(this._store)
            .delete(negociacao)

            request.onsuccess = e => resolve('Negociação apagada.')

            request.onerror = e => reject(console.log(e.target.error.name)) 
        })
    } */
}