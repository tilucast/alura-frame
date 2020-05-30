export default class HttpService {
  async get(url) {

    try{
      const Fetch = await fetch(url)
      return Fetch.json()
    }catch(err){
      console.log(err)
      throw new Error(err)
    }
  }

  async post(url, dado) {

    try{
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(dado)
      })
  
      return response.json()
    }catch(err){
      console.log(err)
      throw new Error('Erro ao incluir negociação na API.')
    }
  }
}