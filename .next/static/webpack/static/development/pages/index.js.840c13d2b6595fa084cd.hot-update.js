webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        navClass: "hide"
      });
    }
  }, {
    key: "showNavBar",
    value: function showNavBar() {
      this.setState({
        navClass: ""
      });
      console.log("show navbar");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("header", {
        className: "jsx-1671189711" + " " + "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "jsx-1671189711" + " " + "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 3
        }
      }, __jsx("img", {
        src: "/petro-logo.jpg",
        alt: "Logo",
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5
        }
      }), __jsx("button", {
        onclick: function onclick() {
          return _this.showNavBar();
        },
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 1
        }
      }, __jsx("i", {
        className: "jsx-1671189711" + " " + "fa fa-bars",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 43
        }
      }))), __jsx("ul", {
        className: "jsx-1671189711" + " " + (this.state.navClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 3
        }
      }, __jsx("li", {
        id: "home",
        className: "jsx-1671189711" + " " + "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 3
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, " Home"))), __jsx("li", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/whoweare",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, " Who we are"))), __jsx("li", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/services",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, " Business and Services "))), __jsx("li", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/rigs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, " Rigs"))), __jsx("li", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/innovations",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, " A well of Innovation"))), __jsx("li", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/careers",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, " Careers"))), __jsx("li", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/investors",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, " Investors"))), __jsx("li", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, " Media"))), __jsx("li", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1671189711",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }, " Contact Us")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1671189711",
        __self: this
      }, "header.jsx-1671189711{height:90px;width:100%;margin:auto;text-align:center;}.logo.jsx-1671189711{height:100%;z-index:1;margin:auto;text-align:center;}.logo.jsx-1671189711 img.jsx-1671189711{width:150px;height:80px;}.hide.jsx-1671189711{display:none;}@media only screen and (max-width:800px){header.jsx-1671189711{position:fixed;box-sizing:border-box;display:block;width:100%;height:40px;padding:2px;z-index:3;background-color:rgb(48,48,48);}.logo.jsx-1671189711{width:100%;}.logo.jsx-1671189711 img.jsx-1671189711{display:none;float:left;width:80px;height:30px;margin-left:20px;}.logo.jsx-1671189711 button.jsx-1671189711{float:right;color:white;font-size:20px;margin-right:3px;cursor:pointer;background-color:transparent;}#check.jsx-1671189711{display:none;}}@media only screen and (min-width:800px){.logo.jsx-1671189711 button.jsx-1671189711{display:none;}.logo.jsx-1671189711 label.jsx-1671189711{display:none;}header.jsx-1671189711 ul.jsx-1671189711{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVLLEFBR3FCLEFBTUEsQUFPQSxBQUtmLEFBR29CLEFBVUosQUFHQyxBQU9BLEFBUUMsQUFNRixBQUdBLEFBSUQsV0E5QlosQ0EvQlcsQUFNRCxBQU9FLEFBNEJFLENBeEJoQixBQWlCZSxBQWViLEFBTUYsQUFJQSxBQUdBLEVBekMwQixPQWRaLENBTkEsQ0FhZCxBQXFCZSxBQU9LLFVBbENBLENBTkEsQUFrQ0wsRUFkRyxFQXFCSSxRQU5ELElBZE4sQ0FkZixDQU5BLEdBeUNlLE1BcEJDLEVBY2QsT0FPMkIsR0FwQmQsWUFDRCxVQUN3QixJQW1CcEMsMkJBbEJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbmF2Q2xhc3M6IFwiaGlkZVwiXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2hvd05hdkJhcigpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG5hdkNsYXNzOiBcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coXCJzaG93IG5hdmJhclwiKTtcclxuICB9XHJcblxyXG5cclxucmVuZGVyKCl7XHJcbnJldHVybihcclxuICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgPGltZyBzcmM9XCIvcGV0cm8tbG9nby5qcGdcIiBhbHQ9XCJMb2dvXCI+PC9pbWc+XHJcblxyXG48YnV0dG9uIG9uY2xpY2s9eygpID0+IHRoaXMuc2hvd05hdkJhcigpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8dWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5hdkNsYXNzfT5cclxuICA8bGkgaWQ9XCJob21lXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+IEhvbWU8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvd2hvd2VhcmVcIj5cclxuICAgICAgICA8YT4gV2hvIHdlIGFyZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPlxyXG4gICAgICAgIDxhPiBCdXNpbmVzcyBhbmQgU2VydmljZXMgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL3JpZ3NcIj5cclxuICAgICAgICA8YT4gUmlnczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9pbm5vdmF0aW9uc1wiPlxyXG4gICAgICAgIDxhPiBBIHdlbGwgb2YgSW5ub3ZhdGlvbjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jYXJlZXJzXCI+XHJcbiAgICAgICAgPGE+IENhcmVlcnM8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvaW52ZXN0b3JzXCI+XHJcbiAgICAgICAgPGE+IEludmVzdG9yczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9tZWRpYVwiPlxyXG4gICAgICAgIDxhPiBNZWRpYTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgPGE+IENvbnRhY3QgVXM8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuXHJcbiAgPHN0eWxlIGpzeD5cclxuICAgIHtgXHJcbiAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAubG9nbyBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhpZGV7XHJcbiAgICAgICAgZGlzcGxheTpub25lXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOjJweDtcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDQ4LCA0OCwgNDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nb3tcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyBpbWd7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28gYnV0dG9uIHtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjaGVja3tcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICBcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAubG9nbyBidXR0b257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyBsYWJlbHsgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgaGVhZGVyIHVse1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gIDwvc3R5bGU+XHJcbjwvaGVhZGVyPlxyXG4pXHJcbn1cclxuXHJcbiBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\components\\\\Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.840c13d2b6595fa084cd.hot-update.js.map