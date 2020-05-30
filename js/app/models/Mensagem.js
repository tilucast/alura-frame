"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Mensagem;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("default", Mensagem = /*#__PURE__*/function () {
        function Mensagem() {
          let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          _classCallCheck(this, Mensagem);

          this._text = text;
        }

        _createClass(Mensagem, [{
          key: "_retirarMensagem",
          value: function _retirarMensagem() {
            document.querySelector('#mensagemView').innerHTML = '';
          }
        }, {
          key: "_setTimeOutMsg",
          value: function _setTimeOutMsg() {
            var _this = this;

            setTimeout(function () {
              return _this._retirarMensagem();
            }, 2000);
          }
        }, {
          key: "text",
          get: function get() {
            return this._text;
          },
          set: function set(text) {
            this._text = text;

            this._setTimeOutMsg();
          }
        }]);

        return Mensagem;
      }());
    }
  };
});
//# sourceMappingURL=Mensagem.js.map