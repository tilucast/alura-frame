"use strict";

System.register(["./HttpService.js", "../models/Negociacao.js"], function (_export, _context) {
  "use strict";

  var HttpService, Negociacao, ImportarNegociacoes;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_HttpServiceJs) {
      HttpService = _HttpServiceJs.default;
    }, function (_modelsNegociacaoJs) {
      Negociacao = _modelsNegociacaoJs.default;
    }],
    execute: function () {
      _export("default", ImportarNegociacoes = /*#__PURE__*/function () {
        function ImportarNegociacoes() {
          _classCallCheck(this, ImportarNegociacoes);

          this._http = new HttpService();
        }

        _createClass(ImportarNegociacoes, [{
          key: "importNegociacoesSemana",
          value: function () {
            var _importNegociacoesSemana = _asyncToGenerator(function* () {
              try {
                const negociacoes = yield this._http.get('negociacoes/semana');
                return negociacoes.map(function (objeto) {
                  return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                });
              } catch (erro) {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana');
              }
            });

            function importNegociacoesSemana() {
              return _importNegociacoesSemana.apply(this, arguments);
            }

            return importNegociacoesSemana;
          }()
        }, {
          key: "importNegociacoesAnterior",
          value: function () {
            var _importNegociacoesAnterior = _asyncToGenerator(function* () {
              try {
                const negociacoes = yield this._http.get('negociacoes/anterior');
                return negociacoes.map(function (objeto) {
                  return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                });
              } catch (erro) {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana anterior');
              }
            });

            function importNegociacoesAnterior() {
              return _importNegociacoesAnterior.apply(this, arguments);
            }

            return importNegociacoesAnterior;
          }()
        }, {
          key: "importNegociacoesRetrasada",
          value: function () {
            var _importNegociacoesRetrasada = _asyncToGenerator(function* () {
              try {
                const negociacoes = yield this._http.get('negociacoes/retrasada');
                return negociacoes.map(function (objeto) {
                  return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                });
              } catch (erro) {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana retrasada');
              }
            });

            function importNegociacoesRetrasada() {
              return _importNegociacoesRetrasada.apply(this, arguments);
            }

            return importNegociacoesRetrasada;
          }()
        }, {
          key: "obterNegociacoes",
          value: function () {
            var _obterNegociacoes = _asyncToGenerator(function* () {
              try {
                const negociacoes = yield Promise.all([this.importNegociacoesSemana(), this.importNegociacoesAnterior(), this.importNegociacoesRetrasada()]);
                const negociacao = negociacoes.reduce(function (flatArr, arr) {
                  return flatArr.concat(arr);
                }, []);
                return negociacao;
              } catch (erro) {
                throw new Error(erro);
              }
            });

            function obterNegociacoes() {
              return _obterNegociacoes.apply(this, arguments);
            }

            return obterNegociacoes;
          }()
        }]);

        return ImportarNegociacoes;
      }());
    }
  };
});
//# sourceMappingURL=ImportarNegociacoes.js.map