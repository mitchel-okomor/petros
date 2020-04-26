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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
      className: "jsx-3463052966" + " " + "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "jsx-3463052966" + " " + "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 3
      }
    }, __jsx("img", {
      src: "/petro-logo.jpg",
      alt: "Logo",
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }
    }), __jsx("button", {
      onClick: () => this.showNavBar(),
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 1
      }
    }, __jsx("i", {
      className: "jsx-3463052966" + " " + `${this.state.iconClass}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 43
      }
    }), this.state.buttontext)), __jsx("ul", {
      className: "jsx-3463052966" + " " + (this.state.navClass || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 3
      }
    }, __jsx("li", {
      id: "home",
      className: "jsx-3463052966" + " " + "active",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, " Home"))), __jsx("li", {
      className: "jsx-3463052966",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, " Who we are"))), __jsx("li", {
      className: "jsx-3463052966",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, " Business and Services "))), __jsx("li", {
      className: "jsx-3463052966",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, " Rigs"))), __jsx("li", {
      className: "jsx-3463052966",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, " A well of Innovation"))), __jsx("li", {
      className: "jsx-3463052966",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, " Careers"))), __jsx("li", {
      className: "jsx-3463052966",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, " Investors"))), __jsx("li", {
      className: "jsx-3463052966",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, " Media"))), __jsx("li", {
      className: "jsx-3463052966",
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
      className: "jsx-3463052966",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, " Contact Us")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3463052966",
      __self: this
    }, "header.jsx-3463052966{height:90px;width:100%;margin:auto;text-align:center;}.logo.jsx-3463052966{height:100%;z-index:1;margin:auto;text-align:center;}.logo.jsx-3463052966 img.jsx-3463052966{width:150px;height:80px;}.hide.jsx-3463052966{display:none;}@media only screen and (max-width:800px){header.jsx-3463052966{position:fixed;top:0;box-sizing:border-box;display:block;width:100%;height:40px;padding:2px;z-index:3;background-color:rgb(48,48,48);}.logo.jsx-3463052966{width:100%;}.logo.jsx-3463052966 img.jsx-3463052966{display:none;float:left;width:80px;height:30px;margin-left:20px;}.logo.jsx-3463052966 button.jsx-3463052966{float:right;height:35px;width:35px: color:white;font-size:20px;margin-right:3px;color:white;cursor:pointer;background-color:rgb(48,48,48);}header.jsx-3463052966 ul.jsx-3463052966{box-sizing:border-box;background-color:rgb(48,48,48);margin:auto;width:100%;height:auto;list-style:none;text-align:center;}header.jsx-3463052966 ul.jsx-3463052966 li.jsx-3463052966{border-top:0.1px solid rgb(80,80,80);display:block;width:100%;margin:auto;text-align:center;font-size:1.2em;}header.jsx-3463052966 a.jsx-3463052966:hover{color:white;}header.jsx-3463052966 li.jsx-3463052966:hover{background-color:red;border-radius:5px;}header.jsx-3463052966 a.jsx-3463052966{color:rgb(245,245,245);display:block;padding:5px 20px 5px 0px;-webkit-text-decoration:none;text-decoration:none;}.fa.jsx-3463052966{color:white;}}@media only screen and (min-width:800px){.logo.jsx-3463052966 button.jsx-3463052966{display:none;}.logo.jsx-3463052966 label.jsx-3463052966{display:none;}header.jsx-3463052966 ul.jsx-3463052966{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdLLEFBR3FCLEFBTUEsQUFPQSxBQUtmLEFBR29CLEFBV0osQUFHQyxBQU9BLEFBV1MsQUFVZSxBQVM3QixBQUdTLEFBSUksQUFPYixBQUtJLEFBSUEsQUFJRCxXQWxFWixDQWhDVyxBQU1ELEFBT0UsQUE2QkMsQUE4QmxCLEFBY0EsQ0FyRUcsQUFrQmUsQUF5RGYsQUFJQSxBQUdBLEVBOUVTLE1BQ2lCLEFBcURWLENBcEVGLEFBOEN3QixDQXBEeEIsQUE4RUQsQ0FqRWIsQUFzQmUsQUFRQyxVQXBDSSxDQU5BLEFBbUNMLEVBMEJBLEFBaUJTLEVBSjNCLElBckRxQixJQWVHLENBT0QsR0FtQlIsQ0F2RFosQ0FOQSxBQW1EYSxJQTlCRSxLQXlDSCxBQWdCUSxDQW5DRSxDQVBwQixDQWdCVSxHQTlCSSxNQXlDRyxFQVZOLElBOUJFLEFBcUJDLFFBVUMsSUE5QkgsQUFxQkMsQUFtQkcsVUF2Q29CLEVBOEJuQixHQVRlLENBbUJuQyxJQWNGLFVBdkJFLFdBOUJHLEtBcUJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgc3VwZXIocHJvcHMpXHJcbiAgdGhpcy5zdGF0ZT17XHJcbiAgICBuYXZDbGFzczogXCJoaWRlXCIsXHJcbiAgICAgIGljb25DbGFzczogXCJmYSBmYS1iYXJzXCIsXHJcbiAgICAgIGJ1dHRvbnRleHQ6IFwiXCJcclxuICB9O1xyXG59XHJcblxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuYXZDbGFzczogXCJoaWRlXCJcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzaG93TmF2QmFyID0gKCkgPT57XHJcbiAgICBpZih0aGlzLnN0YXRlLm5hdkNsYXNzPT0gXCJoaWRlXCIpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgIG5hdkNsYXNzOiBcInNob3dcIixcclxuICAgICAgICBpY29uQ2xhc3M6IFwiXCIsXHJcbiAgICAgICAgIGJ1dHRvbnRleHQ6IFwiWFwiXHJcbiAgICAgXHJcbiAgICB9KVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBuYXZDbGFzczogXCJoaWRlXCIsXHJcbiAgICAgIGljb25DbGFzczogXCJmYSBmYS1iYXJzXCIsXHJcbiAgICAgIGJ1dHRvbnRleHQ6IFwiXCJcclxuICAgICAgfSkgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcInNob3cgbmF2YmFyXCIpO1xyXG4gIH1cclxuXHJcblxyXG5yZW5kZXIoKXtcclxucmV0dXJuKFxyXG4gIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICA8aW1nIHNyYz1cIi9wZXRyby1sb2dvLmpwZ1wiIGFsdD1cIkxvZ29cIj48L2ltZz5cclxuXHJcbjxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zaG93TmF2QmFyKCl9PjxpIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5pY29uQ2xhc3N9YH0+PC9pPnt0aGlzLnN0YXRlLmJ1dHRvbnRleHR9XHJcbjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDx1bCBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmF2Q2xhc3N9PlxyXG4gIDxsaSBpZD1cImhvbWVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT4gSG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi93aG93ZWFyZVwiPlxyXG4gICAgICAgIDxhPiBXaG8gd2UgYXJlPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XHJcbiAgICAgICAgPGE+IEJ1c2luZXNzIGFuZCBTZXJ2aWNlcyA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcmlnc1wiPlxyXG4gICAgICAgIDxhPiBSaWdzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL2lubm92YXRpb25zXCI+XHJcbiAgICAgICAgPGE+IEEgd2VsbCBvZiBJbm5vdmF0aW9uPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL2NhcmVlcnNcIj5cclxuICAgICAgICA8YT4gQ2FyZWVyczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9pbnZlc3RvcnNcIj5cclxuICAgICAgICA8YT4gSW52ZXN0b3JzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL21lZGlhXCI+XHJcbiAgICAgICAgPGE+IE1lZGlhPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICA8YT4gQ29udGFjdCBVczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG5cclxuICA8c3R5bGUganN4PlxyXG4gICAge2BcclxuICAgICAgaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5sb2dvIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGlkZXtcclxuICAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzoycHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0OCwgNDgsIDQ4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIGJ1dHRvbiB7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICBoZWlnaHQ6MzVweDtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4OlxyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDQ4LCA0OCwgNDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXIgdWwge1xyXG4gICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0OCwgNDgsIDQ4KTtcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICB9XHJcblxyXG4gICAgIGhlYWRlciB1bCBsaSB7XHJcbiAgICAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCByZ2IoODAsIDgwLCA4MCk7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICB9XHJcbiAgXHJcbiAgIGhlYWRlciBhOmhvdmVyIHtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuICAgaGVhZGVyIGxpOmhvdmVyIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgIH1cclxuICAgaGVhZGVyIGEge1xyXG4gICAgIGNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDBweDtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5mYXtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAubG9nbyBidXR0b257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICBcclxuICAgICAgfVxyXG4gICAgICAubG9nbyBsYWJlbHsgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgaGVhZGVyIHVse1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gIDwvc3R5bGU+XHJcbjwvaGVhZGVyPlxyXG4pXHJcbn1cclxuXHJcbiBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\components\\\\Header.js */"));
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

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MyLayout */ "./pages/components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User PC\\workspace\\kca\\pages\\services.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Services() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2432754988" + " " + "services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Home > Business and Services"), __jsx("hr", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, " Business and Services"), __jsx("img", {
    src: "/business.jpg",
    alt: "business and services",
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "PetroGas Group is a leading provider of premium rig services, specialist engineering and design and land rig manufacture for the international oil and gas industry. Our breadth of services distinguishes us from the vast majority of international drilling contractors. "), __jsx("hr", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 1
    }
  }), __jsx("article", {
    className: "jsx-2432754988" + " " + "services-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 1
    }
  }, __jsx("section", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "Land"), __jsx("p", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/land-rig.jpg",
    alt: "Land rig image",
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 1
    }
  }), " ", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 50
    }
  }), "PetroGas Group owns and operates a fleet of 77 high quality land rigs ranging from highly mobile units to large rigs capable of drilling extended reach wells. We operate in a wide range of environments, from the extreme temperatures of the Sahara to the remote and arctic conditions of Siberia. We have an ongoing rig building and upgrade programme which develops new and innovative rig designs helping us deliver our vision of operating safely, succeeding globally. We are also innovating the software and hardware of our existing rigs to improve performance and deliver value through cost efficient well construction. In addition, we offer the rental of a wide portfolio of high quality drilling and production equipment, maintained and certified in accordance with recognised industry standards and PetroGas Group's own worldwide standards. Our Equipment Rentals brochure can be found here. \u201CPetroGas Group has a strong track record in delivering value for our clients through cost effective well construction.  Our focus is on meeting our clients\u2019 goals for their drilling projects, whilst ensuring safe, effective, trouble-free operations. Our presence in most key energy regions and our focus on developing local personnel means we are well placed to continue to successfully deliver for our clients whilst developing local value and skills in the countries in which we operate.\u201D"), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 1
    }
  }), __jsx("hr", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 1
    }
  })), __jsx("section", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "Offshore"), __jsx("p", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/offshore-rig.jpg",
    alt: "offshore image",
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 1
    }
  }), " ", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 54
    }
  }), "With over 40 years of platform drilling experience, PetroGas Group is one of the world's largest platform services operators. Today we are responsible, either directly or through our affiliates, for managing drilling and maintenance operations on 29 offshore platforms across the North Sea, the Caspian Sea, Sakhalin Island, Canada and West Africa.  In addition, we are also contracted to manage operations and maintenance on two Gusto CJ70 Jack Ups, operating in the Norwegian North Sea.", __jsx("h4", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 1
    }
  }, "Unrivalled knowledge and expertise"), "We have formalised a pragmatic approach to deliver safe, effective, trouble-free platform drilling operations across our blue chip client base. This approach, coupled with; our unrivalled knowledge of delivering platform wells, extensive experience in asset and rig equipment management, together with a fresh perspective on working with the main service providers, places PetroGas Group in a unique position to offer innovative solutions which deliver value and exceptional performance. Delivery of complete end to end drilling facilities' solutions The drilling facilities for many of our platforms have been designed by our global specialist engineering division RDS. Many of these projects combine the experience of operations experts with specialists in rig design, to offer complete end to end solutions. Working closely in this manner allows us to deliver integrated solutions through the concept stage, design and build and onto operations, maintenance and engineering support. Comprehensive experience in plug and abandonment projects Over recent years, PetroGas Group has delivered significant plug and abandonment scopes. These have required proactive rig operations and maintenance activities as well as rig modifications. We have made a progressive effort to establish collaborative working relationships with service providers to increase efficiency and reduce operating time per well.  Our track record for P&A operations is comprehensive, and our onshore and offshore workforce is therefore very familiar with P&A regulations, planning and execution.", __jsx("h4", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 1
    }
  }, "Delivery Focused"), "It is frequently said that \"companies make contracts and people make business\".  To ensure effective collaboration both must be aligned. We believe that strong collaborative working relationships enable the successful delivery of well objectives. The way in which we work has evolved from one of managed support for our clients to one of aligned objectives so that we work as one team.", __jsx("h4", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 1
    }
  }, "Planning For Success"), "PetroGas Group firmly believes that the path to success is through delivering trouble-free operations that are well planned so that we get the job right the first time, and every time. This includes ensuring that we have a highly competent team in place which is involved and committed right from the start. In practical terms, we believe that low NPT is a key \"driver\" in securing consistently high performance and well delivery. A vital element of delivering low NPT is equipment reliability. We have invested heavily in new technology and data collection capability to enable us to plan and successfully execute maintenance programmes, based on the inherent condition of the equipment in use. This allows us to plan and undertake maintenance with minimal interruption to the ongoing operation and avoid any failures which could impact performance.", __jsx("h4", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 1
    }
  }, "A Strong Safety Culture"), "Safety is of paramount importance to the group and our priority is incident free operations, where nobody gets hurt and we don't harm the environment.  These beliefs are visible through our HSE Policy and Worldwide HSE Standards: We routinely deliver best in class performance and are widely recognised for delivering safe operations Our behavioural safety programs are focused on reducing all incidents, recordable or not, to zero We believe that maintaining a highly skilled and motivated work force is key to eliminating all incidents Our front line safety tools are simple and fit for purpose \u201CWe consciously choose not to allow luck to play a part in delivering safe, effective, trouble-free drilling operations. This approach of delivering day-by-day, section-by-section and well-by-well takes commitment, belief and passion to succeed. Our range of key clients demonstrates our strong reputation which is supported by the work we do to deliver drilling operations The PetroGas Group Way.\u201D"), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 1
    }
  }), __jsx("hr", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 2
    }
  })), __jsx("section", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, "RDS"), __jsx("p", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/rds.jpg",
    alt: "RDS rig image",
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 1
    }
  }), " ", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 44
    }
  }), "RDS is the world's leading rig design and engineering specialist.  Our highly skilled project teams work with many of the major oil and gas companies and also the major topside contractors and fabricators to deliver world class drilling facilities for some of the most challenging oilfields and locations. As an integral part of the PetroGas group, our core business is to deliver a comprehensive drilling facilities engineering service at every stage of design, engineering, construction and modification; using the expertise of our engineers and operations experts to ensure the end product is capable of delivering safe, effective, trouble-free operations.  Through our global offices in Aberdeen, Baku, Bergen, Houston, London and St. John\u2019s (Canada) we are well positioned to deliver project work anywhere in the world. Our services include: Engineering design for new-builds: RDS' primary focus is large, harsh environment platform drilling rigs and drilling packages for mobile drilling units. Our greenfield capabilities can take a project from drawing board concept stage into front end engineering design (FEED) and through detailed design, including specification and management of the procurement of drilling equipment. Rig reactivation or modification: Whether a minor piping reconfiguration or an entire rig reactivation, an offshore platform or land rig, RDS provides engineering services throughout all stages of a brownfield project. We support brownfield modifications in many countries from our offices in Aberdeen, Bergen and Baku. Conceptual engineering and consultancy: RDS provides enhanced focus on the earliest phase of major projects through a group of experts who specialise in the delivery of high quality concept studies. This team also offers drilling facilities and drilling operations consultancy services which can be applied in a variety of scenarios and across all types of rigs. Construction and commissioning support: RDS provides specialist drilling input during the construction and commissioning phases of new-build and modification projects. Our approach is to assemble a team that works in an integrated manner alongside the shipyard or topside contractor. This team is responsible for assisting the client in the delivery of a drill rig ready and safe to begin drilling operations. \u201CAt RDS our goal is to engineer the safest and most efficient rigs and to exceed clients expectations as we do so.   Being part of the wider PetroGas group, and having access to the operational experience from the other divisions is a key part of this goal.  The requirements for automation, safety in design, environmental protection, harsh environment facilities and efficient operations continue to increase rapidly and RDS strives to lead the industry in these areas.\u201D", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 1
    }
  }), "Albert Allan", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), "Senior Vice President, RDS", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 1
    }
  }), "For more information please visit our website at ", __jsx("a", {
    href: "www.rdsoil.com",
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 56
    }
  }, "www.rdsoil.com"), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 1
    }
  }), __jsx("hr", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 1
    }
  }))), __jsx("section", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, "Bontec"), __jsx("p", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/bontec.jpg",
    alt: "Bontec image",
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 1
    }
  }), " ", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 46
    }
  }), "Bentec is a leading global manufacturer of drilling rigs and oilfield equipment. It designs and manufactures state-of-the-art, high-quality and cost-effective drilling rigs as well as a range of equipment which include top drives.   These are able to operate in all environments, from the desert to the arctic. Headquartered in Bad Bentheim in Germany, Bentec\u2019s manufacturing facility extends over 110,000 m\xB2 and includes 13,000 m\xB2 of fully equipped covered workshops \u2013 enough to commission and test rigs for complete turnkey projects. Additional production and service workshops in Russia and the Middle East guarantee service support around the globe. For further information please visit our website atwww.bentec.com. \u201COur technologies and products continue to exceed our customers\u2019 expectations. However, it is our people who shape and drive our future achievements. Both our employees and our company are characterised by confidence, inventiveness and determination \u2013 the decisive factors in Bentec\u2019s continuous success in the drilling equipment market.\u201D", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 1
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 1
    }
  }), "Dirk Schulze, ", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }), "Chief Executive Officer, Bentec ", __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 33
    }
  }), __jsx("br", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 1
    }
  }), __jsx("hr", {
    className: "jsx-2432754988",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 1
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2432754988",
    __self: this
  }, ".services.jsx-2432754988{min-height:100vh;margin:5em;}.services.jsx-2432754988 img.jsx-2432754988{width:100%;}.services.jsx-2432754988 p.jsx-2432754988{font-size:1em;line-height:1.5em;margin:1em 0 1em 0;}.services.jsx-2432754988 h1.jsx-2432754988{margin:1em 0 0.2em 0;}.services.jsx-2432754988 h2.jsx-2432754988{color:grey;}article.jsx-2432754988 section.jsx-2432754988 img.jsx-2432754988{width:40em;height:20em;margin-bottom:0.8em;}article.jsx-2432754988 section.jsx-2432754988 h4.jsx-2432754988{margin-top:0.8em;margin-bottom:0.4em;}@media only screen and (max-width:800px){.services.jsx-2432754988{margin:1em;padding-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlciBQQ1xcd29ya3NwYWNlXFxrY2FcXHBhZ2VzXFxzZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSmtCLEFBR29CLEFBS0wsQUFJRSxBQUtPLEFBS1gsQUFHRixBQU1TLEFBS0wsV0EzQmQsQUFjQSxBQUdXLEFBV1MsR0F4QkEsR0FUUCxBQTRCUyxJQWJ0QixFQVFtQixLQXRCbkIsQUFpQ0UsSUF4Qm1CLEtBbUJyQixNQUxBLFFBYkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyIFBDXFx3b3Jrc3BhY2VcXGtjYVxccGFnZXNcXHNlcnZpY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXNcIj5cclxuICAgICAgICA8aDI+SG9tZSA+IEJ1c2luZXNzIGFuZCBTZXJ2aWNlczwvaDI+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8aDE+IEJ1c2luZXNzIGFuZCBTZXJ2aWNlczwvaDE+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvYnVzaW5lc3MuanBnXCIgYWx0PVwiYnVzaW5lc3MgYW5kIHNlcnZpY2VzXCIvPlxyXG4gICAgICAgIDxwPlBldHJvR2FzIEdyb3VwIGlzIGEgbGVhZGluZyBwcm92aWRlciBvZiBwcmVtaXVtIHJpZyBzZXJ2aWNlcywgc3BlY2lhbGlzdCBlbmdpbmVlcmluZyBhbmQgZGVzaWduIGFuZCBsYW5kIHJpZyBtYW51ZmFjdHVyZSBmb3IgdGhlIGludGVybmF0aW9uYWwgb2lsIGFuZCBnYXMgaW5kdXN0cnkuIE91ciBicmVhZHRoIG9mIHNlcnZpY2VzIGRpc3Rpbmd1aXNoZXMgdXMgZnJvbSB0aGUgdmFzdCBtYWpvcml0eSBvZiBpbnRlcm5hdGlvbmFsIGRyaWxsaW5nIGNvbnRyYWN0b3JzLiA8L3A+XHJcbjxociAvPlxyXG48YnIvPlxyXG48YnIgLz5cclxuPGFydGljbGUgY2xhc3NOYW1lPVwic2VydmljZXMtc2VjdGlvblwiPlxyXG4gIDxzZWN0aW9uID5cclxuICAgIDxoMj5MYW5kPC9oMj5cclxuICAgIDxwPlxyXG48aW1nIHNyYz1cIi9sYW5kLXJpZy5qcGdcIiBhbHQ9XCJMYW5kIHJpZyBpbWFnZVwiIC8+IDxiciAvPlxyXG4gICAgUGV0cm9HYXMgR3JvdXAgb3ducyBhbmQgb3BlcmF0ZXMgYSBmbGVldCBvZiA3NyBoaWdoIHF1YWxpdHkgbGFuZCByaWdzIHJhbmdpbmcgZnJvbSBoaWdobHkgbW9iaWxlIHVuaXRzIHRvIGxhcmdlIHJpZ3MgY2FwYWJsZSBvZiBkcmlsbGluZyBleHRlbmRlZCByZWFjaCB3ZWxscy4gV2Ugb3BlcmF0ZSBpbiBhIHdpZGUgcmFuZ2Ugb2YgZW52aXJvbm1lbnRzLCBmcm9tIHRoZSBleHRyZW1lIHRlbXBlcmF0dXJlcyBvZiB0aGUgU2FoYXJhIHRvIHRoZSByZW1vdGUgYW5kIGFyY3RpYyBjb25kaXRpb25zIG9mIFNpYmVyaWEuXHJcblxyXG5XZSBoYXZlIGFuIG9uZ29pbmcgcmlnIGJ1aWxkaW5nIGFuZCB1cGdyYWRlIHByb2dyYW1tZSB3aGljaCBkZXZlbG9wcyBuZXcgYW5kIGlubm92YXRpdmUgcmlnIGRlc2lnbnMgaGVscGluZyB1cyBkZWxpdmVyIG91ciB2aXNpb24gb2Ygb3BlcmF0aW5nIHNhZmVseSwgc3VjY2VlZGluZyBnbG9iYWxseS5cclxuXHJcbldlIGFyZSBhbHNvIGlubm92YXRpbmcgdGhlIHNvZnR3YXJlIGFuZCBoYXJkd2FyZSBvZiBvdXIgZXhpc3RpbmcgcmlncyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlIGFuZCBkZWxpdmVyIHZhbHVlIHRocm91Z2ggY29zdCBlZmZpY2llbnQgd2VsbCBjb25zdHJ1Y3Rpb24uXHJcblxyXG5JbiBhZGRpdGlvbiwgd2Ugb2ZmZXIgdGhlIHJlbnRhbCBvZiBhIHdpZGUgcG9ydGZvbGlvIG9mIGhpZ2ggcXVhbGl0eSBkcmlsbGluZyBhbmQgcHJvZHVjdGlvbiBlcXVpcG1lbnQsIG1haW50YWluZWQgYW5kIGNlcnRpZmllZCBpbiBhY2NvcmRhbmNlIHdpdGggcmVjb2duaXNlZCBpbmR1c3RyeSBzdGFuZGFyZHMgYW5kIFBldHJvR2FzIEdyb3VwJ3Mgb3duIHdvcmxkd2lkZSBzdGFuZGFyZHMuIE91ciBFcXVpcG1lbnQgUmVudGFscyBicm9jaHVyZSBjYW4gYmUgZm91bmQgaGVyZS5cclxuXHJcbuKAnFBldHJvR2FzIEdyb3VwIGhhcyBhIHN0cm9uZyB0cmFjayByZWNvcmQgaW4gZGVsaXZlcmluZyB2YWx1ZSBmb3Igb3VyIGNsaWVudHMgdGhyb3VnaCBjb3N0IGVmZmVjdGl2ZSB3ZWxsIGNvbnN0cnVjdGlvbi4gIE91ciBmb2N1cyBpcyBvbiBtZWV0aW5nIG91ciBjbGllbnRz4oCZIGdvYWxzIGZvciB0aGVpciBkcmlsbGluZyBwcm9qZWN0cywgd2hpbHN0IGVuc3VyaW5nIHNhZmUsIGVmZmVjdGl2ZSwgdHJvdWJsZS1mcmVlIG9wZXJhdGlvbnMuIE91ciBwcmVzZW5jZSBpbiBtb3N0IGtleSBlbmVyZ3kgcmVnaW9ucyBhbmQgb3VyIGZvY3VzIG9uIGRldmVsb3BpbmcgbG9jYWwgcGVyc29ubmVsIG1lYW5zIHdlIGFyZSB3ZWxsIHBsYWNlZCB0byBjb250aW51ZSB0byBzdWNjZXNzZnVsbHkgZGVsaXZlciBmb3Igb3VyIGNsaWVudHMgd2hpbHN0IGRldmVsb3BpbmcgbG9jYWwgdmFsdWUgYW5kIHNraWxscyBpbiB0aGUgY291bnRyaWVzIGluIHdoaWNoIHdlIG9wZXJhdGUu4oCdXHJcblxyXG5cclxuICAgIDwvcD5cclxuXHJcbjxiciAvPlxyXG48aHIgLz5cclxuPGJyIC8+XHJcbjxiciAvPlxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbiAgPHNlY3Rpb24gPlxyXG4gICAgXHJcbiAgICA8aDI+T2Zmc2hvcmU8L2gyPlxyXG4gICAgPHA+XHJcbjxpbWcgc3JjPVwiL29mZnNob3JlLXJpZy5qcGdcIiBhbHQ9XCJvZmZzaG9yZSBpbWFnZVwiIC8+IDxiciAvPlxyXG5cclxuV2l0aCBvdmVyIDQwIHllYXJzIG9mIHBsYXRmb3JtIGRyaWxsaW5nIGV4cGVyaWVuY2UsIFBldHJvR2FzIEdyb3VwIGlzIG9uZSBvZiB0aGUgd29ybGQncyBsYXJnZXN0IHBsYXRmb3JtIHNlcnZpY2VzIG9wZXJhdG9ycy5cclxuXHJcblRvZGF5IHdlIGFyZSByZXNwb25zaWJsZSwgZWl0aGVyIGRpcmVjdGx5IG9yIHRocm91Z2ggb3VyIGFmZmlsaWF0ZXMsIGZvciBtYW5hZ2luZyBkcmlsbGluZyBhbmQgbWFpbnRlbmFuY2Ugb3BlcmF0aW9ucyBvbiAyOSBvZmZzaG9yZSBwbGF0Zm9ybXMgYWNyb3NzIHRoZSBOb3J0aCBTZWEsIHRoZSBDYXNwaWFuIFNlYSwgU2FraGFsaW4gSXNsYW5kLCBDYW5hZGEgYW5kIFdlc3QgQWZyaWNhLiAgSW4gYWRkaXRpb24sIHdlIGFyZSBhbHNvIGNvbnRyYWN0ZWQgdG8gbWFuYWdlIG9wZXJhdGlvbnMgYW5kIG1haW50ZW5hbmNlIG9uIHR3byBHdXN0byBDSjcwIEphY2sgVXBzLCBvcGVyYXRpbmcgaW4gdGhlIE5vcndlZ2lhbiBOb3J0aCBTZWEuXHJcblxyXG48aDQ+VW5yaXZhbGxlZCBrbm93bGVkZ2UgYW5kIGV4cGVydGlzZTwvaDQ+XHJcblxyXG5XZSBoYXZlIGZvcm1hbGlzZWQgYSBwcmFnbWF0aWMgYXBwcm9hY2ggdG8gZGVsaXZlciBzYWZlLCBlZmZlY3RpdmUsIHRyb3VibGUtZnJlZSBwbGF0Zm9ybSBkcmlsbGluZyBvcGVyYXRpb25zIGFjcm9zcyBvdXIgYmx1ZSBjaGlwIGNsaWVudCBiYXNlLiBUaGlzIGFwcHJvYWNoLCBjb3VwbGVkIHdpdGg7IG91ciB1bnJpdmFsbGVkIGtub3dsZWRnZSBvZiBkZWxpdmVyaW5nIHBsYXRmb3JtIHdlbGxzLCBleHRlbnNpdmUgZXhwZXJpZW5jZSBpbiBhc3NldCBhbmQgcmlnIGVxdWlwbWVudCBtYW5hZ2VtZW50LCB0b2dldGhlciB3aXRoIGEgZnJlc2ggcGVyc3BlY3RpdmUgb24gd29ya2luZyB3aXRoIHRoZSBtYWluIHNlcnZpY2UgcHJvdmlkZXJzLCBwbGFjZXMgUGV0cm9HYXMgR3JvdXAgaW4gYSB1bmlxdWUgcG9zaXRpb24gdG8gb2ZmZXIgaW5ub3ZhdGl2ZSBzb2x1dGlvbnMgd2hpY2ggZGVsaXZlciB2YWx1ZSBhbmQgZXhjZXB0aW9uYWwgcGVyZm9ybWFuY2UuXHJcblxyXG5EZWxpdmVyeSBvZiBjb21wbGV0ZSBlbmQgdG8gZW5kIGRyaWxsaW5nIGZhY2lsaXRpZXMnIHNvbHV0aW9uc1xyXG5cclxuVGhlIGRyaWxsaW5nIGZhY2lsaXRpZXMgZm9yIG1hbnkgb2Ygb3VyIHBsYXRmb3JtcyBoYXZlIGJlZW4gZGVzaWduZWQgYnkgb3VyIGdsb2JhbCBzcGVjaWFsaXN0IGVuZ2luZWVyaW5nIGRpdmlzaW9uIFJEUy4gTWFueSBvZiB0aGVzZSBwcm9qZWN0cyBjb21iaW5lIHRoZSBleHBlcmllbmNlIG9mIG9wZXJhdGlvbnMgZXhwZXJ0cyB3aXRoIHNwZWNpYWxpc3RzIGluIHJpZyBkZXNpZ24sIHRvIG9mZmVyIGNvbXBsZXRlIGVuZCB0byBlbmQgc29sdXRpb25zLiBXb3JraW5nIGNsb3NlbHkgaW4gdGhpcyBtYW5uZXIgYWxsb3dzIHVzIHRvIGRlbGl2ZXIgaW50ZWdyYXRlZCBzb2x1dGlvbnMgdGhyb3VnaCB0aGUgY29uY2VwdCBzdGFnZSwgZGVzaWduIGFuZCBidWlsZCBhbmQgb250byBvcGVyYXRpb25zLCBtYWludGVuYW5jZSBhbmQgZW5naW5lZXJpbmcgc3VwcG9ydC5cclxuXHJcbkNvbXByZWhlbnNpdmUgZXhwZXJpZW5jZSBpbiBwbHVnIGFuZCBhYmFuZG9ubWVudCBwcm9qZWN0c1xyXG5cclxuT3ZlciByZWNlbnQgeWVhcnMsIFBldHJvR2FzIEdyb3VwIGhhcyBkZWxpdmVyZWQgc2lnbmlmaWNhbnQgcGx1ZyBhbmQgYWJhbmRvbm1lbnQgc2NvcGVzLiBUaGVzZSBoYXZlIHJlcXVpcmVkIHByb2FjdGl2ZSByaWcgb3BlcmF0aW9ucyBhbmQgbWFpbnRlbmFuY2UgYWN0aXZpdGllcyBhcyB3ZWxsIGFzIHJpZyBtb2RpZmljYXRpb25zLiBXZSBoYXZlIG1hZGUgYSBwcm9ncmVzc2l2ZSBlZmZvcnQgdG8gZXN0YWJsaXNoIGNvbGxhYm9yYXRpdmUgd29ya2luZyByZWxhdGlvbnNoaXBzIHdpdGggc2VydmljZSBwcm92aWRlcnMgdG8gaW5jcmVhc2UgZWZmaWNpZW5jeSBhbmQgcmVkdWNlIG9wZXJhdGluZyB0aW1lIHBlciB3ZWxsLiAgT3VyIHRyYWNrIHJlY29yZCBmb3IgUCZBIG9wZXJhdGlvbnMgaXMgY29tcHJlaGVuc2l2ZSwgYW5kIG91ciBvbnNob3JlIGFuZCBvZmZzaG9yZSB3b3JrZm9yY2UgaXMgdGhlcmVmb3JlIHZlcnkgZmFtaWxpYXIgd2l0aCBQJkEgcmVndWxhdGlvbnMsIHBsYW5uaW5nIGFuZCBleGVjdXRpb24uXHJcblxyXG48aDQ+RGVsaXZlcnkgRm9jdXNlZDwvaDQ+XHJcblxyXG5JdCBpcyBmcmVxdWVudGx5IHNhaWQgdGhhdCBcImNvbXBhbmllcyBtYWtlIGNvbnRyYWN0cyBhbmQgcGVvcGxlIG1ha2UgYnVzaW5lc3NcIi4gIFRvIGVuc3VyZSBlZmZlY3RpdmUgY29sbGFib3JhdGlvbiBib3RoIG11c3QgYmUgYWxpZ25lZC4gV2UgYmVsaWV2ZSB0aGF0IHN0cm9uZyBjb2xsYWJvcmF0aXZlIHdvcmtpbmcgcmVsYXRpb25zaGlwcyBlbmFibGUgdGhlIHN1Y2Nlc3NmdWwgZGVsaXZlcnkgb2Ygd2VsbCBvYmplY3RpdmVzLiBUaGUgd2F5IGluIHdoaWNoIHdlIHdvcmsgaGFzIGV2b2x2ZWQgZnJvbSBvbmUgb2YgbWFuYWdlZCBzdXBwb3J0IGZvciBvdXIgY2xpZW50cyB0byBvbmUgb2YgYWxpZ25lZCBvYmplY3RpdmVzIHNvIHRoYXQgd2Ugd29yayBhcyBvbmUgdGVhbS5cclxuXHJcbjxoND5QbGFubmluZyBGb3IgU3VjY2VzczwvaDQ+XHJcblxyXG5QZXRyb0dhcyBHcm91cCBmaXJtbHkgYmVsaWV2ZXMgdGhhdCB0aGUgcGF0aCB0byBzdWNjZXNzIGlzIHRocm91Z2ggZGVsaXZlcmluZyB0cm91YmxlLWZyZWUgb3BlcmF0aW9ucyB0aGF0IGFyZSB3ZWxsIHBsYW5uZWQgc28gdGhhdCB3ZSBnZXQgdGhlIGpvYiByaWdodCB0aGUgZmlyc3QgdGltZSwgYW5kIGV2ZXJ5IHRpbWUuIFRoaXMgaW5jbHVkZXMgZW5zdXJpbmcgdGhhdCB3ZSBoYXZlIGEgaGlnaGx5IGNvbXBldGVudCB0ZWFtIGluIHBsYWNlIHdoaWNoIGlzIGludm9sdmVkIGFuZCBjb21taXR0ZWQgcmlnaHQgZnJvbSB0aGUgc3RhcnQuXHJcblxyXG5JbiBwcmFjdGljYWwgdGVybXMsIHdlIGJlbGlldmUgdGhhdCBsb3cgTlBUIGlzIGEga2V5IFwiZHJpdmVyXCIgaW4gc2VjdXJpbmcgY29uc2lzdGVudGx5IGhpZ2ggcGVyZm9ybWFuY2UgYW5kIHdlbGwgZGVsaXZlcnkuIEEgdml0YWwgZWxlbWVudCBvZiBkZWxpdmVyaW5nIGxvdyBOUFQgaXMgZXF1aXBtZW50IHJlbGlhYmlsaXR5LiBXZSBoYXZlIGludmVzdGVkIGhlYXZpbHkgaW4gbmV3IHRlY2hub2xvZ3kgYW5kIGRhdGEgY29sbGVjdGlvbiBjYXBhYmlsaXR5IHRvIGVuYWJsZSB1cyB0byBwbGFuIGFuZCBzdWNjZXNzZnVsbHkgZXhlY3V0ZSBtYWludGVuYW5jZSBwcm9ncmFtbWVzLCBiYXNlZCBvbiB0aGUgaW5oZXJlbnQgY29uZGl0aW9uIG9mIHRoZSBlcXVpcG1lbnQgaW4gdXNlLiBUaGlzIGFsbG93cyB1cyB0byBwbGFuIGFuZCB1bmRlcnRha2UgbWFpbnRlbmFuY2Ugd2l0aCBtaW5pbWFsIGludGVycnVwdGlvbiB0byB0aGUgb25nb2luZyBvcGVyYXRpb24gYW5kIGF2b2lkIGFueSBmYWlsdXJlcyB3aGljaCBjb3VsZCBpbXBhY3QgcGVyZm9ybWFuY2UuXHJcblxyXG48aDQ+QSBTdHJvbmcgU2FmZXR5IEN1bHR1cmU8L2g0PlxyXG5cclxuU2FmZXR5IGlzIG9mIHBhcmFtb3VudCBpbXBvcnRhbmNlIHRvIHRoZSBncm91cCBhbmQgb3VyIHByaW9yaXR5IGlzIGluY2lkZW50IGZyZWUgb3BlcmF0aW9ucywgd2hlcmUgbm9ib2R5IGdldHMgaHVydCBhbmQgd2UgZG9uJ3QgaGFybSB0aGUgZW52aXJvbm1lbnQuICBUaGVzZSBiZWxpZWZzIGFyZSB2aXNpYmxlIHRocm91Z2ggb3VyIEhTRSBQb2xpY3kgYW5kIFdvcmxkd2lkZSBIU0UgU3RhbmRhcmRzOlxyXG5cclxuV2Ugcm91dGluZWx5IGRlbGl2ZXIgYmVzdCBpbiBjbGFzcyBwZXJmb3JtYW5jZSBhbmQgYXJlIHdpZGVseSByZWNvZ25pc2VkIGZvciBkZWxpdmVyaW5nIHNhZmUgb3BlcmF0aW9uc1xyXG5PdXIgYmVoYXZpb3VyYWwgc2FmZXR5IHByb2dyYW1zIGFyZSBmb2N1c2VkIG9uIHJlZHVjaW5nIGFsbCBpbmNpZGVudHMsIHJlY29yZGFibGUgb3Igbm90LCB0byB6ZXJvXHJcbldlIGJlbGlldmUgdGhhdCBtYWludGFpbmluZyBhIGhpZ2hseSBza2lsbGVkIGFuZCBtb3RpdmF0ZWQgd29yayBmb3JjZSBpcyBrZXkgdG8gZWxpbWluYXRpbmcgYWxsIGluY2lkZW50c1xyXG5PdXIgZnJvbnQgbGluZSBzYWZldHkgdG9vbHMgYXJlIHNpbXBsZSBhbmQgZml0IGZvciBwdXJwb3NlXHJcbiBcclxu4oCcV2UgY29uc2Npb3VzbHkgY2hvb3NlIG5vdCB0byBhbGxvdyBsdWNrIHRvIHBsYXkgYSBwYXJ0IGluIGRlbGl2ZXJpbmcgc2FmZSwgZWZmZWN0aXZlLCB0cm91YmxlLWZyZWUgZHJpbGxpbmcgb3BlcmF0aW9ucy4gVGhpcyBhcHByb2FjaCBvZiBkZWxpdmVyaW5nIGRheS1ieS1kYXksIHNlY3Rpb24tYnktc2VjdGlvbiBhbmQgd2VsbC1ieS13ZWxsIHRha2VzIGNvbW1pdG1lbnQsIGJlbGllZiBhbmQgcGFzc2lvbiB0byBzdWNjZWVkLiBPdXIgcmFuZ2Ugb2Yga2V5IGNsaWVudHMgZGVtb25zdHJhdGVzIG91ciBzdHJvbmcgcmVwdXRhdGlvbiB3aGljaCBpcyBzdXBwb3J0ZWQgYnkgdGhlIHdvcmsgd2UgZG8gdG8gZGVsaXZlciBkcmlsbGluZyBvcGVyYXRpb25zIFRoZSBQZXRyb0dhcyBHcm91cCBXYXku4oCdXHJcbiAgICA8L3A+XHJcbiAgIFxyXG48YnIgLz5cclxuPGhyIC8+XHJcbjxiciAvPlxyXG4gPGJyIC8+XHJcbiAgPC9zZWN0aW9uPlxyXG5cclxuICA8c2VjdGlvbiA+XHJcbiAgICA8aDI+UkRTPC9oMj5cclxuICAgIDxwPlxyXG48aW1nIHNyYz1cIi9yZHMuanBnXCIgYWx0PVwiUkRTIHJpZyBpbWFnZVwiIC8+IDxiciAvPlxyXG5SRFMgaXMgdGhlIHdvcmxkJ3MgbGVhZGluZyByaWcgZGVzaWduIGFuZCBlbmdpbmVlcmluZyBzcGVjaWFsaXN0LiAgT3VyIGhpZ2hseSBza2lsbGVkIHByb2plY3QgdGVhbXMgd29yayB3aXRoIG1hbnkgb2YgdGhlIG1ham9yIG9pbCBhbmQgZ2FzIGNvbXBhbmllcyBhbmQgYWxzbyB0aGUgbWFqb3IgdG9wc2lkZSBjb250cmFjdG9ycyBhbmQgZmFicmljYXRvcnMgdG8gZGVsaXZlciB3b3JsZCBjbGFzcyBkcmlsbGluZyBmYWNpbGl0aWVzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNoYWxsZW5naW5nIG9pbGZpZWxkcyBhbmQgbG9jYXRpb25zLiAgXHJcblxyXG5BcyBhbiBpbnRlZ3JhbCBwYXJ0IG9mIHRoZSBQZXRyb0dhcyBncm91cCwgb3VyIGNvcmUgYnVzaW5lc3MgaXMgdG8gZGVsaXZlciBhIGNvbXByZWhlbnNpdmUgZHJpbGxpbmcgZmFjaWxpdGllcyBlbmdpbmVlcmluZyBzZXJ2aWNlIGF0IGV2ZXJ5IHN0YWdlIG9mIGRlc2lnbiwgZW5naW5lZXJpbmcsIGNvbnN0cnVjdGlvbiBhbmQgbW9kaWZpY2F0aW9uOyB1c2luZyB0aGUgZXhwZXJ0aXNlIG9mIG91ciBlbmdpbmVlcnMgYW5kIG9wZXJhdGlvbnMgZXhwZXJ0cyB0byBlbnN1cmUgdGhlIGVuZCBwcm9kdWN0IGlzIGNhcGFibGUgb2YgZGVsaXZlcmluZyBzYWZlLCBlZmZlY3RpdmUsIHRyb3VibGUtZnJlZSBvcGVyYXRpb25zLiAgVGhyb3VnaCBvdXIgZ2xvYmFsIG9mZmljZXMgaW4gQWJlcmRlZW4sIEJha3UsIEJlcmdlbiwgSG91c3RvbiwgTG9uZG9uIGFuZCBTdC4gSm9obuKAmXMgKENhbmFkYSkgd2UgYXJlIHdlbGwgcG9zaXRpb25lZCB0byBkZWxpdmVyIHByb2plY3Qgd29yayBhbnl3aGVyZSBpbiB0aGUgd29ybGQuIFxyXG5cclxuT3VyIHNlcnZpY2VzIGluY2x1ZGU6XHJcblxyXG5FbmdpbmVlcmluZyBkZXNpZ24gZm9yIG5ldy1idWlsZHM6IFJEUycgcHJpbWFyeSBmb2N1cyBpcyBsYXJnZSwgaGFyc2ggZW52aXJvbm1lbnQgcGxhdGZvcm0gZHJpbGxpbmcgcmlncyBhbmQgZHJpbGxpbmcgcGFja2FnZXMgZm9yIG1vYmlsZSBkcmlsbGluZyB1bml0cy4gT3VyIGdyZWVuZmllbGQgY2FwYWJpbGl0aWVzIGNhbiB0YWtlIGEgcHJvamVjdCBmcm9tIGRyYXdpbmcgYm9hcmQgY29uY2VwdCBzdGFnZSBpbnRvIGZyb250IGVuZCBlbmdpbmVlcmluZyBkZXNpZ24gKEZFRUQpIGFuZCB0aHJvdWdoIGRldGFpbGVkIGRlc2lnbiwgaW5jbHVkaW5nIHNwZWNpZmljYXRpb24gYW5kIG1hbmFnZW1lbnQgb2YgdGhlIHByb2N1cmVtZW50IG9mIGRyaWxsaW5nIGVxdWlwbWVudC5cclxuXHJcblJpZyByZWFjdGl2YXRpb24gb3IgbW9kaWZpY2F0aW9uOiBXaGV0aGVyIGEgbWlub3IgcGlwaW5nIHJlY29uZmlndXJhdGlvbiBvciBhbiBlbnRpcmUgcmlnIHJlYWN0aXZhdGlvbiwgYW4gb2Zmc2hvcmUgcGxhdGZvcm0gb3IgbGFuZCByaWcsIFJEUyBwcm92aWRlcyBlbmdpbmVlcmluZyBzZXJ2aWNlcyB0aHJvdWdob3V0IGFsbCBzdGFnZXMgb2YgYSBicm93bmZpZWxkIHByb2plY3QuIFdlIHN1cHBvcnQgYnJvd25maWVsZCBtb2RpZmljYXRpb25zIGluIG1hbnkgY291bnRyaWVzIGZyb20gb3VyIG9mZmljZXMgaW4gQWJlcmRlZW4sIEJlcmdlbiBhbmQgQmFrdS5cclxuXHJcbkNvbmNlcHR1YWwgZW5naW5lZXJpbmcgYW5kIGNvbnN1bHRhbmN5OiBSRFMgcHJvdmlkZXMgZW5oYW5jZWQgZm9jdXMgb24gdGhlIGVhcmxpZXN0IHBoYXNlIG9mIG1ham9yIHByb2plY3RzIHRocm91Z2ggYSBncm91cCBvZiBleHBlcnRzIHdobyBzcGVjaWFsaXNlIGluIHRoZSBkZWxpdmVyeSBvZiBoaWdoIHF1YWxpdHkgY29uY2VwdCBzdHVkaWVzLiBUaGlzIHRlYW0gYWxzbyBvZmZlcnMgZHJpbGxpbmcgZmFjaWxpdGllcyBhbmQgZHJpbGxpbmcgb3BlcmF0aW9ucyBjb25zdWx0YW5jeSBzZXJ2aWNlcyB3aGljaCBjYW4gYmUgYXBwbGllZCBpbiBhIHZhcmlldHkgb2Ygc2NlbmFyaW9zIGFuZCBhY3Jvc3MgYWxsIHR5cGVzIG9mIHJpZ3MuXHJcblxyXG5Db25zdHJ1Y3Rpb24gYW5kIGNvbW1pc3Npb25pbmcgc3VwcG9ydDogUkRTIHByb3ZpZGVzIHNwZWNpYWxpc3QgZHJpbGxpbmcgaW5wdXQgZHVyaW5nIHRoZSBjb25zdHJ1Y3Rpb24gYW5kIGNvbW1pc3Npb25pbmcgcGhhc2VzIG9mIG5ldy1idWlsZCBhbmQgbW9kaWZpY2F0aW9uIHByb2plY3RzLiBPdXIgYXBwcm9hY2ggaXMgdG8gYXNzZW1ibGUgYSB0ZWFtIHRoYXQgd29ya3MgaW4gYW4gaW50ZWdyYXRlZCBtYW5uZXIgYWxvbmdzaWRlIHRoZSBzaGlweWFyZCBvciB0b3BzaWRlIGNvbnRyYWN0b3IuIFRoaXMgdGVhbSBpcyByZXNwb25zaWJsZSBmb3IgYXNzaXN0aW5nIHRoZSBjbGllbnQgaW4gdGhlIGRlbGl2ZXJ5IG9mIGEgZHJpbGwgcmlnIHJlYWR5IGFuZCBzYWZlIHRvIGJlZ2luIGRyaWxsaW5nIG9wZXJhdGlvbnMuXHJcblxyXG7igJxBdCBSRFMgb3VyIGdvYWwgaXMgdG8gZW5naW5lZXIgdGhlIHNhZmVzdCBhbmQgbW9zdCBlZmZpY2llbnQgcmlncyBhbmQgdG8gZXhjZWVkIGNsaWVudHMgZXhwZWN0YXRpb25zIGFzIHdlIGRvIHNvLiAgIEJlaW5nIHBhcnQgb2YgdGhlIHdpZGVyIFBldHJvR2FzIGdyb3VwLCBhbmQgaGF2aW5nIGFjY2VzcyB0byB0aGUgb3BlcmF0aW9uYWwgZXhwZXJpZW5jZSBmcm9tIHRoZSBvdGhlciBkaXZpc2lvbnMgaXMgYSBrZXkgcGFydCBvZiB0aGlzIGdvYWwuICBUaGUgcmVxdWlyZW1lbnRzIGZvciBhdXRvbWF0aW9uLCBzYWZldHkgaW4gZGVzaWduLCBlbnZpcm9ubWVudGFsIHByb3RlY3Rpb24sIGhhcnNoIGVudmlyb25tZW50IGZhY2lsaXRpZXMgYW5kIGVmZmljaWVudCBvcGVyYXRpb25zIGNvbnRpbnVlIHRvIGluY3JlYXNlIHJhcGlkbHkgYW5kIFJEUyBzdHJpdmVzIHRvIGxlYWQgdGhlIGluZHVzdHJ5IGluIHRoZXNlIGFyZWFzLuKAnVxyXG48YnIgLz5cclxuPGJyIC8+XHJcbkFsYmVydCBBbGxhbjxiciAvPlxyXG5TZW5pb3IgVmljZSBQcmVzaWRlbnQsIFJEU1xyXG48YnIgLz5cclxuPGJyIC8+Rm9yIG1vcmUgaW5mb3JtYXRpb24gcGxlYXNlIHZpc2l0IG91ciB3ZWJzaXRlIGF0IDxhIGhyZWY9XCJ3d3cucmRzb2lsLmNvbVwiPnd3dy5yZHNvaWwuY29tPC9hPlxyXG48YnIgLz5cclxuPGJyIC8+XHJcbjxociAvPlxyXG48YnIgLz5cclxuXHJcbiAgICA8L3A+XHJcbiAgPC9zZWN0aW9uPlxyXG4gIDxzZWN0aW9uID5cclxuICAgIDxoMj5Cb250ZWM8L2gyPlxyXG4gICAgPHA+XHJcbjxpbWcgc3JjPVwiL2JvbnRlYy5qcGdcIiBhbHQ9XCJCb250ZWMgaW1hZ2VcIiAvPiA8YnIgLz5cclxuQmVudGVjIGlzIGEgbGVhZGluZyBnbG9iYWwgbWFudWZhY3R1cmVyIG9mIGRyaWxsaW5nIHJpZ3MgYW5kIG9pbGZpZWxkIGVxdWlwbWVudC4gSXQgZGVzaWducyBhbmQgbWFudWZhY3R1cmVzIHN0YXRlLW9mLXRoZS1hcnQsIGhpZ2gtcXVhbGl0eSBhbmQgY29zdC1lZmZlY3RpdmUgZHJpbGxpbmcgcmlncyBhcyB3ZWxsIGFzIGEgcmFuZ2Ugb2YgZXF1aXBtZW50IHdoaWNoIGluY2x1ZGUgdG9wIGRyaXZlcy4gICBUaGVzZSBhcmUgYWJsZSB0byBvcGVyYXRlIGluIGFsbCBlbnZpcm9ubWVudHMsIGZyb20gdGhlIGRlc2VydCB0byB0aGUgYXJjdGljLiBcclxuXHJcbkhlYWRxdWFydGVyZWQgaW4gQmFkIEJlbnRoZWltIGluIEdlcm1hbnksIEJlbnRlY+KAmXMgbWFudWZhY3R1cmluZyBmYWNpbGl0eSBleHRlbmRzIG92ZXIgMTEwLDAwMCBtwrIgYW5kIGluY2x1ZGVzIDEzLDAwMCBtwrIgb2YgZnVsbHkgZXF1aXBwZWQgY292ZXJlZCB3b3Jrc2hvcHMg4oCTIGVub3VnaCB0byBjb21taXNzaW9uIGFuZCB0ZXN0IHJpZ3MgZm9yIGNvbXBsZXRlIHR1cm5rZXkgcHJvamVjdHMuIFxyXG5cclxuQWRkaXRpb25hbCBwcm9kdWN0aW9uIGFuZCBzZXJ2aWNlIHdvcmtzaG9wcyBpbiBSdXNzaWEgYW5kIHRoZSBNaWRkbGUgRWFzdCBndWFyYW50ZWUgc2VydmljZSBzdXBwb3J0IGFyb3VuZCB0aGUgZ2xvYmUuIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uIHBsZWFzZSB2aXNpdCBvdXIgd2Vic2l0ZSBhdHd3dy5iZW50ZWMuY29tLlxyXG5cclxu4oCcT3VyIHRlY2hub2xvZ2llcyBhbmQgcHJvZHVjdHMgY29udGludWUgdG8gZXhjZWVkIG91ciBjdXN0b21lcnPigJkgZXhwZWN0YXRpb25zLiBIb3dldmVyLCBpdCBpcyBvdXIgcGVvcGxlIHdobyBzaGFwZSBhbmQgZHJpdmUgb3VyIGZ1dHVyZSBhY2hpZXZlbWVudHMuIEJvdGggb3VyIGVtcGxveWVlcyBhbmQgb3VyIGNvbXBhbnkgYXJlIGNoYXJhY3RlcmlzZWQgYnkgY29uZmlkZW5jZSwgaW52ZW50aXZlbmVzcyBhbmQgZGV0ZXJtaW5hdGlvbiDigJMgdGhlIGRlY2lzaXZlIGZhY3RvcnMgaW4gQmVudGVj4oCZcyBjb250aW51b3VzIHN1Y2Nlc3MgaW4gdGhlIGRyaWxsaW5nIGVxdWlwbWVudCBtYXJrZXQu4oCdIFxyXG48YnIgLz5cclxuPGJyIC8+XHJcbkRpcmsgU2NodWx6ZSwgPGJyIC8+XHJcbkNoaWVmIEV4ZWN1dGl2ZSBPZmZpY2VyLCBCZW50ZWMgPGJyIC8+XHJcbjxiciAvPlxyXG48aHIgLz5cclxuXHJcblxyXG4gICAgPC9wPlxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbjwvYXJ0aWNsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuLnNlcnZpY2Vze1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogNWVtO1xyXG59XHJcblxyXG4uc2VydmljZXMgaW1ne1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlcnZpY2VzIHB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIG1hcmdpbjogMWVtIDAgMWVtIDA7XHJcbn1cclxuLnNlcnZpY2VzIGgxe1xyXG4gIG1hcmdpbjogMWVtIDAgMC4yZW0gMDtcclxuXHJcbn1cclxuXHJcbi5zZXJ2aWNlcyBoMntcclxuICBjb2xvcjpncmV5O1xyXG59XHJcbmFydGljbGUgc2VjdGlvbiBpbWd7XHJcbndpZHRoOjQwZW07XHJcbmhlaWdodDoyMGVtO1xyXG5tYXJnaW4tYm90dG9tOjAuOGVtO1xyXG59XHJcblxyXG5hcnRpY2xlIHNlY3Rpb24gaDR7XHJcbiAgbWFyZ2luLXRvcDogMC44ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgLnNlcnZpY2Vze1xyXG4gICAgbWFyZ2luOjFlbTtcclxuICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgfVxyXG59XHJcbiAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\User PC\\\\workspace\\\\kca\\\\pages\\\\services.js */"));
}

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/services.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User PC\workspace\kca\pages\services.js */"./pages/services.js");


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
//# sourceMappingURL=services.js.map