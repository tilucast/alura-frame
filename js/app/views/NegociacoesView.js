"use strict";

System.register(["./View.js", "../helpers/DateHelper.js"], function (_export, _context) {
  "use strict";

  var View, DateHelper, NegociacoesView;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  return {
    setters: [function (_ViewJs) {
      View = _ViewJs.default;
    }, function (_helpersDateHelperJs) {
      DateHelper = _helpersDateHelperJs.default;
    }],
    execute: function () {
      _export("default", NegociacoesView = /*#__PURE__*/function (_View) {
        _inherits(NegociacoesView, _View);

        var _super = _createSuper(NegociacoesView);

        function NegociacoesView() {
          _classCallCheck(this, NegociacoesView);

          return _super.apply(this, arguments);
        }

        _createClass(NegociacoesView, [{
          key: "template",
          value: function template(model) {
            return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n            <tr>\n              <th>DATA</th>\n              <th>QUANTIDADE</th>\n              <th>VALOR</th>\n              <th>VOLUME</th>\n            </tr>\n            </thead>\n        \n            <tbody class=\"table-body\">\n                ".concat(model.negociacoes.map(function (negociacao, i) {
              return "\n                    <tr>\n                        <td>".concat(DateHelper.dateToText(negociacao.data), "</td>\n                        <td>").concat(negociacao.quantidade, "</td>\n                        <td>").concat(negociacao.valor, "</td>\n                        <td>").concat(negociacao.volume, "</td>\n                        <!--<td class=\"x\" data-index=\"").concat(i, "\">X</td> -->\n                    </tr>\n                    \n                ");
            }).join(''), "\n            </tbody>\n        \n            <tfoot>\n                <td colspan=\"3\">Total</td>\n                <td>").concat(model.volumeTotal, "</td>\n            </tfoot>\n        </table>\n        ");
          }
        }]);

        return NegociacoesView;
      }(View));
    }
  };
});
//# sourceMappingURL=NegociacoesView.js.map