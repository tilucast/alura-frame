"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var HttpService;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("default", HttpService = /*#__PURE__*/function () {
        function HttpService() {
          _classCallCheck(this, HttpService);
        }

        _createClass(HttpService, [{
          key: "get",
          value: function () {
            var _get = _asyncToGenerator(function* (url) {
              try {
                const Fetch = yield fetch(url);
                return Fetch.json();
              } catch (err) {
                console.log(err);
                throw new Error(err);
              }
            });

            function get(_x) {
              return _get.apply(this, arguments);
            }

            return get;
          }()
        }, {
          key: "post",
          value: function () {
            var _post = _asyncToGenerator(function* (url, dado) {
              try {
                const response = yield fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify(dado)
                });
                return response.json();
              } catch (err) {
                console.log(err);
                throw new Error('Erro ao incluir negociação na API.');
              }
            });

            function post(_x2, _x3) {
              return _post.apply(this, arguments);
            }

            return post;
          }()
        }]);

        return HttpService;
      }());
    }
  };
});
//# sourceMappingURL=HttpService.js.map