module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/components/Footer.js":
/*!************************************!*\
  !*** ./pages/components/Footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "footer",
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "address",
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "PetroGas Group Office ", __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 33
    }
  }), "Burnage, Levensulme M19, ", __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 35
    }
  }), "United Kingdom", __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 24
    }
  }), "+44 7451 278 898"), __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), __jsx("div", {
    id: "second-div",
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Po Box 971638, El Paso, Tx ", __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 38
    }
  }), " +14092876101"), __jsx("a", {
    href: "#",
    className: "jsx-1427591301" + " " + "fa fa-linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "last-div",
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Email: info@petrogasservices.com", __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 41
    }
  }), "\xA9 PetroGas 2020", __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 65
    }
  }), __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), "Terms and Conditions", __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }), "Privacy Statement", __jsx("br", {
    className: "jsx-1427591301",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 26
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1427591301",
    __self: undefined
  }, "#footer.jsx-1427591301{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:200px;padding-left:80px;padding-right:80px;width:100%;background-color:rgb(48,48,48);color:white;text-align:center;margin:auto;border-top:5px solid red;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}#footer.jsx-1427591301 div.jsx-1427591301{margin:20px;}#address.jsx-1427591301{float:left;}#address.jsx-1427591301 a.jsx-1427591301{display:inline-block;width:200px;height:30px;font-size:1.1em;text-align:center;margin:auto;background-color:white;color:black;-webkit-text-decoration:none;text-decoration:none;border-radius:3px;padding-top:3px;}#last-div.jsx-1427591301{float:right;}#search-locations.jsx-1427591301{font-size:1.1em;width:auto;}.fa.jsx-1427591301{padding:5px;font-size:2em;width:0.8em;height:0.8em;text-align:center;-webkit-text-decoration:none;text-decoration:none;margin:auto;color:grey;background-color:white;}.fa.jsx-1427591301:hover{opacity:0.7;}.fa-linkedin.jsx-1427591301{background-color:white;color:grey;}div.jsx-1427591301{text-align:left;}@media only screen and (max-width:800px){#footer.jsx-1427591301{display:relative;background-color:rgb(48,48,48);box-sizing:border-box;height:auto;width:100%;margin:auto;text-align:center;padding:0;}.address.jsx-1427591301{display:block;width:100%;}#second-div.jsx-1427591301{display:block;width:100%;}#last-div.jsx-1427591301{display:block;margin:0;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NTLEFBSWtDLEFBaUJQLEFBSUgsQUFHUyxBQWNSLEFBSUksQUFPSixBQWNBLEFBR1csQUFLUCxBQUtLLEFBVVIsQUFLQSxBQUlDLFdBekVoQixDQUpBLEFBcUJBLEFBV2dCLEFBY2hCLEVBdUJhLEFBS0EsQUFJRixFQXJEQyxBQTZCWixDQUt1QyxJQXBEekIsQ0F4QkMsQ0FrRUYsQUE4QkYsRUFSWCxBQUlBLENBMUNjLENBTmQsTUFuQkssQUF3RUwsQ0E5QkEsSUFoQmMsT0F6QkosR0FtRGUsR0F6QkwsVUF6QlQsUUEwQlksQ0F5QkosU0FsRGQsR0FtRGEsU0FsRE8sRUFtRE4sR0EvRUYsU0FnRlMsU0FuRFosS0F3QkEsSUE0QkcsR0FuRE0sS0F3QlYsRUE0QlQsU0EzQnFCLFdBdEROLFlBdURuQixLQXREb0IsTUE2QkEsWUE1QkMsTUE2QkosYUE1QkwsR0E2QlosUUE1Qm1DLCtCQUNyQixZQUNNLGtCQUNOLFlBQ2EseUJBQ00sbUhBQ2pDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3Rlcj5cclxuICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJhZGRyZXNzXCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBQZXRyb0dhcyBHcm91cCBPZmZpY2UgPGJyPjwvYnI+XHJcbiAgICAgICAgIEJ1cm5hZ2UsIExldmVuc3VsbWUgTTE5LCA8YnI+PC9icj5cclxuICAgICAgICAgVW5pdGVkIEtpbmdkb208YnI+PC9icj5cclxuICAgICAgICAgICs0NCA3NDUxIDI3OCA4OThcclxuICAgICAgICA8L3A+PGJyPjwvYnI+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwic2Vjb25kLWRpdlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgUG8gQm94IDk3MTYzOCwgRWwgUGFzbywgVHggPGJyPjwvYnI+ICsxNDA5Mjg3NjEwMVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCI+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImxhc3QtZGl2XCI+XHJcbiAgICAgICAgRW1haWw6IGluZm9AcGV0cm9nYXNzZXJ2aWNlcy5jb208YnI+PC9icj7CqSBQZXRyb0dhcyAyMDIwPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnM8YnI+PC9icj5cclxuICAgICAgICBQcml2YWN5IFN0YXRlbWVudDxicj48L2JyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICAgICBcclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICNmb290ZXIge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgICAjZm9vdGVyIGRpdntcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2FkZHJlc3Mge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNhZGRyZXNzIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjNweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjbGFzdC1kaXYge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3NlYXJjaC1sb2NhdGlvbnN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgIHdpZHRoOmF1dG87XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMC44ZW07XHJcbiAgICAgICAgICAgIGhlaWdodDowLjhlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHsvKipzb2NpYWwgbWVkaWEgbGlua3MgKi99XHJcblxyXG4gICAgICAgICAgLmZhOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZhLWxpbmtlZGluIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgICAgICAgICNmb290ZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLmFkZHJlc3N7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNzZWNvbmQtZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNsYXN0LWRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsvKiogRW5kIG9mIG1lZGlhIHF1ZXJ5ICovfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\components\\\\Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/components/Head.js":
/*!**********************************!*\
  !*** ./pages/components/Head.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\components\\Head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Head = ({}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, "Petros Group"), __jsx("meta", {
  name: "description",
  content: "Petros Group is a leading company which deals with wide range of products, including petroleum, oil, gas and construction engineering.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  href: "favicon.jpg",
  sizes: "16x16",
  type: "image/png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Zilla+Slab:400,700",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}), __jsx("script", {
  src: "https://kit.fontawesome.com/a076d05399.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Header extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "showNavBar", () => {
      if (this.state.navClass == "hide") this.setState({
        navClass: "show",
        iconClass: "",
        buttontext: "X"
      });else {
        this.setState({
          navClass: "hide",
          iconClass: "fa fa-bars",
          buttontext: ""
        });
      }
      console.log("show navbar");
    });

    this.state = {
      navClass: "hide",
      iconClass: "fa fa-bars",
      buttontext: ""
    };
  }

  componentDidMount() {
    this.setState({
      navClass: "hide"
    });
  }

  render() {
    return __jsx("header", {
      className: "jsx-1692701004" + " " + "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "jsx-1692701004" + " " + "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 3
      }
    }, __jsx("img", {
      src: "/petro-logo.jpg",
      alt: "Logo",
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }
    }), __jsx("span", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 1
      }
    }, "PetroGas"), __jsx("button", {
      onClick: () => this.showNavBar(),
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 1
      }
    }, __jsx("i", {
      className: "jsx-1692701004" + " " + `${this.state.iconClass}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 43
      }
    }), this.state.buttontext)), __jsx("ul", {
      className: "jsx-1692701004" + " " + (this.state.navClass || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 3
      }
    }, __jsx("li", {
      id: "home",
      className: "jsx-1692701004" + " " + "active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 3
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, " Home"))), __jsx("li", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/whoweare",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, " Who we are"))), __jsx("li", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/services",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, " Business and Services "))), __jsx("li", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/rigs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, " Rigs"))), __jsx("li", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/innovations",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, " A well of Innovation"))), __jsx("li", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/careers",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, " Careers"))), __jsx("li", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/investors",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, " Investors"))), __jsx("li", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, " Media"))), __jsx("li", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-1692701004",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, " Contact Us")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1692701004",
      __self: this
    }, "header.jsx-1692701004{height:90px;width:100%;margin:auto;text-align:center;}.logo.jsx-1692701004{height:100%;z-index:1;margin:auto;text-align:center;}.logo.jsx-1692701004 img.jsx-1692701004{width:150px;height:80px;}.hide.jsx-1692701004{display:none;}@media only screen and (max-width:800px){header.jsx-1692701004{position:fixed;top:0;box-sizing:border-box;display:block;width:100%;height:45px;padding:2px;z-index:3;background-color:rgb(48,48,48);}.logo.jsx-1692701004{width:100%;}.logo.jsx-1692701004 img.jsx-1692701004{display:none;float:left;width:80px;height:30px;margin-left:20px;}.logo.jsx-1692701004 button.jsx-1692701004{float:right;height:35px;width:35px: color:white;font-size:20px;margin-right:3px;color:white;cursor:pointer;background-color:rgb(48,48,48);}header.jsx-1692701004 ul.jsx-1692701004{box-sizing:border-box;background-color:rgb(48,48,48);margin:auto;width:100%;height:auto;list-style:none;text-align:center;}header.jsx-1692701004 ul.jsx-1692701004 li.jsx-1692701004{border-top:0.1px solid rgb(80,80,80);display:block;width:100%;margin:auto;text-align:center;font-size:1.2em;}header.jsx-1692701004 a.jsx-1692701004:hover{color:white;}header.jsx-1692701004 li.jsx-1692701004:hover{background-color:red;border-radius:5px;}header.jsx-1692701004 a.jsx-1692701004{color:rgb(245,245,245);display:block;padding:5px 20px 5px 0px;-webkit-text-decoration:none;text-decoration:none;}.fa.jsx-1692701004{color:white;}header.jsx-1692701004 ul.jsx-1692701004,header.jsx-1692701004 span.jsx-1692701004{font-family:monospace;float:left;color:red;font-size:1.8em;font-weight:bold;margin-left:.8em;margin-top:.4em;}}@media only screen and (min-width:800px){.logo.jsx-1692701004 button.jsx-1692701004{display:none;}.logo.jsx-1692701004 label.jsx-1692701004{display:none;}header.jsx-1692701004 ul.jsx-1692701004,header.jsx-1692701004 span.jsx-1692701004{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdLLEFBR3FCLEFBTUEsQUFPQSxBQUtmLEFBR29CLEFBV0osQUFHQyxBQU9BLEFBV1MsQUFVZSxBQVM3QixBQUdTLEFBSUksQUFPYixBQUtVLEFBV04sQUFJQSxBQUlELFdBN0VaLENBaENXLEFBTUQsQUFPRSxBQTZCQyxBQThCbEIsQUFjQSxDQXJFRyxBQWtCZSxBQW9FZixBQUlBLEFBR0EsRUF6RlMsTUFDaUIsQUFxRFYsQ0FwRUYsQUE4Q3dCLEFBc0M1QixDQTFGSSxBQThFRCxDQWpFYixBQXNCZSxBQVFDLFNBZ0RMLENBcEZTLENBTkEsQUFtQ0wsRUEwQkEsQUFpQlMsRUFKM0IsSUFyRHFCLEFBc0VELElBdkRJLENBT0QsR0FtQlIsQ0F2RFosQ0FOQSxBQW1EYSxJQTlCRSxFQXNFSSxHQTdCUCxBQWdCUSxDQW5DRSxDQVBwQixDQWdCVSxHQTlCSSxNQXlDRyxFQVZOLEFBdUNNLElBckVKLEFBcUJDLFFBVUMsSUE5QkgsQUFxQkMsQUFtQkcsQ0E2QkEsU0FwRW9CLEVBOEJuQixHQVRlLENBbUJuQyxDQTZCQyxHQWZILFVBdkJFLFdBOUJHLEtBcUJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgc3VwZXIocHJvcHMpXHJcbiAgdGhpcy5zdGF0ZT17XHJcbiAgICBuYXZDbGFzczogXCJoaWRlXCIsXHJcbiAgICAgIGljb25DbGFzczogXCJmYSBmYS1iYXJzXCIsXHJcbiAgICAgIGJ1dHRvbnRleHQ6IFwiXCJcclxuICB9O1xyXG59XHJcblxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuYXZDbGFzczogXCJoaWRlXCJcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzaG93TmF2QmFyID0gKCkgPT57XHJcbiAgICBpZih0aGlzLnN0YXRlLm5hdkNsYXNzPT0gXCJoaWRlXCIpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgIG5hdkNsYXNzOiBcInNob3dcIixcclxuICAgICAgICBpY29uQ2xhc3M6IFwiXCIsXHJcbiAgICAgICAgIGJ1dHRvbnRleHQ6IFwiWFwiXHJcbiAgICAgXHJcbiAgICB9KVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBuYXZDbGFzczogXCJoaWRlXCIsXHJcbiAgICAgIGljb25DbGFzczogXCJmYSBmYS1iYXJzXCIsXHJcbiAgICAgIGJ1dHRvbnRleHQ6IFwiXCJcclxuICAgICAgfSkgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcInNob3cgbmF2YmFyXCIpO1xyXG4gIH1cclxuXHJcblxyXG5yZW5kZXIoKXtcclxucmV0dXJuKFxyXG4gIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICA8aW1nIHNyYz1cIi9wZXRyby1sb2dvLmpwZ1wiIGFsdD1cIkxvZ29cIj48L2ltZz5cclxuPHNwYW4+UGV0cm9HYXM8L3NwYW4+XHJcbjxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zaG93TmF2QmFyKCl9PjxpIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5pY29uQ2xhc3N9YH0+PC9pPnt0aGlzLnN0YXRlLmJ1dHRvbnRleHR9XHJcbjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDx1bCBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmF2Q2xhc3N9PlxyXG4gIDxsaSBpZD1cImhvbWVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT4gSG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi93aG93ZWFyZVwiPlxyXG4gICAgICAgIDxhPiBXaG8gd2UgYXJlPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XHJcbiAgICAgICAgPGE+IEJ1c2luZXNzIGFuZCBTZXJ2aWNlcyA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcmlnc1wiPlxyXG4gICAgICAgIDxhPiBSaWdzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL2lubm92YXRpb25zXCI+XHJcbiAgICAgICAgPGE+IEEgd2VsbCBvZiBJbm5vdmF0aW9uPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL2NhcmVlcnNcIj5cclxuICAgICAgICA8YT4gQ2FyZWVyczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9pbnZlc3RvcnNcIj5cclxuICAgICAgICA8YT4gSW52ZXN0b3JzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL21lZGlhXCI+XHJcbiAgICAgICAgPGE+IE1lZGlhPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICA8YT4gQ29udGFjdCBVczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG5cclxuICA8c3R5bGUganN4PlxyXG4gICAge2BcclxuICAgICAgaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5sb2dvIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGlkZXtcclxuICAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgcGFkZGluZzoycHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0OCwgNDgsIDQ4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIGJ1dHRvbiB7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICBoZWlnaHQ6MzVweDtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4OlxyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDQ4LCA0OCwgNDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXIgdWwge1xyXG4gICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0OCwgNDgsIDQ4KTtcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICB9XHJcblxyXG4gICAgIGhlYWRlciB1bCBsaSB7XHJcbiAgICAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCByZ2IoODAsIDgwLCA4MCk7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICB9XHJcbiAgXHJcbiAgIGhlYWRlciBhOmhvdmVyIHtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuICAgaGVhZGVyIGxpOmhvdmVyIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgIH1cclxuICAgaGVhZGVyIGEge1xyXG4gICAgIGNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDBweDtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5mYXtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuXHJcbiAgIFxyXG4gICBoZWFkZXIgdWwsIGhlYWRlciBzcGFue1xyXG4gICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxLjhlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLjhlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNGVtO1xyXG4gICAgICB9IFxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpe1xyXG4gICAgICAgIC5sb2dvIGJ1dHRvbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvIGxhYmVseyBcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBoZWFkZXIgdWwsIGhlYWRlciBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgIGB9XHJcbiAgPC9zdHlsZT5cclxuPC9oZWFkZXI+XHJcbilcclxufVxyXG5cclxuIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\components\\\\Header.js */"));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/components/MyLayout.js":
