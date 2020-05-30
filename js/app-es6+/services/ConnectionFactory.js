import Negociacao from '../models/Negociacao.js'

const store = ['negociacoes']
const version = 15
const dbName = 'aluraframe'
let connection = null
let close = null


export default class ConnectionFactory{
    
    constructor(){
        throw new Error('Classe estática.')
    }

    static getConnection(){
        return new Promise((resolve, reject) =>{
            const openRequest = window.indexedDB.open(dbName, version)

            openRequest.onupgradeneeded = e =>{

                ConnectionFactory._createStores(e.target.result)

            }

            openRequest.onsuccess = e =>{
                if(!connection) {
                    connection = e.target.result
                    close = connection.close.bind(connection)
                    connection.close = function(){
                        throw new Error('Não pode fechar a conexão diretamente.')
                    }
                }
                resolve(connection)
            }

            openRequest.onerror = e =>{
                reject(e.target.error.name)
            }
        })
    }

    static _createStores(connection){
        store.forEach(store => {
            if(connection.objectStoreNames.contains(store)) 
                connection.deleteObjectStore(store)

            connection.createObjectStore(store, { keyPath: "id", autoIncrement: true })
        })
    }

    static closeConnection(connection){
        if(connection){
            close()
            connection = null
        }
    }
}