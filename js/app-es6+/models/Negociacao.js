export default class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    //this._id = Negociacao.incrementId()
    Object.freeze(this);
  }

  static incrementId(){
    if (!this.latestId){ 
      this.latestId = 1
    } else 
    this.latestId++
    return this.latestId
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get id(){
    return this._id
  }

  get valor() {
    return this._valor;
  }

  static isEquals(negociacao1, negociacao2){
    return JSON.stringify(negociacao1) === JSON.stringify(negociacao2)
  }
}