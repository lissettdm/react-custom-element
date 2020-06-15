"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 *
 * @param {React.Component} Component
 * @param {string} tagName
 * @param {*} options, { properties, customEvents, shadowDOM, mode }
 */
var createElement = function createElement(Component) {
  var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "custom-element";

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$properties = _ref.properties,
      properties = _ref$properties === void 0 ? [] : _ref$properties,
      _ref$customEvents = _ref.customEvents,
      customEvents = _ref$customEvents === void 0 ? [] : _ref$customEvents,
      _ref$shadowDOM = _ref.shadowDOM,
      shadowDOM = _ref$shadowDOM === void 0 ? false : _ref$shadowDOM,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? "open" : _ref$mode;

  var WebComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(WebComponent, _HTMLElement);

    var _super = _createSuper(WebComponent);

    function WebComponent() {
      _classCallCheck(this, WebComponent);

      return _super.call(this);
    }

    _createClass(WebComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.node = this;

        if (shadowDOM) {
          this.node = this.attachShadow({
            mode: mode
          });
        }

        this.render();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        this.render();
      }
    }, {
      key: "render",
      value: function render() {
        var events = this.getCustomEvents();
        var props = this.getCustomProps();

        _reactDom.default.render( /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, events)), this.node);
      }
    }, {
      key: "getCustomProps",
      value: function getCustomProps() {
        var _this = this;

        var props = {};
        properties.forEach(function (key) {
          props[key] = _this.getAttribute(key);
        });
        return props;
      }
    }, {
      key: "getCustomEvents",
      value: function getCustomEvents() {
        var _this2 = this;

        var events = {};
        customEvents.forEach(function (key) {
          events[key] = function (e) {
            var event = this.createEvent("Event");
            event.initEvent(key, true, true);
            this.dispatchEvent(event, e);
          };

          events[key] = events[key].bind(_this2);
        });
        return events;
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _reactDom.default.unmountComponentAtNode(this);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return _toConsumableArray(properties) || [];
      }
    }]);

    return WebComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  window.customElements.define(tagName, WebComponent);
};

var _default = createElement;
exports.default = _default;
