"use strict";

System.register(["../models/Negociacao.js", "../models/ListaNegociacoes.js", "../models/Mensagem.js", "../views/MensagemView.js", "../views/NegociacoesView.js", "../services/ConnectionFactory.js", "../services/FiltrarNegociacoes.js", "../helpers/Bind.js", "../helpers/DateHelper.js", "../dao/NegociacaoDao.js"], function (_export, _context) {
  "use strict";

  var Negociacao, ListaNegociacoes, Mensagem, MensagemView, NegociacoesView, ConnectionFactory, FiltrarNegociacoes, Bind, DateHelper, NegociacaoDao, NegociacaoController, negociacaoController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function currentInstance() {
    return negociacaoController;
  }

  _export("currentInstance", currentInstance);

  return {
    setters: [function (_modelsNegociacaoJs) {
      Negociacao = _modelsNegociacaoJs.default;
    }, function (_modelsListaNegociacoesJs) {
      ListaNegociacoes = _modelsListaNegociacoesJs.default;
    }, function (_modelsMensagemJs) {
      Mensagem = _modelsMensagemJs.default;
    }, function (_viewsMensagemViewJs) {
      MensagemView = _viewsMensagemViewJs.default;
    }, function (_viewsNegociacoesViewJs) {
      NegociacoesView = _viewsNegociacoesViewJs.default;
    }, function (_servicesConnectionFactoryJs) {
      ConnectionFactory = _servicesConnectionFactoryJs.default;
    }, function (_servicesFiltrarNegociacoesJs) {
      FiltrarNegociacoes = _servicesFiltrarNegociacoesJs.default;
    }, function (_helpersBindJs) {
      Bind = _helpersBindJs.default;
    }, function (_helpersDateHelperJs) {
      DateHelper = _helpersDateHelperJs.default;
    }, function (_daoNegociacaoDaoJs) {
      NegociacaoDao = _daoNegociacaoDaoJs.default;
    }],
    execute: function () {
      NegociacaoController = /*#__PURE__*/function () {
        function NegociacaoController() {
          _classCallCheck(this, NegociacaoController);

          this._$ = document.querySelector.bind(document);

          const form = this._form = this._$('.form');

          this._dataFocus = this._$('#data');
          this._data = form.data;
          this._quantidade = form.quantidade;
          this._valor = form.valor;
          this._ordem = '';
          this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView(this._$('#negociacoesView')), 'adicionaNegociacoes', 'esvaziaNegociacoes', 'ordenarLista', 'inverterLista', 'removeNegociacao');
          this._mensagem = new Bind(new Mensagem(), new MensagemView(this._$('#mensagemView')), 'text');

          this._init();
        }

        _createClass(NegociacaoController, [{
          key: "_init",
          value: function () {
            var _init2 = _asyncToGenerator(function* () {
              var _this = this;

              try {
                const getConnection = yield ConnectionFactory.getConnection();
                const negociacaoDao = yield new NegociacaoDao(getConnection).listaNegociacoes();
                return negociacaoDao.forEach(function (negociacao) {
                  return _this._listaNegociacoes.adicionaNegociacoes(negociacao);
                });
              } catch (err) {
                this._mensagem.text = err;
                throw new Error(err);
              }
            });

            function _init() {
              return _init2.apply(this, arguments);
            }

            return _init;
          }()
        }, {
          key: "adicionarNegociacao",
          value: function adicionarNegociacao() {
            var _this2 = this;

            this._form.addEventListener('submit', /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(function* (event) {
                event.preventDefault();

                try {
                  const negociacao = _this2._criarNegociacao();

                  const getConnection = yield ConnectionFactory.getConnection();
                  let negociacaoDao = new NegociacaoDao(getConnection).adiciona(negociacao);

                  _this2._listaNegociacoes.adicionaNegociacoes(negociacao);

                  _this2._mensagem.text = 'Negociação adicionada com sucesso!';
                  console.log(negociacao);

                  _this2._limparForm();

                  return negociacaoDao;
                } catch (err) {
                  console.log(err);
                  throw new Error('Não foi possível adicionar a negociação!');
                }
              });

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          }
        }, {
          key: "importarNegociacoes",
          value: function importarNegociacoes() {
            var _this3 = this;

            this._$('#importbtn').addEventListener('click', /*#__PURE__*/_asyncToGenerator(function* () {
              try {
                const getConnection = yield ConnectionFactory.getConnection();
                let resultado = yield new FiltrarNegociacoes().filtrar(_this3._listaNegociacoes);

                if (resultado.length > 0) {
                  let retorno = resultado.forEach(function (negociacao) {
                    console.log(negociacao);
                    new NegociacaoDao(getConnection).adiciona(negociacao);

                    _this3._listaNegociacoes.adicionaNegociacoes(negociacao);

                    _this3._mensagem.text = 'Negociações importadas com sucesso!';
                  });
                  return retorno;
                } else {
                  console.log('Negociacoes já importadas');
                  _this3._mensagem.text = 'Negociações já importadas.';
                }
              } catch (err) {
                _this3._mensagem.text = err;
                console.log(err);
              }
            }));
          }
        }, {
          key: "_criarNegociacao",
          value: function _criarNegociacao() {
            return new Negociacao(DateHelper.textToDate(this._data.value), parseInt(this._quantidade.value), parseFloat(this._valor.value));
          }
        }, {
          key: "retirarNegociacoes",
          value: function retirarNegociacoes() {
            var _this4 = this;

            this._$('#apagar').addEventListener('click', /*#__PURE__*/_asyncToGenerator(function* () {
              const opcao = prompt("Excluir a lista de negociações? 1- sim, 2- não");

              if (_this4._listaNegociacoes.negociacoes.length === 0 || opcao == '2' || opcao == null || opcao == '') {
                return;
              }

              if (opcao == '1') {
                try {
                  _this4._listaNegociacoes.esvaziaNegociacoes();

                  const getConnection = yield ConnectionFactory.getConnection();
                  const negociacaoDao = yield new NegociacaoDao(getConnection).apagarNegociacoes();
                  _this4._mensagem.text = 'Lista de negociações apagada!';
                  return negociacaoDao;
                } catch (err) {
                  console.log(err);
                  _this4._mensagem.text = err;
                }
              }
            }));
          }
        }, {
          key: "ordenarNegociacoes",
          value: function ordenarNegociacoes(column) {
            if (this._ordem === column) {
              this._listaNegociacoes.inverterLista();
            } else {
              this._listaNegociacoes.ordenarLista(function (a, b) {
                return a[column] - b[column];
              });
            }

            this._ordem = column;
          }
          /*removerNegociacao(td) {
            if (td >= 0) {
              this._listaNegociacoes.removeNegociacao(td)
               ConnectionFactory.getConnection().then(connection => {
                let indexInt = parseInt(td)
                new NegociacaoDao(connection).apagarNegociacao("1100")
              })
                .catch(err => console.log(err)) 
             } 
            this._mensagem.text = 'Negociação apagada com sucesso.'
          } */

        }, {
          key: "_limparForm",
          value: function _limparForm() {
            this._form.reset();

            this._dataFocus.focus();
          }
        }]);

        return NegociacaoController;
      }();

      negociacaoController = new NegociacaoController();
      negociacaoController.adicionarNegociacao();
      negociacaoController.retirarNegociacoes();
      negociacaoController.importarNegociacoes();
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map