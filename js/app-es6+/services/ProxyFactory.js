export default class ProxyFactory {
  constructor() {
    throw new Error(
      'Proxy Factory é estático, logo, não deve ser instanciado.'
    );
  }

  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      get(target, prop, receiver) {
        if (props.includes(prop) && ProxyFactory._validarFuncao(target[prop])) {
          return function() {
            console.log(`interceptando ${prop}`);

            const retorno = Reflect.apply(target[prop], target, arguments);

            acao(target);

            return retorno;
          };
        }

        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {
        const retorno = Reflect.set(target, prop, value, receiver);
        if (props.includes(prop)) acao(target);
        return retorno;
      },
    });
  }

  static _validarFuncao(func) {
    return typeof func === typeof Function;
  }
}
