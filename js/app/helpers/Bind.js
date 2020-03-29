class Bind {
  constructor(model, view, ...props) {
    const proxy = ProxyFactory.create(model, props, acao => view.update(model));
    view.update(model);

    return proxy;
  }
}
