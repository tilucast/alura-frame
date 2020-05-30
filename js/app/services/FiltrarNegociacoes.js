"use strict";

System.register(["./ImportarNegociacoes.js", "../models/Negociacao.js"], function (_export, _context) {
  "use strict";

  var ImportarNegociacoes, Negociacao, FiltrarNegociacoes;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_ImportarNegociacoesJs) {
      ImportarNegociacoes = _ImportarNegociacoesJs.default;
    }, function (_modelsNegociacaoJs) {
      Negociacao = _modelsNegociacaoJs.default;
    }],
    execute: function () {
      _export("default", FiltrarNegociacoes = /*#__PURE__*/function () {
        function FiltrarNegociacoes() {
          _classCallCheck(this, FiltrarNegociacoes);

          this._importarNegociacoes = new ImportarNegociacoes();
        }

        _createClass(FiltrarNegociacoes, [{
          key: "filtrar",
          value: function () {
            var _filtrar = _asyncToGenerator(function* (listaNegociacao) {
              try {
                const obterNegociacoes = yield this._importarNegociacoes.obterNegociacoes();
                let resultado = obterNegociacoes.filter(function (negociacao) {
                  return !listaNegociacao.negociacoes.some(function (negociacaoExistente) {
                    return Negociacao.isEquals(negociacaoExistente, negociacao);
                  });
                });
                return resultado;
              } catch (err) {
                throw new Error("Erro ao filtrar as negociações");
              }
            });

            function filtrar(_x) {
              return _filtrar.apply(this, arguments);
            }

            return filtrar;
          }()
        }]);

        return FiltrarNegociacoes;
      }());
    }
  };
});
//# sourceMappingURL=FiltrarNegociacoes.js.map