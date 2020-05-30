import ProxyFactory from '../services/ProxyFactory.js'

export default class Bind {
  constructor(model, view, ...props) {
    const proxy = ProxyFactory.create(model, props, acao => view.update(model));
    view.update(model);

    return proxy;
  }
}
