"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ProxyFactory;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("default", ProxyFactory = /*#__PURE__*/function () {
        function ProxyFactory() {
          _classCallCheck(this, ProxyFactory);

          throw new Error('Proxy Factory é estático, logo, não deve ser instanciado.');
        }

        _createClass(ProxyFactory, null, [{
          key: "create",
          value: function create(objeto, props, acao) {
            return new Proxy(objeto, {
              get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._validarFuncao(target[prop])) {
                  return function () {
                    console.log("interceptando ".concat(prop));
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
              }

            });
          }
        }, {
          key: "_validarFuncao",
          value: function _validarFuncao(func) {
            return typeof func === typeof Function;
          }
        }]);

        return ProxyFactory;
      }());
    }
  };
});
//# sourceMappingURL=ProxyFactory.js.map