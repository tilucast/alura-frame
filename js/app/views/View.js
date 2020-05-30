"use strict";

System.register(["../controllers/NegociacaoController.js"], function (_export, _context) {
  "use strict";

  var currentInstance, View;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      currentInstance = _controllersNegociacaoControllerJs.currentInstance;
    }],
    execute: function () {
      _export("default", View = /*#__PURE__*/function () {
        function View(elemento) {
          _classCallCheck(this, View);

          this._elemento = elemento;
          elemento.addEventListener('click', function (e) {
            if (e.target.nodeName == 'TH') currentInstance().ordenarNegociacoes(e.target.textContent.toLowerCase);
            let x = document.querySelector('.x');

            if (e.target.className == 'x') {
              const target = e.target.dataset.index;
              currentInstance().removerNegociacao(target);
            }
          });
        }

        _createClass(View, [{
          key: "template",
          value: function template() {
            throw new Error('Método template deve ser implementado nas classes filhas.');
          }
        }, {
          key: "update",
          value: function update(model) {
            this._elemento.innerHTML = this.template(model);
          }
        }]);

        return View;
      }());
    }
  };
});
//# sourceMappingURL=View.js.map