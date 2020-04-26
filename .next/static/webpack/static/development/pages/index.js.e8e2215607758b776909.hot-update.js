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
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "showNavBar", function () {
      if (_this.state.navClass == "hide") _this.setState({
        navClass: "show",
        iconClass: "",
        buttontext: "X"
      });else {
        _this.setState({
          navClass: "hide",
          iconClass: "fa fa-bars",
          buttontext: ""
        });
      }
      console.log("show navbar");
    });

    _this.state = {
      navClass: "hide",
      iconClass: "fa fa-bars",
      buttontext: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        navClass: "hide"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("header", {
        className: "jsx-1389817700" + " " + "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "jsx-1389817700" + " " + "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 3
        }
      }, __jsx("img", {
        src: "/petro-logo.jpg",
        alt: "Logo",
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 5
        }
      }), __jsx("span", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 1
        }
      }, "PetroGas Group"), __jsx("button", {
        onClick: function onClick() {
          return _this2.showNavBar();
        },
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 1
        }
      }, __jsx("i", {
        className: "jsx-1389817700" + " " + "".concat(this.state.iconClass),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 43
        }
      }), this.state.buttontext)), __jsx("ul", {
        className: "jsx-1389817700" + " " + (this.state.navClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 3
        }
      }, __jsx("li", {
        id: "home",
        className: "jsx-1389817700" + " " + "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 3
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, " Home"))), __jsx("li", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/whoweare",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, " Who we are"))), __jsx("li", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/services",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, " Business and Services "))), __jsx("li", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/rigs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, " Rigs"))), __jsx("li", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/innovations",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }, " A well of Innovation"))), __jsx("li", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/careers",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, " Careers"))), __jsx("li", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/investors",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, " Investors"))), __jsx("li", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }, " Media"))), __jsx("li", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "jsx-1389817700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, " Contact Us")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1389817700",
        __self: this
      }, "header.jsx-1389817700{height:90px;width:100%;margin:auto;text-align:center;}.logo.jsx-1389817700{height:100%;z-index:1;margin:auto;text-align:center;}.logo.jsx-1389817700 img.jsx-1389817700{width:150px;height:80px;}.hide.jsx-1389817700{display:none;}@media only screen and (max-width:800px){header.jsx-1389817700{position:fixed;top:0;box-sizing:border-box;display:block;width:100%;height:45px;padding:2px;z-index:3;background-color:rgb(48,48,48);}.logo.jsx-1389817700{width:100%;}.logo.jsx-1389817700 img.jsx-1389817700{display:none;float:left;width:80px;height:30px;margin-left:20px;}.logo.jsx-1389817700 button.jsx-1389817700{float:right;height:35px;width:35px: color:white;font-size:20px;margin-right:3px;color:white;cursor:pointer;background-color:rgb(48,48,48);}header.jsx-1389817700 ul.jsx-1389817700{box-sizing:border-box;background-color:rgb(48,48,48);margin:auto;width:100%;height:auto;list-style:none;text-align:center;}header.jsx-1389817700 ul.jsx-1389817700 li.jsx-1389817700{border-top:0.1px solid rgb(80,80,80);display:block;width:100%;margin:auto;text-align:center;font-size:1.2em;}header.jsx-1389817700 a.jsx-1389817700:hover{color:white;}header.jsx-1389817700 li.jsx-1389817700:hover{background-color:red;border-radius:5px;}header.jsx-1389817700 a.jsx-1389817700{color:rgb(245,245,245);display:block;padding:5px 20px 5px 0px;-webkit-text-decoration:none;text-decoration:none;}.fa.jsx-1389817700{color:white;}header.jsx-1389817700 ul.jsx-1389817700,header.jsx-1389817700 span.jsx-1389817700{float:left;color:red;font-size:1.8em;font-weight:bold;margin-left:1.4em;}}@media only screen and (min-width:800px){.logo.jsx-1389817700 button.jsx-1389817700{display:none;}.logo.jsx-1389817700 label.jsx-1389817700{display:none;}header.jsx-1389817700 ul.jsx-1389817700,header.jsx-1389817700 span.jsx-1389817700{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdLLEFBR3FCLEFBTUEsQUFPQSxBQUtmLEFBR29CLEFBV0osQUFHQyxBQU9BLEFBV1MsQUFVZSxBQVM3QixBQUdTLEFBSUksQUFPYixBQUtELEFBU0ssQUFJQSxBQUlELFdBM0VaLEFBMkRTLENBM0ZFLEFBTUQsQUFPRSxBQTZCQyxBQThCbEIsQUFjQSxDQXJFRyxBQWtCZSxBQWtFZixBQUlBLEFBR0EsRUF2RlMsTUFDaUIsQUFxRFYsQUFpQkMsQ0FyRkgsQUE4Q3dCLENBcER4QixBQThFRCxDQWpFYixBQXNCZSxBQVFDLFVBcENJLENBTkEsQUFtQ0wsRUEwQkEsQUFpQlMsQUFhTCxFQWpCdEIsSUFyRHFCLElBZUcsQ0FPRCxHQW1CUixDQXZEWixDQU5BLEFBbURhLENBd0NPLEdBdEVMLEtBeUNILEFBZ0JRLENBbkNFLENBUHBCLENBZ0JVLEdBOUJJLElBc0VoQixFQTdCbUIsRUFWTixJQTlCRSxBQXFCQyxRQVVDLElBOUJILEFBcUJDLEFBbUJHLFVBdkNvQixFQThCbkIsR0FUZSxDQW1CbkMsSUFjRixVQXZCRSxXQTlCRyxLQXFCQSIsImZpbGUiOiJDOlxcVXNlcnNcXFVzZXIgUENcXHdvcmtzcGFjZVxca2NhXFxwYWdlc1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuY29uc3RydWN0b3IocHJvcHMpe1xyXG4gIHN1cGVyKHByb3BzKVxyXG4gIHRoaXMuc3RhdGU9e1xyXG4gICAgbmF2Q2xhc3M6IFwiaGlkZVwiLFxyXG4gICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtYmFyc1wiLFxyXG4gICAgICBidXR0b250ZXh0OiBcIlwiXHJcbiAgfTtcclxufVxyXG5cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbmF2Q2xhc3M6IFwiaGlkZVwiXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2hvd05hdkJhciA9ICgpID0+e1xyXG4gICAgaWYodGhpcy5zdGF0ZS5uYXZDbGFzcz09IFwiaGlkZVwiKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICBuYXZDbGFzczogXCJzaG93XCIsXHJcbiAgICAgICAgaWNvbkNsYXNzOiBcIlwiLFxyXG4gICAgICAgICBidXR0b250ZXh0OiBcIlhcIlxyXG4gICAgIFxyXG4gICAgfSlcclxuICAgIGVsc2V7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbmF2Q2xhc3M6IFwiaGlkZVwiLFxyXG4gICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtYmFyc1wiLFxyXG4gICAgICBidXR0b250ZXh0OiBcIlwiXHJcbiAgICAgIH0pIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJzaG93IG5hdmJhclwiKTtcclxuICB9XHJcblxyXG5cclxucmVuZGVyKCl7XHJcbnJldHVybihcclxuICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgPGltZyBzcmM9XCIvcGV0cm8tbG9nby5qcGdcIiBhbHQ9XCJMb2dvXCI+PC9pbWc+XHJcbjxzcGFuPlBldHJvR2FzIEdyb3VwPC9zcGFuPlxyXG48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd05hdkJhcigpfT48aSBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuaWNvbkNsYXNzfWB9PjwvaT57dGhpcy5zdGF0ZS5idXR0b250ZXh0fVxyXG48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8dWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5hdkNsYXNzfT5cclxuICA8bGkgaWQ9XCJob21lXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+IEhvbWU8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvd2hvd2VhcmVcIj5cclxuICAgICAgICA8YT4gV2hvIHdlIGFyZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPlxyXG4gICAgICAgIDxhPiBCdXNpbmVzcyBhbmQgU2VydmljZXMgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL3JpZ3NcIj5cclxuICAgICAgICA8YT4gUmlnczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9pbm5vdmF0aW9uc1wiPlxyXG4gICAgICAgIDxhPiBBIHdlbGwgb2YgSW5ub3ZhdGlvbjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jYXJlZXJzXCI+XHJcbiAgICAgICAgPGE+IENhcmVlcnM8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvaW52ZXN0b3JzXCI+XHJcbiAgICAgICAgPGE+IEludmVzdG9yczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9tZWRpYVwiPlxyXG4gICAgICAgIDxhPiBNZWRpYTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgPGE+IENvbnRhY3QgVXM8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuXHJcbiAgPHN0eWxlIGpzeD5cclxuICAgIHtgXHJcbiAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAubG9nbyBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhpZGV7XHJcbiAgICAgICAgZGlzcGxheTpub25lXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6MnB4O1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNDgsIDQ4LCA0OCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIGltZ3tcclxuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyBidXR0b24ge1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0OjM1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMzVweDpcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0OCwgNDgsIDQ4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVyIHVsIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNDgsIDQ4LCA0OCk7XHJcbiAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgfVxyXG5cclxuICAgICBoZWFkZXIgdWwgbGkge1xyXG4gICAgICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgcmdiKDgwLCA4MCwgODApO1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgfVxyXG4gIFxyXG4gICBoZWFkZXIgYTpob3ZlciB7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICB9XHJcbiAgIGhlYWRlciBsaTpob3ZlciB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICB9XHJcbiAgIGhlYWRlciBhIHtcclxuICAgICBjb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAwcHg7XHJcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZmF7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICB9XHJcblxyXG4gICBcclxuICAgaGVhZGVyIHVsLCBoZWFkZXIgc3BhbntcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOjEuOGVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjRlbTtcclxuICAgICAgfSBcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAubG9nbyBidXR0b257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICBcclxuICAgICAgfVxyXG4gICAgICAubG9nbyBsYWJlbHsgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgaGVhZGVyIHVsLCBoZWFkZXIgc3BhbntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gIDwvc3R5bGU+XHJcbjwvaGVhZGVyPlxyXG4pXHJcbn1cclxuXHJcbiBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\components\\\\Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.e8e2215607758b776909.hot-update.js.map