/*!**************************************!*\
  !*** ./pages/components/MyLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./pages/components/Header.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./pages/components/Nav.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./pages/components/Footer.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Head */ "./pages/components/Head.js");
var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\components\\MyLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Layout = props => __jsx("div", {
  id: "layout",
  className: "jsx-1247969163",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, __jsx(_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1247969163",
  __self: undefined
}, "*{margin:0;font-family:Arial,Helvetica,sans-serif;}p{line-height:1.5em;}a{-webkit-text-decoration:none;text-decoration:none;list-style:none;}li{list-style:none;}#layout{background-color:white;color:black;border:'1px solid #DDD';box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxNeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIsQUFHVyxBQUtVLEFBSUUsQUFJTCxBQUlhLFNBaEJhLE9BYTNDLEVBUEEsS0FXbUIsWUFDTyxhQWpCMUIsRUFRaUIsU0FVSyxPQVR0QixlQVVLIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxNeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJy4vSGVhZCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICAgICAgPGRpdiBpZD1cImxheW91dFwiPlxyXG4gICAgICAgIDxIZWFkIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPiBcclxuICAgICAgICA8TmF2IC8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8Rm9vdGVyIC8+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4qe1xyXG4gIG1hcmdpbjowO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5we1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuXHJcbn1cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcbn1cclxubGl7XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG59XHJcblxyXG4gICAgICNsYXlvdXR7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCc7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgfVxyXG4gICAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+IFxyXG4gIFxyXG4gICBcclxuICAgICk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\components\\\\MyLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/components/Nav.js":
/*!*********************************!*\
  !*** ./pages/components/Nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\components\\Nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = () => __jsx("nav", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("ul", {
  className: "jsx-2348002253" + " " + "list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("li", {
  id: "home",
  className: "jsx-2348002253" + " " + "active",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 11
  }
}, " Home"))), __jsx("li", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/whoweare",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
  }
}, " Who we are"))), __jsx("li", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/services",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
}, " Business and Services "))), __jsx("li", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/rigs",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 11
  }
}, " Rigs"))), __jsx("li", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/innovations",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 11
  }
}, " A well of Innovation"))), __jsx("li", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/careers",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 11
  }
}, " Careers"))), __jsx("li", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/investors",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 11
  }
}, " Investors"))), __jsx("li", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/media",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 11
  }
}, " Media"))), __jsx("li", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/contact",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }
}, __jsx("a", {
  className: "jsx-2348002253",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 11
  }
}, " Contact Us")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2348002253",
  __self: undefined
}, "nav.jsx-2348002253{font-family:Monospace,Arial;position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:rgb(48,48,48);color:red;height:40px;z-index:2;}@media only screen and (max-width:800px){nav.jsx-2348002253{font-family:Monospace,Arial;display:none;width:100%;margin:auto;text-align:center;background-color:rgb(48,48,48);height:auto;z-index:2;padding-top:40px;}nav.jsx-2348002253 ul.jsx-2348002253{margin:auto;width:100%;height:auto;list-style:none;text-align:center;}nav.jsx-2348002253 ul.jsx-2348002253 li.jsx-2348002253{border-top:0.1px solid rgb(80,80,80);display:block;width:100%;text-align:center;font-size:1.2em;}nav.jsx-2348002253 ul.jsx-2348002253 li.jsx-2348002253 a.jsx-2348002253{color:rgb(245,245,245);display:block;-webkit-text-decoration:none;text-decoration:none;width:100%;}#home.jsx-2348002253{font-size:1.2em;font-weight:bold;color:red;}nav.jsx-2348002253 a.jsx-2348002253:hover{color:red;color:white;}nav.jsx-2348002253 li.jsx-2348002253:hover{background-color:red;color:white;border-radius:5px;}nav.jsx-2348002253 a.jsx-2348002253{color:rgb(245,245,245);display:block;padding:5px 0px 5px 0px;-webkit-text-decoration:none;text-decoration:none;}}nav.jsx-2348002253 a.jsx-2348002253{color:rgb(245,245,245);display:block;padding:8px 0px 10px 0px;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-2348002253 a.jsx-2348002253:hover{color:red;color:white;}nav.jsx-2348002253 li.jsx-2348002253:hover{background-color:red;color:white;border-radius:5px;}nav.jsx-2348002253 a.jsx-2348002253:active{color:red;}nav.jsx-2348002253 li.jsx-2348002253:active{background-color:red;}nav.jsx-2348002253 ul.jsx-2348002253{padding-left:0;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0em 2em 0em 2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;font-size:1.0em;list-style:none;text-align:center;}nav.jsx-2348002253 ul.jsx-2348002253 li.jsx-2348002253{padding-left:0;min-width:5em;text-align:center;}#home.jsx-2348002253{font-size:1.2em;font-weight:bold;margin-right:0em 10em 0em 0em;color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RnQixBQUdzQyxBQVlBLEFBYWYsQUFRMkIsQUFRaEIsQUFNVixBQUtMLEFBSVcsQUFLSSxBQVNBLEFBT2YsQUFJVyxBQU1YLEFBSVcsQUFHUCxBQVdBLEFBS0MsVUF6REosQUF5QkEsQUFVYixFQTlEZSxHQXFFaUIsQUFXaEIsQ0ExREcsQUErREEsS0F0RE4sQUF5QkEsQUFVYixDQXRDQSxBQXlCQSxDQXBEZ0IsQUFlQSxBQW9CQSxBQVNBLEtBdEVJLEFBWUosQ0E4RkksSUExRFQsQUFTUSxBQXlCQSxBQTZCYSxFQXBGWixFQU1GLEFBU0ssQUFvQkcsQUFTQyxJQTFEWixFQW9DZixHQWhEYSxDQTBHYixJQS9Fc0IsQUFNUCxBQXdCZixBQXlCQSxDQXJFZSxLQVpBLElBNkRRLENBNUJELEFBcUNDLENBd0NaLENBakdXLEtBY3BCLElBb0ZGLE9BN0VxQixFQXBCZ0IsS0EyQnpCLFNBTlYsRUFPRixhQW9CQSxDQVNBLENBeERnQixZQUNGLEtBNkVXLENBNUZVLElBZ0JkLGlCQUVuQixDQTJFYSxTQTVGSCxVQUNFLFlBQ0YsVUFFWixpQ0F5RmlCLHlEQUNKLFdBQ0ssZ0JBQ0EsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiAoXHJcbiAgXHJcbiAgPG5hdj5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICA8bGkgaWQ9XCJob21lXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPiBIb21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd2hvd2VhcmVcIj5cclxuICAgICAgICAgIDxhPiBXaG8gd2UgYXJlPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cclxuICAgICAgICAgIDxhPiBCdXNpbmVzcyBhbmQgU2VydmljZXMgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmlnc1wiPlxyXG4gICAgICAgICAgPGE+IFJpZ3M8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9pbm5vdmF0aW9uc1wiPlxyXG4gICAgICAgICAgPGE+IEEgd2VsbCBvZiBJbm5vdmF0aW9uPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2FyZWVyc1wiPlxyXG4gICAgICAgICAgPGE+IENhcmVlcnM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9pbnZlc3RvcnNcIj5cclxuICAgICAgICAgIDxhPiBJbnZlc3RvcnM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9tZWRpYVwiPlxyXG4gICAgICAgICAgPGE+IE1lZGlhPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgPGE+IENvbnRhY3QgVXM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgbmF2IHtcclxuICAgICAgICBmb250LWZhbWlseTogTW9ub3NwYWNlLCBBcmlhbDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgbmF2IHtcclxuICAgICAgICBmb250LWZhbWlseTogTW9ub3NwYWNlLCBBcmlhbDtcclxuICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hdiB1bCB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYgdWwgbGkge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgcmdiKDgwLCA4MCwgODApO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IHVsIGxpIGEge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgI2hvbWV7XHJcbiAgICAgICAgZm9udC1zaXplOjEuMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgfVxyXG4gICAgICBuYXYgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBuYXYgbGk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgfVxyXG4gICAgICBuYXYgYSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgey8qKiBFbmQgb2YgbWVkaWEgcXVlcnkqL31cclxuXHJcbiAgICAgIG5hdiBhIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggMTBweCAwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuYXYgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBuYXYgbGk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmF2IGE6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuYXYgbGk6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgICAgbmF2IHVsIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luOiAwZW0gMmVtIDBlbSAyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBuYXYgdWwgbGkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgICAgIG1pbi13aWR0aDogNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAjaG9tZXtcclxuICAgICAgICBmb250LXNpemU6MS4yZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwZW0gMTBlbSAwZW0gMGVtO1xyXG4gICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvbmF2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\components\\\\Nav.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MyLayout */ "./pages/components/MyLayout.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Head */ "./pages/components/Head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Index() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1102681445" + " " + "intro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "A well of innovation"), __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Discover how our technology and innovations are transforming the Oil and Gas and Construction operations throughout the industry."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/innovations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-1102681445" + " " + "read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Find out more"))), __jsx("div", {
    className: "jsx-1102681445" + " " + "main-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "With over 130 years of experience, PetroGas Group is one of the world\u2019s leading drilling and engineering contractors working onshore and offshore with a focus on safety, quality and performance."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/whoweare",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-1102681445" + " " + "main-read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "The PetroGas Way"))), __jsx("div", {
    className: "jsx-1102681445" + " " + "main-work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 36
    }
  }, __jsx("img", {
    src: "/newoffshore.png",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), __jsx("h3", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Offshore"), __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Platform drilling operations & maintenance"), __jsx("img", {
    id: "icon-img",
    src: "",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 36
    }
  }, __jsx("img", {
    src: "/land.png",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), __jsx("h3", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Land"), __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Platform drilling operations & maintenance"), __jsx("img", {
    id: "icon-img",
    src: "",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 36
    }
  }, __jsx("img", {
    src: "/engineering.png",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), __jsx("h3", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Engineering"), __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Platform drilling operations & maintenance"), __jsx("img", {
    id: "icon-img",
    src: "",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 36
    }
  }, __jsx("img", {
    src: "/manufacturing.png",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }), __jsx("h3", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Manufacturing"), __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Platform drilling operations & maintenance"), __jsx("img", {
    id: "icon-img",
    src: "",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  })))))), __jsx("div", {
    id: "news",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Latest News"), __jsx("ul", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/petro-logo.jpg",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "CNRI awards PetroGas Group a multi-million pound drilling contract for three UK North Sea platforms", __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, "7 April 2018")))), __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), " ", __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 20
    }
  }), __jsx("li", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/petro-logo.jpg",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, "PetroGas Group secures $460m of land drilling contracts in the Middle East, Africa and Europe", __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, "25 October 2018")))), __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), " ", __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 20
    }
  }), __jsx("li", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/petro-logo.jpg",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "PetroGas Group wins multi-million euro contract for seven 320t cluster slider drilling rigs", __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, "2 December 2019")))), __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), " ", __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 20
    }
  }), __jsx("li", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/petro-logo.jpg",
    alt: "",
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "PetroGas Group wins multi-million euro contract for seven 320t cluster slider drilling rigs", __jsx("p", {
    className: "jsx-1102681445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }, "2 December 2019"))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-1102681445" + " " + "viel-all-news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "View all news")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1102681445",
    __self: this
  }, "main.jsx-1102681445{background-image:url(\"Homepage.jpg\");background-repeat:no-repeat;background-size:100% 30em;min-height:100vh;width:100%;}.intro.jsx-1102681445{padding-top:100px;text-align:center;margin:auto;min-height:400px;}.intro.jsx-1102681445 p.jsx-1102681445{max-width:20em;margin:auto;text-align:center;}.intro.jsx-1102681445 a.jsx-1102681445{display:inline-block;background-color:red;color:white;border-radius:4px;font-size:17px;width:150px;height:30px;-webkit-text-decoration:none;text-decoration:none;padding-top:10px;}.intro.jsx-1102681445 a.jsx-1102681445:visited{background-color:red;color:white;border-radius:3px;font-size:17px;width:20px;-webkit-text-decoration:none;text-decoration:none;}.main-text.jsx-1102681445{padding-top:100px;margin:auto;text-align:center;min-height:250px;}.main-text.jsx-1102681445 p.jsx-1102681445{text-align:center;color:black;padding-left:7em;padding-right:7em;}.main-work.jsx-1102681445{background-color:rgb(96,96,96);min-height:400px;width:100%;text-align:center;margin:auto;}.main-work.jsx-1102681445 ul.jsx-1102681445{padding-top:3em;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:70%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:auto;text-align:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:15px;}.main-work.jsx-1102681445 ul.jsx-1102681445 li.jsx-1102681445{list-style:none;margin:20px;max-width:12em;}.main-work.jsx-1102681445 ul.jsx-1102681445 li.jsx-1102681445 img.jsx-1102681445{width:120px;height:120px;}.main-work.jsx-1102681445 ul.jsx-1102681445 li.jsx-1102681445 p.jsx-1102681445{font-size:15px;}.main-work.jsx-1102681445 ul.jsx-1102681445 li.jsx-1102681445 a.jsx-1102681445{width:100%;height:100%;background:transparent;margin:0;padding:0;}#icon-img.jsx-1102681445{width:150px;height:30px;}a.jsx-1102681445{display:inline-block;background-color:red;color:white;border-radius:4px;font-size:17px;width:200px;height:30px;-webkit-text-decoration:none;text-decoration:none;padding-top:10px;margin-top:30px;}main.jsx-1102681445 h1.jsx-1102681445{padding:20px;color:white;font-size:4em;}main.jsx-1102681445 p.jsx-1102681445{padding-bottom:20px;color:white;font-size:1em;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-size:20px;}#news.jsx-1102681445{box-sizing:border-box;margin:auto;text-align:center;min-height:400px;width:100%;padding:1em;}#news.jsx-1102681445 ul.jsx-1102681445{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:0;}#news.jsx-1102681445 li.jsx-1102681445{width:25%;background-color:blue;}#news.jsx-1102681445 ul.jsx-1102681445 li.jsx-1102681445 img.jsx-1102681445{padding-bottom:0.8em;width:8em;height:4em;}#news.jsx-1102681445 ul.jsx-1102681445 li.jsx-1102681445 a.jsx-1102681445{margin:0;padding:0;width:18em;background-color:white;color:black;}#news.jsx-1102681445 ul.jsx-1102681445 li.jsx-1102681445 a.jsx-1102681445:hover{-webkit-text-decoration:underline;text-decoration:underline;}#news.jsx-1102681445 h2.jsx-1102681445{margin:30px;padding:0;font-size:2em;}#news.jsx-1102681445 li.jsx-1102681445{margin-bottom:22px;background-color:white;color:black;}#news.jsx-1102681445 p.jsx-1102681445{color:black;}@media only screen and (max-width:800px){main.jsx-1102681445{background-size:100% 20em;min-height:60px;width:100%;}.intro.jsx-1102681445{padding-top:30px;text-align:center;margin:auto;min-height:150px;}.intro.jsx-1102681445 p.jsx-1102681445{max-width:20em;margin:auto;text-align:center;font-size:14px;}.intro.jsx-1102681445 h1.jsx-1102681445{font-size:30px;}.main-text.jsx-1102681445{padding-top:50px;padding-bottom:20px;margin:auto;text-align:center;min-height:250px;}.main-text.jsx-1102681445 p.jsx-1102681445{text-align:center;color:black;padding:0px 10px 0px 10px;}.main-work.jsx-1102681445{display:block;background-color:rgb(96,96,96);min-height:400px;width:100%;text-align:center;margin:auto;}.main-work.jsx-1102681445 ul.jsx-1102681445{text-align:center;margin:auto;}.main-work.jsx-1102681445 li.jsx-1102681445{padding-left:5em;padding-right:5em;margin:auto;text-align:center;display:block;}#news.jsx-1102681445{box-sizing:border-box;margin:auto;text-align:center;min-height:400px;padding-bottom:20px;}#news.jsx-1102681445 ul.jsx-1102681445{padding-left:0;margin:auto;text-align:center;display:block;}#news.jsx-1102681445 ul.jsx-1102681445 li.jsx-1102681445{padding-left:0;width:100%;margin:auto;text-align:center;display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSVMsQUFHd0MsQUFPakIsQUFPTCxBQU1PLEFBZUEsQUFTRixBQU9MLEFBT2dCLEFBUWYsQUFXQSxBQU1QLEFBSUcsQUFHRixBQU9ELEFBSVksQUFjUixBQU1TLEFBVUEsQUFRUixBQVFGLEFBS1UsQUFLWCxBQU9lLEFBR2QsQUFLUyxBQUtSLEFBSWEsQUFNUCxBQU9KLEFBTUEsQUFHSSxBQVFKLEFBTUYsQUFVRyxBQU9BLEFBU00sQUFPUixBQU1BLFNBbEdILENBVlksQ0F6RFosQ0FQRCxBQWNELEFBc0VDLEFBVVYsQ0E5RGEsQ0FzR2tCLENBM01uQixBQXlFZCxBQTJHYyxBQU1kLEFBa0RhLEFBTUQsQ0E5TEssQUFXTixDQThHUyxBQWdCSSxBQStCTCxDQW5PQyxBQXFDTCxBQU9GLEFBZ0tBLEFBZ0JGLENBckVHLEFBY2EsQ0FuRFosQ0FyR1MsQUFlUixBQWtFUSxBQW1EWixDQXJCQyxBQXFDQyxBQTJFRCxDQXhKWSxDQU96QixDQWRBLEFBZ0NpQixDQWlFRCxBQTRFSCxDQWxQTSxBQW9MQSxBQXdEQSxDQTdLTCxFQWpDTSxBQU9ELEFBMkdRLEFBcURDLEFBa0I1QixDQTVLbUIsQUFTTCxBQXNGQSxDQS9CSSxBQTBCaEIsQ0FoSG9CLENBZ0dILEFBZ0hBLENBeERMLEFBK0NELENBbk9DLEFBaUtkLENBeks4QixBQTRNZixDQXNESSxDQTdJakIsR0FoR2MsQUFpRkEsQUFvRGYsQUFtQmUsQUFTTixDQXZHVixFQS9EQSxBQW9MaUIsQUFzQkUsQUFrQ0gsQ0FoS04sQUErQmEsQ0F0RUgsQUF3SUMsQUErQ0YsQ0FuT0UsQUFxQ0gsQUFhTCxDQWtKTyxFQXhLRCxDQWdHRSxBQWdIQSxDQXJGTCxBQXNCTCxDQWhLVyxBQWlGQSxBQXVFcEIsQ0FqRlMsQ0F3SFgsQUE4Q2dCLEdBdk1HLEFBaU1uQixDQXpGRSxBQWlDRixFQXNCYSxFQTVCWCxDQTlMMEIsQUFVMUIsQUFxQ0YsQUFNQSxBQXdDQSxBQW1FRSxBQTRFYyxDQXZNRCxDQXdLRyxFQXhFRixBQWdIVSxDQWMxQixFQTdPbUIsQUFpRkEsQ0FvSEEsQ0FqRkEsR0FwR00sQUFzQlgsRUFrTGQsQ0F4R2tCLElBeUVsQixHQXhMZ0IsQUFpRkEsRUExQ2hCLEFBd0xBLEVBclBpQixBQTJOSCxDQXJGZCxPQS9HZSxBQWlGQSxJQXFIZixFQTNKYSxHQWpFSCxHQXVCZSxBQWlGQSxJQXRDUSxJQWxFdEIsUUFxQ1QsSUFvR2dDLFFBaEJoQixlQUNoQixPQWxHZ0IsQUFpRkEsaUJBOUVoQixBQStFYyxnQkFFaEIsb0NBekNlLFlBQ00sSUFzRWIsU0FDQyxLQXRFUSxLQXdFZixvREF2RVksZUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXFVzZXIgUENcXHdvcmtzcGFjZVxca2NhXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZCAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvXCI+XHJcbiAgICAgICAgICA8aDE+QSB3ZWxsIG9mIGlubm92YXRpb248L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIERpc2NvdmVyIGhvdyBvdXIgdGVjaG5vbG9neSBhbmQgaW5ub3ZhdGlvbnMgYXJlIHRyYW5zZm9ybWluZyB0aGUgT2lsXHJcbiAgICAgICAgICAgIGFuZCBHYXMgYW5kIENvbnN0cnVjdGlvbiBvcGVyYXRpb25zIHRocm91Z2hvdXQgdGhlIGluZHVzdHJ5LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9pbm5vdmF0aW9uc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWFkLW1vcmVcIj5GaW5kIG91dCBtb3JlPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGV4dFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFdpdGggb3ZlciAxMzAgeWVhcnMgb2YgZXhwZXJpZW5jZSwgUGV0cm9HYXMgR3JvdXBcclxuICAgICAgICAgICBpcyBvbmUgb2YgdGhlIHdvcmxk4oCZcyBsZWFkaW5nIGRyaWxsaW5nIGFuZCBlbmdpbmVlcmluZyBjb250cmFjdG9yc1xyXG4gICAgICAgICAgICB3b3JraW5nIG9uc2hvcmUgYW5kIG9mZnNob3JlIHdpdGggYSBmb2N1cyBvbiBzYWZldHksIHF1YWxpdHkgYW5kXHJcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi93aG93ZWFyZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYWluLXJlYWQtbW9yZVwiPlRoZSBQZXRyb0dhcyBXYXk8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi13b3JrXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPjxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL25ld29mZnNob3JlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPGgzPk9mZnNob3JlPC9oMz5cclxuICAgICAgICAgICAgICA8cD5QbGF0Zm9ybSBkcmlsbGluZyBvcGVyYXRpb25zICYgbWFpbnRlbmFuY2U8L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBpZD1cImljb24taW1nXCIgc3JjPVwiXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPjxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xhbmQucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8aDM+TGFuZDwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+UGxhdGZvcm0gZHJpbGxpbmcgb3BlcmF0aW9ucyAmIG1haW50ZW5hbmNlPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgaWQ9XCJpY29uLWltZ1wiIHNyYz1cIlwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+PGE+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW5naW5lZXJpbmcucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8aDM+RW5naW5lZXJpbmc8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPlBsYXRmb3JtIGRyaWxsaW5nIG9wZXJhdGlvbnMgJiBtYWludGVuYW5jZTwvcD5cclxuICAgICAgICAgICAgICA8aW1nIGlkPVwiaWNvbi1pbWdcIiBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPjxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21hbnVmYWN0dXJpbmcucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8aDM+TWFudWZhY3R1cmluZzwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+UGxhdGZvcm0gZHJpbGxpbmcgb3BlcmF0aW9ucyAmIG1haW50ZW5hbmNlPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgaWQ9XCJpY29uLWltZ1wiIHNyYz1cIlwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJuZXdzXCI+XHJcbiAgICAgICAgICA8aDI+TGF0ZXN0IE5ld3M8L2gyPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BldHJvLWxvZ28uanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICBDTlJJIGF3YXJkcyBQZXRyb0dhcyBHcm91cCBhIG11bHRpLW1pbGxpb25cclxuICAgICAgICAgICAgICAgICAgcG91bmQgZHJpbGxpbmcgY29udHJhY3QgZm9yIHRocmVlIFVLIE5vcnRoIFNlYSBwbGF0Zm9ybXNcclxuICAgICAgICAgICAgICAgICAgPHA+NyBBcHJpbCAyMDE4PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BldHJvLWxvZ28uanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgUGV0cm9HYXMgR3JvdXAgc2VjdXJlcyAkNDYwbSBvZiBsYW5kIGRyaWxsaW5nXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyYWN0cyBpbiB0aGUgTWlkZGxlIEVhc3QsIEFmcmljYSBhbmQgRXVyb3BlXHJcbiAgICAgICAgICAgICAgICAgIDxwPjI1IE9jdG9iZXIgMjAxODwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wZXRyby1sb2dvLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIFBldHJvR2FzIEdyb3VwIHdpbnMgbXVsdGktbWlsbGlvbiBldXJvXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyYWN0IGZvciBzZXZlbiAzMjB0IGNsdXN0ZXIgc2xpZGVyIGRyaWxsaW5nIHJpZ3NcclxuICAgICAgICAgICAgICAgICAgPHA+MiBEZWNlbWJlciAyMDE5PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BldHJvLWxvZ28uanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgUGV0cm9HYXMgR3JvdXAgd2lucyBtdWx0aS1taWxsaW9uIGV1cm9cclxuICAgICAgICAgICAgICAgICAgY29udHJhY3QgZm9yIHNldmVuIDMyMHQgY2x1c3RlciBzbGlkZXIgZHJpbGxpbmcgcmlnc1xyXG4gICAgICAgICAgICAgICAgICA8cD4yIERlY2VtYmVyIDIwMTk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL21lZGlhXCIgPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ2aWVsLWFsbC1uZXdzXCI+VmlldyBhbGwgbmV3czwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuIG1haW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIkhvbWVwYWdlLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAzMGVtO1xyXG5taW4taGVpZ2h0OiAxMDB2aDtcclxud2lkdGg6MTAwJTt9XHJcblxyXG4gIC5pbnRyb3tcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgIG1hcmdpbjphdXRvO1xyXG4gICAgIG1pbi1oZWlnaHQ6NDAwcHg7XHJcbiAgIFxyXG4gIH1cclxuLmludHJvIHB7XHJcbiAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuICAuaW50cm8gYXtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBcclxuICAuaW50cm8gYTp2aXNpdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4ubWFpbi10ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6MjUwcHg7XHJcbiBcclxufVxyXG4ubWFpbi10ZXh0IHB7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHBhZGRpbmctbGVmdDogN2VtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdlbTtcclxufVxyXG5cclxuLm1haW4td29ya3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOlx0cmdiKDk2LDk2LDk2KTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbi5tYWluLXdvcmsgdWx7XHJcbiAgcGFkZGluZy10b3A6IDNlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgZGlzcGxheSBmbGV4O1xyXG4gICB3aWR0aDogNzAlO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuZm9udC1zaXplOjE1cHg7XHJcbn1cclxuLm1haW4td29yayB1bCBsaXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5tYXJnaW46MjBweDtcclxubWF4LXdpZHRoOjEyZW07XHJcbn1cclxuXHJcbi5tYWluLXdvcmsgdWwgbGkgaW1ne1xyXG53aWR0aDoxMjBweDtcclxuaGVpZ2h0OjEyMHB4O1xyXG59XHJcbi5tYWluLXdvcmsgdWwgbGkgcHtcclxuZm9udC1zaXplOjE1cHg7XHJcbn1cclxuLm1haW4td29yayB1bCBsaSBhe1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcbiAjaWNvbi1pbWd7XHJcbndpZHRoOjE1MHB4O1xyXG5oZWlnaHQ6MzBweDtcclxufVxyXG4gYXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gcGFkZGluZy10b3A6IDEwcHg7XHJcbiBtYXJnaW4tdG9wIDMwcHg7XHJcblxyXG59XHJcblxyXG4gbWFpbiBoMXtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6NGVtO1xyXG4gIH1cclxuXHJcbiAgbWFpbiBwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiNuZXdze1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgbWluLWhlaWdodDo0MDBweDtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG59XHJcbiAgI25ld3MgdWx7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbm1hcmdpbjowO1xyXG5wYWRkaW5nOjA7XHJcbiAgICBcclxuICB9XHJcbiAgI25ld3MgbGl7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG4gIH1cclxuXHJcbiAjbmV3cyB1bCBsaSBpbWd7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcclxuICAgd2lkdGg6OGVtO1xyXG4gICBoZWlnaHQ6IDRlbTtcclxuIH1cclxuICAjbmV3cyB1bCBsaSBhe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgd2lkdGg6MThlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAjbmV3cyB1bCBsaSBhOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuI25ld3MgaDJ7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbmZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbiNuZXdzIGxpe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAjbmV3cyBwe1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgbWFpbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwZW07XHJcbm1pbi1oZWlnaHQ6IDYwcHg7XHJcbndpZHRoOjEwMCU7fVxyXG5cclxuXHJcbi5pbnRyb3tcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgbWFyZ2luOmF1dG87XHJcbiAgICAgbWluLWhlaWdodDoxNTBweDtcclxuICAgXHJcbiAgfVxyXG4uaW50cm8gcHtcclxuICBtYXgtd2lkdGg6IDIwZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaW50cm8gaDF7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5tYWluLXRleHR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6MjUwcHg7XHJcbiBcclxufVxyXG4ubWFpbi10ZXh0IHB7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4ubWFpbi13b3Jre1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpcdHJnYig5Niw5Niw5Nik7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1haW4td29yayB1bHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5tYXJnaW46YXV0bztcclxuXHJcblxyXG59XHJcblxyXG4ubWFpbi13b3JrIGxpe1xyXG4gIHBhZGRpbmctbGVmdDo1ZW07XHJcbiAgcGFkZGluZy1yaWdodDo1ZW07XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcblxyXG4jbmV3c3tcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgIG1pbi1oZWlnaHQ6NDAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbiNuZXdzIHVse1xyXG4gIHBhZGRpbmctbGVmdDowO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiNuZXdzIHVsIGxpe1xyXG4gIHBhZGRpbmctbGVmdDowO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuICB9XHJcblxyXG4gIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User PC\workspace\kca\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map