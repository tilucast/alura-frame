"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ListaNegociacoes;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("default", ListaNegociacoes = /*#__PURE__*/function () {
        function ListaNegociacoes() {
          _classCallCheck(this, ListaNegociacoes);

          this._negociacoes = [];
        }

        _createClass(ListaNegociacoes, [{
          key: "adicionaNegociacoes",
          value: function adicionaNegociacoes(negociacao) {
            this._negociacoes.push(negociacao);
          }
        }, {
          key: "esvaziaNegociacoes",
          value: function esvaziaNegociacoes() {
            this._negociacoes = [];
          }
        }, {
          key: "ordenarLista",
          value: function ordenarLista(criterio) {
            this._negociacoes.sort(criterio);
          }
        }, {
          key: "inverterLista",
          value: function inverterLista() {
            this._negociacoes.reverse();
          }
        }, {
          key: "removeNegociacao",
          value: function removeNegociacao(index) {
            //const novaLista = [...this._negociacoes]
            this._negociacoes.splice(index, 1); //this._negociacoes = novaLista

          }
        }, {
          key: "negociacoes",
          get: function get() {
            return [].concat(this._negociacoes);
          }
        }, {
          key: "volumeTotal",
          get: function get() {
            return this._negociacoes.reduce(function (total, n) {
              return total + n.volume;
            }, 0);
          }
        }]);

        return ListaNegociacoes;
      }());
    }
  };
});
//# sourceMappingURL=ListaNegociacoes.js.map