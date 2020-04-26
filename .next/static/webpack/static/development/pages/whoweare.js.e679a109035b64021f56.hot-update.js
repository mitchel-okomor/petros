webpackHotUpdate("static\\development\\pages\\whoweare.js",{

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
        className: "jsx-2519897309" + " " + "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "jsx-2519897309" + " " + "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 3
        }
      }, __jsx("img", {
        src: "/petro-logo.jpg",
        alt: "Logo",
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 5
        }
      }), __jsx("span", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 1
        }
      }, __jsx("i", {
        className: "jsx-2519897309" + " " + "".concat(this.state.iconClass),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 43
        }
      }), this.state.buttontext)), __jsx("ul", {
        className: "jsx-2519897309" + " " + (this.state.navClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 3
        }
      }, __jsx("li", {
        id: "home",
        className: "jsx-2519897309" + " " + "active",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, " Home"))), __jsx("li", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, " Who we are"))), __jsx("li", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, " Business and Services "))), __jsx("li", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, " Rigs"))), __jsx("li", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }, " A well of Innovation"))), __jsx("li", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, " Careers"))), __jsx("li", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, " Investors"))), __jsx("li", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }, " Media"))), __jsx("li", {
        className: "jsx-2519897309",
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
        className: "jsx-2519897309",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, " Contact Us")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2519897309",
        __self: this
      }, "header.jsx-2519897309{height:90px;width:100%;margin:auto;text-align:center;}.logo.jsx-2519897309{height:100%;z-index:1;margin:auto;text-align:center;}.logo.jsx-2519897309 img.jsx-2519897309{width:150px;height:80px;}.hide.jsx-2519897309{display:none;}@media only screen and (max-width:800px){header.jsx-2519897309{position:fixed;top:0;box-sizing:border-box;display:block;width:100%;height:45px;padding:2px;z-index:3;background-color:rgb(48,48,48);}.logo.jsx-2519897309{width:100%;}.logo.jsx-2519897309 img.jsx-2519897309{display:none;float:left;width:80px;height:30px;margin-left:20px;}.logo.jsx-2519897309 button.jsx-2519897309{float:right;height:35px;width:35px: color:white;font-size:20px;margin-right:3px;color:white;cursor:pointer;background-color:rgb(48,48,48);}header.jsx-2519897309 ul.jsx-2519897309{box-sizing:border-box;background-color:rgb(48,48,48);margin:auto;width:100%;height:auto;list-style:none;text-align:center;}header.jsx-2519897309 ul.jsx-2519897309 li.jsx-2519897309{border-top:0.1px solid rgb(80,80,80);display:block;width:100%;margin:auto;text-align:center;font-size:1.2em;}header.jsx-2519897309 a.jsx-2519897309:hover{color:white;}header.jsx-2519897309 li.jsx-2519897309:hover{background-color:red;border-radius:5px;}header.jsx-2519897309 a.jsx-2519897309{color:rgb(245,245,245);display:block;padding:5px 20px 5px 0px;-webkit-text-decoration:none;text-decoration:none;}.fa.jsx-2519897309{color:white;}header.jsx-2519897309 ul.jsx-2519897309,header.jsx-2519897309 span.jsx-2519897309{float:left;color:red;font-size:1.8em;font-weight:bold;}}@media only screen and (min-width:800px){.logo.jsx-2519897309 button.jsx-2519897309{display:none;}.logo.jsx-2519897309 label.jsx-2519897309{display:none;}header.jsx-2519897309 ul.jsx-2519897309,header.jsx-2519897309 span.jsx-2519897309{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdLLEFBR3FCLEFBTUEsQUFPQSxBQUtmLEFBR29CLEFBV0osQUFHQyxBQU9BLEFBV1MsQUFVZSxBQVM3QixBQUdTLEFBSUksQUFPYixBQUtELEFBUUssQUFJQSxBQUlELFdBMUVaLEFBMkRTLENBM0ZFLEFBTUQsQUFPRSxBQTZCQyxBQThCbEIsQUFjQSxDQXJFRyxBQWtCZSxBQWlFZixBQUlBLEFBR0EsRUF0RlMsTUFDaUIsQUFxRFYsQUFpQkMsQ0FyRkgsQUE4Q3dCLENBcER4QixBQThFRCxDQWpFYixBQXNCZSxBQVFDLFVBcENJLENBTkEsQUFtQ0wsRUEwQkEsQUFpQlMsQUFhTCxFQWpCdEIsSUFyRHFCLElBZUcsQ0FPRCxHQW1CUixDQXZEWixDQU5BLEFBbURhLENBd0NiLEdBdEVlLEtBeUNILEFBZ0JRLENBbkNFLENBUHBCLENBZ0JVLEdBOUJJLE1BeUNHLEVBVk4sSUE5QkUsQUFxQkMsUUFVQyxJQTlCSCxBQXFCQyxBQW1CRyxVQXZDb0IsRUE4Qm5CLEdBVGUsQ0FtQm5DLElBY0YsVUF2QkUsV0E5QkcsS0FxQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyIFBDXFx3b3Jrc3BhY2VcXGtjYVxccGFnZXNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbmNvbnN0cnVjdG9yKHByb3BzKXtcclxuICBzdXBlcihwcm9wcylcclxuICB0aGlzLnN0YXRlPXtcclxuICAgIG5hdkNsYXNzOiBcImhpZGVcIixcclxuICAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWJhcnNcIixcclxuICAgICAgYnV0dG9udGV4dDogXCJcIlxyXG4gIH07XHJcbn1cclxuXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG5hdkNsYXNzOiBcImhpZGVcIlxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNob3dOYXZCYXIgPSAoKSA9PntcclxuICAgIGlmKHRoaXMuc3RhdGUubmF2Q2xhc3M9PSBcImhpZGVcIilcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgbmF2Q2xhc3M6IFwic2hvd1wiLFxyXG4gICAgICAgIGljb25DbGFzczogXCJcIixcclxuICAgICAgICAgYnV0dG9udGV4dDogXCJYXCJcclxuICAgICBcclxuICAgIH0pXHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG5hdkNsYXNzOiBcImhpZGVcIixcclxuICAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWJhcnNcIixcclxuICAgICAgYnV0dG9udGV4dDogXCJcIlxyXG4gICAgICB9KSBcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwic2hvdyBuYXZiYXJcIik7XHJcbiAgfVxyXG5cclxuXHJcbnJlbmRlcigpe1xyXG5yZXR1cm4oXHJcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgIDxpbWcgc3JjPVwiL3BldHJvLWxvZ28uanBnXCIgYWx0PVwiTG9nb1wiPjwvaW1nPlxyXG48c3Bhbj5QZXRyb0dhcyBHcm91cDwvc3Bhbj5cclxuPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dOYXZCYXIoKX0+PGkgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmljb25DbGFzc31gfT48L2k+e3RoaXMuc3RhdGUuYnV0dG9udGV4dH1cclxuPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPHVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uYXZDbGFzc30+XHJcbiAgPGxpIGlkPVwiaG9tZVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPiBIb21lPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL3dob3dlYXJlXCI+XHJcbiAgICAgICAgPGE+IFdobyB3ZSBhcmU8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cclxuICAgICAgICA8YT4gQnVzaW5lc3MgYW5kIFNlcnZpY2VzIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9yaWdzXCI+XHJcbiAgICAgICAgPGE+IFJpZ3M8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvaW5ub3ZhdGlvbnNcIj5cclxuICAgICAgICA8YT4gQSB3ZWxsIG9mIElubm92YXRpb248L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvY2FyZWVyc1wiPlxyXG4gICAgICAgIDxhPiBDYXJlZXJzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL2ludmVzdG9yc1wiPlxyXG4gICAgICAgIDxhPiBJbnZlc3RvcnM8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvbWVkaWFcIj5cclxuICAgICAgICA8YT4gTWVkaWE8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgIDxhPiBDb250YWN0IFVzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcblxyXG4gIDxzdHlsZSBqc3g+XHJcbiAgICB7YFxyXG4gICAgICBoZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmxvZ28gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oaWRle1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgIGhlYWRlcntcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOjJweDtcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDQ4LCA0OCwgNDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nb3tcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyBpbWd7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28gYnV0dG9uIHtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIGhlaWdodDozNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDM1cHg6XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNDgsIDQ4LCA0OCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlYWRlciB1bCB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDQ4LCA0OCwgNDgpO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIH1cclxuXHJcbiAgICAgaGVhZGVyIHVsIGxpIHtcclxuICAgICAgIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkIHJnYig4MCwgODAsIDgwKTtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgIH1cclxuICBcclxuICAgaGVhZGVyIGE6aG92ZXIge1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgfVxyXG4gICBoZWFkZXIgbGk6aG92ZXIge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgfVxyXG4gICBoZWFkZXIgYSB7XHJcbiAgICAgY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMHB4O1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgfVxyXG4gICBcclxuICAgLmZhe1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgfVxyXG5cclxuICAgXHJcbiAgIGhlYWRlciB1bCwgaGVhZGVyIHNwYW57XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxLjhlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfSBcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAubG9nbyBidXR0b257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICBcclxuICAgICAgfVxyXG4gICAgICAubG9nbyBsYWJlbHsgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgaGVhZGVyIHVsLCBoZWFkZXIgc3BhbntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gIDwvc3R5bGU+XHJcbjwvaGVhZGVyPlxyXG4pXHJcbn1cclxuXHJcbiBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\components\\\\Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=whoweare.js.e679a109035b64021f56.hot-update.js.map