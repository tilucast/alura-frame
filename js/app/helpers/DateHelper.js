"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var DateHelper;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("default", DateHelper = /*#__PURE__*/function () {
        function DateHelper() {
          _classCallCheck(this, DateHelper);

          throw new Error('DateHelper é estático, portanto não pode ser instanciado.');
        }

        _createClass(DateHelper, null, [{
          key: "textToDate",
          value: function textToDate(text) {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) throw new Error('Deve estar no formato aaaa-mm-dd');
            return new Date(...text.split('-').map(function (item, index) {
              return item - index % 2;
            }));
          }
        }, {
          key: "dateToText",
          value: function dateToText(data) {
            return "".concat(data.getDate(), "/").concat(data.getMonth() + 1, "/").concat(data.getFullYear());
          }
        }]);

        return DateHelper;
      }());
    }
  };
});
//# sourceMappingURL=DateHelper.js.map